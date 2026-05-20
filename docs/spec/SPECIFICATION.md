# AcceleratorImage URL Generation Specification

**Version:** 1  
**Status:** Authoritative  
**Scope:** `AcceleratorImage` class only. `LegacyImage` is out of scope.

This document is a language-agnostic specification intended to guide reimplementation of the
`AcceleratorImage` URL encoding logic in any programming language (Kotlin, Swift/Objective-C,
PHP, Python, etc.).

For a high-level overview of the library's purpose and usage examples from the perspective of
a TypeScript consumer, refer to the
[published npm README](https://www.npmjs.com/package/@ringpublishing/accelerator-images).
It provides useful context for understanding *what* the library does and how its API is intended
to be used — this document focuses on *how* the URL encoding should be implemented.

---

## 1. Overview

`AcceleratorImage` encodes three pieces of data into a single URL:

1. **Original image URL** — the source image (`http://`, `https://`, or `s3://`).
2. **Transformations** — an ordered list of image operations (resize, crop, blur, etc.).
3. **Global parameters** — image-wide settings (format, quality, animation, auto-orient).

The resulting **transformation URL** is served by the Ring Accelerator Images variant, which
decodes the token, fetches the original image, applies the transformations, and returns the
result to the end user.

---

## 2. Constructor Inputs

| Field | Type | Required | Description |
|---|---|-----|---|
| `originalImageUrl` | string \| null | Yes | Source image URL. Supported schemes: `http`, `https`, `s3`. |
| `transformationKey` | string \| null | Yes | Shared secret used to sign the encoded token. |
| `transformationHost` | string | Yes | Hostname of the Accelerator Images variant (e.g. `images.example.com`). |

If `originalImageUrl` is absent or `null`, the instance is **uninitialized**. Calling `getUrl()`
on an uninitialized instance MUST throw an error. Calling `toString()` on an uninitialized
instance MUST return the placeholder string `"[Uninitialized AcceleratorImage object]"`.

---

## 3. `getUrl()` Decision Logic

```
if NOT initialized:
    throw InvalidParameter("Instance of AcceleratorImage is not initialized")

if NO transformations AND NO parameters:
    return originalImageUrl   // pass-through, no encoding

if transformationKey IS NULL:
    throw InvalidParameter("Transformation key is required when using transformations or parameters")

if metadata transformation is set AND other transformations also set:
    throw InvalidParameter("Cannot use metadata transformation with other transformations. Use it as the only transformation.")

return buildTransformationUrl()
```

> **`transformationKey` when encoding:** A `null` or absent key is only valid for the
> pass-through case (no transformations, no parameters). If the caller has set at least one
> transformation or parameter and the key is `null`, `getUrl()` MUST throw `InvalidParameter`.
> There is no fallback to signing with an empty string.

> **`transformationHost` when encoding:** The `transformationHost` is required only when a
> transformation URL is actually assembled (i.e. when `hasTransforms` is `true`). It is not
> validated at construction time. The error is thrown lazily inside `buildTransformationUrl()`
> if the host is missing at that point.

---

## 4. Transformation URL Structure

```
{protocol}://{transformationHost}/{VERSION}/{token}[/{fileName}]
```

| Component | Value |
|---|---|
| `protocol` | `https` (default), `http` (if `forceHttpProtocol()` called), or absent `//` (if `withoutProtocol()` called) |
| `transformationHost` | As provided in constructor |
| `VERSION` | `"1"` (the only supported version) |
| `token` | URL-safe signed encoded token — see Section 5 |
| `fileName` | Optional. Present only when `setName()` is called — see Section 8 |

When `relative()` is called, only the path is returned (no protocol/host):
```
/{VERSION}/{token}[/{fileName}]
```

> **Note:** `relative()`, `withoutProtocol()`, and `forceHttpProtocol()` only affect the
> transformation URL. When no transformations or parameters are set and `getUrl()` returns
> the original image URL unchanged, these modifiers have no effect.

---

## 5. Token Encoding Pipeline

The token is produced by the encoding routine and has the following structure:

```
{signature}{base64data}
```

### 5.1 Input Data Structure

The raw data to encode is a tuple:

```
[originalImageUrl: string, transforms: EncodedTransform[], params: EncodedParams]
```

Where:
- `transforms` is an ordered array of encoded transform arrays (see Section 6).
- `params` is a MessagePack map of `parameterCode (integer) → encodedValue` (see Section 7).
  It is serialized as a msgpack **map**, not an array.
- **When `params` is empty, it MUST be omitted** from the tuple before serialization
  (the tuple becomes a 2-element array `[url, transforms]`). This is not optional — the
  2-element form is required whenever no parameters are set, in order to match reference
  test vectors.

### 5.2 Serialization

Serialize the data using **MessagePack** (msgpack). Use any standard msgpack library available
for your target language. The Ring Accelerator server uses a msgpack deserializer that accepts
all valid msgpack encodings.

> **Interoperability note — `params` map keys:**
>
> The reference TypeScript implementation (`msgpackr`) serializes the `params` map with
> **string keys** (e.g. `"0"` for `imageFormat`) because JavaScript object keys are always
> strings. Standard msgpack libraries in other languages (Kotlin, PHP, Swift, Python, …) will
> naturally serialize the map with **integer keys** (e.g. `0`).
>
> Both string and integer keys are valid msgpack and are accepted by the Ring Accelerator
> server. However, they produce different byte sequences and therefore different Base64 tokens.
> See `TEST_CASES.md` for guidance on how to handle this in tests.

### 5.3 Base64 Encoding

Encode the binary data as **URL-safe Base64** (RFC 4648 §5):
- Replace `+` → `-`
- Replace `/` → `_`
- Strip all `=` padding

Result is called `base64data`.

### 5.4 Signature

Compute a signature to prevent tampering:

```
signatureInput = base64data + "/" + transformationKey
md5Hash        = MD5(signatureInput)                                // raw binary, 16 bytes
base64Sig      = Base64(md5Hash)                                    // standard Base64
urlSafeSig     = base64Sig.replaceAll("+","-").replaceAll("/","_")  // replace all '+' and '/' characters
signature      = urlSafeSig[0:3]                                    // first 3 characters only (after URL-safe mapping)
```

The `+` → `-` and `/` → `_` substitutions MUST be applied to the entire `base64Sig` value,
i.e. **all occurrences** of `+` and `/` in `base64Sig` MUST be replaced, before taking the
`urlSafeSig[0:3]` substring. Equivalently, every `+` or `/` character that would appear in the
3-character prefix of the Base64-encoded hash MUST be replaced with `-` or `_` respectively in
the exported `signature`.

### 5.5 Final Token

```
token = signature + base64data
```

The first 3 characters are always the signature; the rest is the Base64-encoded msgpack payload.

### 5.6 Decoding (reverse)

To decode a token:
1. Extract `signature = token[0:3]`, `base64data = token[3:]`.
2. Reconstruct the signature input used at encoding time:
    ```
    signatureInput = base64data + "/" + transformationKey
    ```
3. Compute the expected signature using the same algorithm:
    ```
    md5Hash        = MD5(signatureInput)                                      // raw binary, 16 bytes
    base64Sig      = Base64(md5Hash)                                          // standard Base64
    urlSafeSig     = base64Sig.replaceAll("+", "-").replaceAll("/", "_")      // URL-safe substitutions
    expectedSig    = urlSafeSig[0:3]                                          // first 3 characters only
    ```
4. Compare `expectedSig` to the extracted `signature`. If they differ, the token MUST be rejected as having an invalid signature.
   Throw `AcceleratorImageError("Invalid signature")`.
5. Decode `base64data` from URL-safe Base64 back to bytes.
6. Deserialize bytes using MessagePack to obtain `[url, transforms, params?]`.

---

## 6. Transformations Schema

Each transformation is encoded as an array:

```
[transformCode: integer, ...encodedArgs]
```

Transformations are applied **in order** as they appear in the `transforms` array.

### 6.1 Transform Codes and Arguments

| Code | Name | Arguments (in order) |
|---|---|---|
| 0 | `rotate` | `angle: integer` (number of 90° CW rotations, min: 0) |
| 1 | `blur` | `power: integer` (blur strength, min: 0, max: 100, **default: 10**) |
| 2 | `resize` | `width: integer` (min: 0), `height: integer` (min: 0), `scaleUp: boolean` (**default: true**), `scaleDown: boolean` (**default: true**) |
| 3 | `crop` | `x: integer` (min: 0), `y: integer` (min: 0), `width: integer` (min: 0), `height: integer` (min: 0) |
| 4 | `grayscale` | *(no arguments)* |
| 5 | `resizeCropAuto` | `width: integer` (min: 1), `height: integer` (min: 1) |
| 6 | `setBackground` | `red: integer` (0–255), `green: integer` (0–255), `blue: integer` (0–255), `alpha: integer` (0–255, **default: 255**) |
| 7 | `overlay` | `uri: string`, `position: enum` (**default: 0=stretch**), `reverse: boolean` (**default: false**), `mode: enum` (**default: 0=over**) |
| 8 | `hash` | `type: enum` (**default: 0=md5**) |
| 9 | `setName` | `name: string`, `len: integer` (**default: 6**) |
| 10 | `keepAspectRatio` | `width: integer`, `height: integer`, `blurPower: integer` (0–100, **default: 10**), `red: integer` (0–255, **default: 0**), `green: integer` (0–255, **default: 0**), `blue: integer` (0–255, **default: 0**), `alpha: integer` (0–255, **default: 175**), `toleranceX: integer` (0–100, **default: 0**), `toleranceY: integer` (0–100, **default: 0**) |
| 11 | `metadata` | `mode: enum` (**default: 0=basic**). **Cannot be combined with other transforms.** |
| 12 | `setFocalPoint` | `x: integer` (min: 0), `y: integer` (min: 0) |

### 6.2 Enum Values

#### `overlay` — position (argument index 1)

| Encoded | Decoded |
|---|---|
| 0 | `stretch` |
| 1 | `top-left` |
| 2 | `top-center` |
| 3 | `top-right` |
| 4 | `center-left` |
| 5 | `center-center` |
| 6 | `center-right` |
| 7 | `bottom-left` |
| 8 | `bottom-center` |
| 9 | `bottom-right` |

#### `overlay` — mode (argument index 3)

| Encoded | Decoded | Encoded | Decoded |
|---|---|---|---|
| 0 | `over` | 11 | `multiply` |
| 1 | `in` | 12 | `bumpmap` |
| 2 | `out` | 13 | `copy` |
| 3 | `atop` | 14 | `copy-red` |
| 4 | `xor` | 15 | `copy-green` |
| 5 | `plus` | 16 | `copy-blue` |
| 6 | `minus` | 17 | `copy-opacity` |
| 7 | `add` | 18 | `copy-cyan` |
| 8 | `subtract` | 19 | `copy-magenta` |
| 9 | `difference` | 20 | `copy-yellow` |
| 10 | `divide` | 21 | `copy-black` |

#### `hash` — type (argument index 0)

| Encoded | Decoded |
|---|---|
| 0 | `md5` |
| 1 | `sha1` |

#### `metadata` — mode (argument index 0)

| Encoded | Decoded |
|---|---|
| 0 | `basic` |
| 1 | `exif` |
| 2 | `iptc` |
| 3 | `all` |

### 6.3 Argument Encoding Rules

- **integer**: first validate min/max constraints against the caller-supplied numeric value. If it passes validation, floor the value toward negative infinity (i.e. `Math.floor`) and use that result for encoding.
- **boolean**: store as-is (`true`/`false`).
- **string**: store as-is.
- **enum**: store the **integer code**, not the string value.
- **default values**: when an argument is not provided by the caller, use the schema default.
  If no default is defined and no value is provided, throw an error.

---

## 7. Global Parameters Schema

Parameters are encoded as a map `{ parameterCode: encodedValue }`.

| Code | Name | Type | Default |
|---|---|---|---|
| 0 | `imageFormat` | enum | `0` (`original`) |
| 1 | `imageQuality` | enum | `1` (`medium`) |
| 2 | `animation` | boolean | `true` |
| 3 | `autoOrient` | boolean | `false` |
| 5 | `extractDominantColor` | boolean | `false` |
| 6 | `extractDimensions` | boolean | `false` |

> **Note:** These are server-side defaults that describe server behavior when a parameter is
> absent from the token. `getParameters()` MUST only return values explicitly set by the caller
> — defaults MUST NOT be pre-populated in the encoded params map. See Section 13.2.

> **Note:** Parameter code `4` (`autoImageFormat`) is reserved for internal use and MUST NOT
> be set or read by client implementations.

> **Note:** Parameters `extractDominantColor` (code 5) and `extractDimensions` (code 6)
> instruct the worker to compute additional image metadata and return it as response headers
> (`x-acc-img-dominant-color`, `x-acc-img-color-palette`, `x-acc-img-width`, `x-acc-img-height`).
> When used together with the `metadata()` transform, the extracted values are also included
> in the JSON response body. These parameters accept no arguments — calling the setter always
> stores `true`.

### 7.1 `imageFormat` Enum Values

| Encoded | Decoded |
|---|---|
| 0 | `original` |
| 1 | `jpeg` |
| 2 | `png` |
| 3 | `bmp` |
| 4 | `tiff` |
| 5 | `webp` |
| 6 | `avif` |
| 7 | `auto` |

### 7.2 `imageQuality` Enum Values

| Encoded | Decoded |
|---|---|
| 0 | `low` |
| 1 | `medium` |
| 2 | `high` |
| 3 | `very-high` |
| 4 | `auto` |

---

## 8. `setName` — Special Behaviour in `AcceleratorImage`

The `setName()` method in `AcceleratorImage` overrides the base `ImageTransformBuilder.setName()`
and behaves differently:

1. The full human-readable `name` is **appended as a path segment** after the token in the URL:
   ```
   https://{host}/1/{token}/{name}
   ```
2. Inside the token, the `setName` transformation (code `9`) is encoded with:
    - `name` argument = first **6 characters of the lowercase hex-encoded MD5 digest** of `name`
    - `len` argument = `6`

> **Important:** The token argument for `name` is **not** the original name string but the
> first 6 characters of its MD5 hex digest (lowercase). The original name is stored only in
> the URL path segment and is not recoverable from the token alone.

**Example:** `setName("photo.jpg")` →
- URL path segment: `photo.jpg`
- Encoded transform args: `[9, "a1b2c3", 6]` (where `"a1b2c3"` = lowercase `MD5("photo.jpg")[0:6]`)

The `name` argument MUST NOT contain `/`. If it does, throw `InvalidParameter`.

**Round-trip via `fromTransformationUrl`:** When a URL containing a `setName` path segment is
parsed by `fromTransformationUrl`, the filename path segment is restored on the resulting
instance. Calling `getUrl()` on the decoded instance will re-append the original filename path
segment, producing an identical URL to the one that was parsed.

---

## 9. Source Image URL Handling

Supported schemes for `originalImageUrl`:
- `http://` — standard HTTP URL
- `https://` — standard HTTPS URL
- `s3://` — AWS S3 URI in the form `s3://{bucket}/{key}`

An unsupported scheme MUST throw `InvalidParameter("Unsupported protocol")`.

The `originalImageUrl` is stored verbatim in the token — it is not modified or normalized before
encoding.

When transformations are applied, the output URL always uses `https://` by default, regardless of
the protocol of the original image. To override, use `forceHttpProtocol()` or `withoutProtocol()`.

---

## 10. Error Conditions

| Situation | Error Type | Message (exact) |
|---|---|---|
| `getUrl()` on uninitialized instance | `InvalidParameter` | `"Instance of AcceleratorImage is not initialized"` |
| `getUrl()` with transforms but `null` key | `InvalidParameter` | `"Transformation key is required when using transformations or parameters"` |
| `metadata` used with other transforms | `InvalidParameter` | `"Cannot use metadata transformation with other transformations. Use it as the only transformation."` |
| Unsupported protocol in `originalImageUrl` | `InvalidParameter` | `"Unsupported protocol"` |
| `transformationHost` missing or empty when needed | `InvalidParameter` | `"Transformation host is not set. You need to set the transformation host to parse this URL"` |
| `setName` receives a name containing `/` | `InvalidParameter` | `"Invalid name given. Name should not contain \"/\""` |
| Integer argument below `minValue` | `InvalidParameter` | `"Value must be greater than {minValue}"` |
| Integer argument above `maxValue` | `InvalidParameter` | `"Value must be less than {maxValue}"` |
| Unknown enum value for a parameter | `InvalidParameter` | `"Cannot encode value of \"{value}\" for parameter {name}"` |
| Invalid signature in token | `AcceleratorImageError` | `"Invalid signature"` |
| URL version mismatch during decode | `UrlError` | `"Invalid transformation version of {v}. Expected version is 1"` |
| Malformed URL string | `UrlError` | `"Failed to parse original URL of: {url}"` |
| `fromTransformationUrl` called with a protocol-relative URL (e.g. `//host/1/token`) | `UrlError` | `"Failed to parse original URL of: {url}"` |
| `fromTransformationUrl` called with a path-relative URL (e.g. `/1/token`) | `UrlError` | `"Failed to parse original URL of: {url}"` |

---

## 11. `metadata`-Only Constraint

The `metadata` transformation (code `11`) is special — it requests image metadata instead of
processing the image. It MUST be used as the **sole** transformation in the list. If any other
transformation is present alongside `metadata`, `getUrl()` MUST throw `InvalidParameter`.

Parameters (`imageFormat`, `imageQuality`, etc.) are stored separately from transformations and
do **not** conflict with `metadata`.

---

## 12. Additional Public API

The following methods and properties are part of the public API that implementors MUST support.
They do not affect the encoding pipeline but are essential for a correct and usable implementation.

### 12.1 `toString()`

Returns the same value as `getUrl()`. When the instance is uninitialized (no `originalImageUrl`
was provided), returns the placeholder string `"[Uninitialized AcceleratorImage object]"` instead
of throwing.

### 12.2 `hasTransforms` (read-only property)

Returns `true` when at least one transformation **or** at least one global parameter has been
set on the instance. Returns `false` on a freshly constructed instance with no transformations
and no parameters.

> **Language note:** In TypeScript this is implemented as a getter (`get hasTransforms()`).
> In languages without getter syntax (PHP, Python, Kotlin), this SHOULD be exposed as a
> zero-argument method `hasTransforms()` returning boolean.

### 12.3 `getParent()`

Returns a new, bare `AcceleratorImage` instance pointing at the same `originalImageUrl`, with
the same `transformationKey` and `transformationHost`, but with **no transformations and no
parameters**. Useful for starting a new transformation chain from the same source image.

### 12.4 `clone()`

Returns a deep copy of the current instance with all transformations and parameters duplicated.
Mutations applied to the clone do not affect the original instance and vice-versa.

When no transformations or parameters are set, `clone()` behaves identically to `getParent()`.

> **Language note:** In PHP, `clone` is a reserved keyword. Implementations MAY expose this
> method under an alternative name such as `cloneInstance()` while preserving identical behaviour.

### 12.5 `relative(isRelative = true)`

Makes the generated URL path-relative (no protocol or host). When `isRelative` is `true`
(the default), `getUrl()` returns only the path portion `/1/{token}[/{fileName}]`. Pass `false`
to revert to an absolute URL. Has no effect when no transformations or parameters are set.

### 12.6 `withoutProtocol()`

Produces a protocol-relative URL (`//host/1/{token}`) instead of the default `https://` URL.
Has no effect when no transformations or parameters are set.

### 12.7 `forceHttpProtocol()`

Forces the generated transformation URL to use `http://` instead of the default `https://`.
Has no effect when no transformations or parameters are set.

> **Protocol modifier precedence:** `relative()`, `withoutProtocol()`, and `forceHttpProtocol()`
> are mutually exclusive. Each call overrides the effect of the previous one (last-write-wins).
> `relative(true)` takes precedence over all protocol modifiers — a URL that is both relative
> and has a protocol modifier set MUST be emitted as a path-only string (no `//` or `http://`
> prefix). For example, calling `forceHttpProtocol()` after `relative(true)` still produces
> `/1/{token}`, not `http://host/1/{token}`. See TC-31 for a concrete test vector.

### 12.8 `fromTransformationUrl(transformedImageUrl, transformationKey)` (static)

Parses an existing Accelerator Images transformation URL and returns a fully initialized
`AcceleratorImage` instance with all transformations and parameters restored.

URL structure expected (as produced by `getUrl()`):
```
{protocol}://{host}/1/{token}[/{fileName}]
```

> **Input URL must be absolute.** `fromTransformationUrl` only accepts fully qualified URLs
> with a scheme (e.g. `https://host/1/token`). Protocol-relative (`//host/1/token`) and
> path-relative (`/1/token`) inputs are **not** supported and will throw `UrlError`.

Steps performed internally:
1. Parse the URL — extract `host`, `version`, `token`, and optional `fileName`.
2. Verify that `version` equals `"1"`. If not, throw `UrlError`.
3. Decode the token using the provided `transformationKey` (see Section 5.6).
4. Restore `originalImageUrl`, `transforms`, and `params` from the decoded data.
5. Restore `fileName` if present in the URL path. The restored `fileName` MUST be stored
   as internal state and re-emitted as the path suffix on a subsequent `getUrl()` call,
   producing an identical URL to the one parsed.

Throws:
- `UrlError` — if the URL is malformed or the version does not match.
- `AcceleratorImageError` — if the signature is invalid.

---

## 13. Read-back Accessors

Implementations MUST expose the following accessor methods to allow callers (and test suites)
to inspect the current state of an instance without calling `getUrl()`.

### 13.1 `getTransforms()`

Returns the **encoded** transforms array — a deep copy of the internal list. Each element is
itself an array of the form `[transformCode: integer, ...encodedArgs]` as defined in Section 6.

Returns an empty array when no transformations have been added.

### 13.2 `getParameters()`

Returns a **deep copy** of the encoded parameters map (`{ parameterCode: encodedValue }`).
Only parameters that have been explicitly set by the caller are included — defaults are **not**
pre-populated. Returns an empty object/map when no parameters have been set.

### 13.3 Per-transform read-back methods

Each transform method has a corresponding read-back method. The method returns the
**decoded** argument array for that transform (arguments only, without the leading transform
code), or `undefined`/`null` when the transform has not been added.

> **Language note:** `undefined` is used here for consistency with the TypeScript reference
> implementation. In languages without `undefined` (PHP, Kotlin, Swift, Python), return
> `null` / `nil` / `None` as the appropriate equivalent.

When multiple transforms of the same type are added, the read-back method returns the
arguments of the **first** occurrence found in the transforms list.

| Method | Returns when set | Returns when not set |
|---|---|---|
| `getRotate()` | `[angle]` | `undefined` |
| `getBlur()` | `[power]` | `undefined` |
| `getResize()` | `[width, height, scaleUp, scaleDown]` | `undefined` |
| `getCrop()` | `[x, y, width, height]` | `undefined` |
| `getGrayscale()` | `[]` (empty array) | `undefined` |
| `getResizeCropAuto()` | `[width, height]` | `undefined` |
| `getSetBackground()` | `[red, green, blue, alpha]` | `undefined` |
| `getOverlay()` | `[uri, position, reverse, mode]` | `undefined` |
| `getHash()` | `[type]` | `undefined` |
| `getSetName()` | `[name, len]` | `undefined` |
| `getKeepAspectRatio()` | `[width, height, blurPower, red, green, blue, alpha, toleranceX, toleranceY]` | `undefined` |
| `getMetadata()` | `[mode]` | `undefined` |
| `getSetFocalPoint()` | `[x, y]` | `undefined` |

All returned argument values are **decoded** (i.e. enum codes are converted back to their
string representations, integers returned as numbers, booleans as booleans).

### 13.4 Per-parameter read-back methods

| Method | Returns when set | Returns when not set |
|---|---|---|
| `getImageFormat()` | The decoded format string (e.g. `"webp"`) | `undefined` |
| `getImageQuality()` | The decoded quality string (e.g. `"high"`) | `undefined` |
| `getAnimation()` | `boolean` | `undefined` |
| `getAutoOrient()` | `boolean` | `undefined` |
| `getExtractDominantColor()` | `boolean` | `undefined` |
| `getExtractDimensions()` | `boolean` | `undefined` |
