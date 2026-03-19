# AcceleratorImage — Test Cases

All test vectors below use `transformationKey = "abc"` unless stated otherwise.
URLs are deterministic given the same inputs — they MUST match exactly **for test cases
without parameters**.

> **Testing test cases that involve parameters (TC-06, TC-19, TC-20, TC-25, TC-26):**
>
> The exact token string in a URL depends on how the msgpack library serializes the `params`
> map. The reference TypeScript implementation uses JavaScript object keys (always strings),
> while a standard library in Kotlin, PHP, Swift, etc. will naturally use integer keys.
> Both encodings are valid and accepted by the server, but produce different Base64 tokens.
>
> For test cases that include parameters, **verify correctness by decoding the generated token
> and comparing the resulting data structure**, not by comparing the raw URL string.
> The recommended approach:
> 1. Generate the URL with your implementation.
> 2. Extract the token (path segment after `/1/`).
> 3. Decode it: reverse the Base64, unpack msgpack, verify the signature.
> 4. Assert that the decoded `transforms` array and `params` map match the expected values
>    listed in the test case.
>
> For test cases **without parameters** (TC-04, TC-05, TC-07–TC-18, TC-21–TC-24, TC-27–TC-31), the URL
> string MUST match exactly — no msgpack variation is involved.

---

## TC-01: No transformations — pass-through

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- No transformations applied.

**Expected output of `getUrl()`:**
```
https://images.example.com/originals/kitten.png
```

> When no transformations and no parameters are set, `getUrl()` returns the original URL unchanged.

---

## TC-02: No transformation key — pass-through

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = null`
- `transformationHost = "images.example.com"`
- No transformations applied.

**Expected output of `getUrl()`:**
```
https://images.example.com/originals/kitten.png
```

---

## TC-03: Uninitialized instance — error

**Input:** `new AcceleratorImage({})` (no `originalImageUrl`)

**Expected:** `getUrl()` throws with message `"Instance of AcceleratorImage is not initialized"`  
**Expected:** `toString()` returns `"[Uninitialized AcceleratorImage object]"`

---

## TC-04: Chained transforms — blur + rotate + resize

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `blur(10)`, `rotate(2)`, `resize(100, 100)`

**Expected encoded transforms array:**
```json
[[1, 10], [0, 2], [2, 100, 100, true, true]]
```

**Expected output of `getUrl()`:**
```
https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD
```

---

## TC-05: Single rotation transform

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `rotate(1)`

**Expected encoded transforms array:**
```json
[[0, 1]]
```

**Expected output of `getUrl()`:**
```
https://images.example.com/1/a6SktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB
```

---

## TC-06: Rotation + format parameter

**Input:**
- `originalImageUrl = "http://images.example.com/my-bucket/img.jpg"`
- `transformationKey = "abc"`
- `transformationHost = "optimized.images.example.com"`
- Transformations: `rotate(1)`, `imageFormat("webp")`

**Expected encoded transforms array:**
```json
[[0, 1]]
```

**Expected encoded parameters map (integer keys):**
```json
{ 0: 5 }
```

> `imageFormat("webp")` encodes to parameter code `0` with value `5`.

**Verification:** Generate the URL, extract the token from the path (segment after `/1/`),
decode it (URL-safe Base64 → msgpack), verify the signature, then assert:
- `decoded[0]` (originalImageUrl) = `"http://images.example.com/my-bucket/img.jpg"`
- `decoded[1]` (transforms) = `[[0, 1]]`
- `decoded[2]` (params) contains key `0` (or `"0"`) with value `5`

> **Note:** The TypeScript reference vector for this test case is
> `/1/i6Ik9kraHR0cDovL2ltYWdlcy5leGFtcGxlLmNvbS9teS1idWNrZXQvaW1nLmpwZ5GSAAHeAAGhMAU`
> (with `relative()` applied). Do not assert this string from a non-TypeScript implementation —
> assert the decoded structure instead.

---

## TC-07: Protocol-relative URL (`withoutProtocol`)

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `rotate(1)`, then `withoutProtocol()`

**Expected output of `getUrl()`:**
```
//images.example.com/1/a6SktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB
```

---

## TC-08: `forceHttpProtocol` with transformations

**Input:**
- `originalImageUrl = "http://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `rotate(1)`, then `forceHttpProtocol()`

**Expected:** output URL starts with `http://`

---

## TC-09: Default HTTPS for transformations regardless of original protocol

**Input:**
- `originalImageUrl = "http://images.example.com/originals/kitten.png"` (note: `http`)
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `rotate(1)` (no `forceHttpProtocol` called)

**Expected:** output URL starts with `https://`

---

## TC-10: S3 URI source

**Input:**
- `originalImageUrl = "s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg"`
- `transformationKey = "abc"`
- `transformationHost = "img.example.com"`
- No transformations.

**Expected output of `getUrl()`:**
```
s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg
```

---

## TC-11: S3 URI source with `setName`

**Input:**
- `originalImageUrl = "s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg"`
- `transformationKey = "abc"`
- `transformationHost = "img.example.com"`
- Transformations: `setName("abc.jpg")`

**Expected output of `getUrl()`:**
```
https://img.example.com/1/6Pdktk_czM6Ly9zb21lLXMzLWJ1Y2tldC9pbWFnZXMvZDViODM0OGQ5YmJmY2U5NDUzNGQ2NmRiMWYzMzBmNDQuanBnkZMJpjc1NjM5ZAY/abc.jpg
```

> The URL ends with `/abc.jpg` (the literal filename). Inside the token, the `setName`
> transformation encodes `MD5("abc.jpg")[0:6]` (= `"756339"` in hex) with `len = 6`.

---

## TC-12: External domain source with `setName`

**Input:**
- `originalImageUrl = "https://external.domain.com/path/image.jpeg"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `setName("abc.jpg")`

**Expected output of `getUrl()`:**
```
https://images.example.com/1/a27ktkraHR0cHM6Ly9leHRlcm5hbC5kb21haW4uY29tL3BhdGgvaW1hZ2UuanBlZ5GTCaY3NTYzOWQG/abc.jpg
```

---

## TC-13: `fromTransformationUrl` round-trip

**Input:** encode, then decode.

Step 1 — encode:
- `originalImageUrl = "s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg"`
- `transformationKey = "abc"`, `transformationHost = "img.example.com"`
- Transformations: `resize(10, 10)`, `rotate(1)`, `grayscale()`

Step 2 — decode: `AcceleratorImage.fromTransformationUrl(urlFromStep1, "abc")`

**Expected decoded transforms:**
```json
[[2, 10, 10, true, true], [0, 1], [4]]
```

> A no-argument transform (e.g. `grayscale`) is encoded as a **single-element array** `[code]` —
> i.e. `[4]` for grayscale. There are no trailing elements.

**Expected:** `getParent().getUrl()` returns:
```
s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg
```

**Expected:** `getResize()` returns `[10, 10, true, true]`

---

## TC-14: `fromTransformationUrl` — existing URL preserves output

**Input:**
- `transformedUrl = "https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD"`
- `transformationKey = "abc"`

**Expected:** `fromTransformationUrl(transformedUrl, "abc").getUrl()` returns the same URL:
```
https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD
```

---

## TC-15: `fromTransformationUrl` — invalid signature error

**Input:**
- `transformedUrl = "https://images.example.com/1/k9kpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5naWaQgaEywg=="`
- `transformationKey = "abc"`

**Expected:** `fromTransformationUrl(...)` throws with message `"Invalid signature"`

---

## TC-16: `clone` — does not mutate original

Step 1: Create `image` with `originalImageUrl` and no transforms.  
Step 2: `clone = image.clone()`  
Step 3: Apply `blur(10)`, `rotate(2)`, `resize(100, 100)` to `clone`.

**Expected:** `image.getTransforms()` returns `[]`  
**Expected:** `image.getUrl()` returns the original URL unchanged  
**Expected:** `clone.getTransforms()` returns `[[1, 10], [0, 2], [2, 100, 100, true, true]]`  
**Expected:** `clone.getUrl()` returns:
```
https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD
```

---

## TC-17: `metadata` — cannot combine with other transforms

**Input:**
- Apply `rotate(1)`, then `metadata("exif")`.

**Expected:** `getUrl()` throws with message `"Cannot use metadata transformation with other transformations. Use it as the only transformation."`

---

## TC-18: `getParent` — returns bare instance

**Input:**
- `originalImageUrl = "http://my.test.domain.pl/img.jpg"`
- Apply any transformations, then call `getParent()`.

**Expected:** `getParent().getUrl()` returns:
```
http://my.test.domain.pl/img.jpg
```

---

## TC-19: `imageFormat` parameter encoding

**Verification:** call `imageFormat(value)` on an instance, then assert `getParameters()` returns
the expected map. Do **not** assert the URL string — token output varies by msgpack library.

| Input value | Expected `getParameters()` result |
|---|---|
| `"jpeg"` | `{ 0: 1 }` |
| `"webp"` | `{ 0: 5 }` |
| `"auto"` | `{ 0: 7 }` |
| `"original"` | `{ 0: 0 }` |
| `undefined` (default) | `{ 0: 0 }` |
| `"aaa"` (invalid) | throws `InvalidParameter` |

---

## TC-20: `imageQuality` parameter encoding

**Verification:** call `imageQuality(value)` on an instance, then assert `getParameters()` returns
the expected map. Do **not** assert the URL string — token output varies by msgpack library.

| Input value | Expected `getParameters()` result |
|---|---|
| `"high"` | `{ 1: 2 }` |
| `"auto"` | `{ 1: 4 }` |
| `undefined` (default) | `{ 1: 1 }` (medium) |
| `"xyz"` (invalid) | throws `InvalidParameter` |

---

## TC-21: `resize` default arguments

**Input:** `resize(100, 100)` — `scaleUp` and `scaleDown` omitted.

**Expected encoded transform:** `[2, 100, 100, true, true]`

> Both `scaleUp` and `scaleDown` default to `true`.

---

## TC-22: `blur` max value validation

**Input:** `blur(1683)` (exceeds max of 100)

**Expected:** throws `InvalidParameter` with message `"Value must be less than 100"`

---

## TC-23: `crop` negative value validation

**Input:** `crop(-100, 100, 200, 200)` (x below min of 0)

**Expected:** throws `InvalidParameter` with message `"Value must be greater than 0"`

---

## TC-24: `overlay` enum encoding

**Input:** `overlay("https://example.com/img.png", "stretch", true, "xor")`

**Expected encoded transform:** `[7, "https://example.com/img.png", 0, true, 4]`

> `"stretch"` → `0`, `"xor"` → `4`

---

## TC-25: `animation` parameter encoding

**Verification:** call `animation(value)` on an instance, then assert `getParameters()` returns
the expected map. Do **not** assert the URL string — token output varies by msgpack library.

| Input value | Expected `getParameters()` result |
|---|---|
| `false` | `{ 2: false }` |
| `true` | `{ 2: true }` |

> `animation` defaults to `true` (Section 7). Only explicitly set values appear in `getParameters()`.

---

## TC-26: `autoOrient` parameter encoding

**Verification:** call `autoOrient(value)` on an instance, then assert `getParameters()` returns
the expected map. Do **not** assert the URL string — token output varies by msgpack library.

| Input value | Expected `getParameters()` result |
|---|---|
| `true` | `{ 3: true }` |
| `false` | `{ 3: false }` |

> `autoOrient` defaults to `false` (Section 7). Only explicitly set values appear in `getParameters()`.

---

## TC-27: `keepAspectRatio` — default arguments

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `keepAspectRatio(800, 600)` — all optional arguments omitted.

**Expected encoded transform:**
```json
[10, 800, 600, 10, 0, 0, 0, 175, 0, 0]
```

> Arguments in order: `width, height, blurPower(default:10), red(0), green(0), blue(0), alpha(default:175), toleranceX(0), toleranceY(0)`.

**Expected output of `getUrl()`:**
```
https://images.example.com/1/d_sktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRmgrNAyDNAlgKAAAAzK8AAA
```

**Non-default variant** — `keepAspectRatio(800, 600, 20, 255, 0, 0, 200, 10, 5)`:

**Expected encoded transform:**
```json
[10, 800, 600, 20, 255, 0, 0, 200, 10, 5]
```

**Expected output of `getUrl()`:**
```
https://images.example.com/1/TJCktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRmgrNAyDNAlgUzP8AAMzICgU
```

---

## TC-28: `resizeCropAuto` encoding

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `resizeCropAuto(400, 300)`

**Expected encoded transform:**
```json
[5, 400, 300]
```

**Expected output of `getUrl()`:**
```
https://images.example.com/1/7zvktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkwXNAZDNASw
```

---

## TC-29: `setBackground` — default alpha

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `setBackground(255, 0, 128)` — `alpha` omitted (defaults to `255`).

**Expected encoded transform:**
```json
[6, 255, 0, 128, 255]
```

> `alpha` defaults to `255` (Section 6.1).

**Expected output of `getUrl()`:**
```
https://images.example.com/1/EZ-ktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRlQbM_wDMgMz_
```

---

## TC-30: `setFocalPoint` encoding

**Input:**
- `originalImageUrl = "https://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `setFocalPoint(100, 200)`

**Expected encoded transform:**
```json
[12, 100, 200]
```

**Expected output of `getUrl()`:**
```
https://images.example.com/1/dWaktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkwxkzMg
```

---

## TC-31: `relative(true)` takes precedence over `forceHttpProtocol()`

**Input:**
- `originalImageUrl = "http://images.example.com/originals/kitten.png"`
- `transformationKey = "abc"`
- `transformationHost = "images.example.com"`
- Transformations: `rotate(1)`, then `forceHttpProtocol()`, then `relative(true)`

**Expected:** `getUrl()` returns a path starting with `/1/` — NOT `http://`

```
/1/dW8ktkuaHR0cDovL2ltYWdlcy5leGFtcGxlLmNvbS9vcmlnaW5hbHMva2l0dGVuLnBuZ5GSAAE
```

> `relative(true)` MUST take precedence over all protocol modifiers. Regardless of the
> order in which protocol modifiers and `relative(true)` are applied, the resulting URL
> must be path-only (no scheme, no host). See also the precedence note in Section 12.7
> of the specification.
