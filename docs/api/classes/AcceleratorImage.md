[@ringpublishing/accelerator-images](../README.md) / AcceleratorImage

# Class: AcceleratorImage

Helper class for generating Ring Accelerator Images transformation URLs.

Encodes the original image URL, a list of transformations and global parameters
into a single URL-safe token that is served by the Accelerator Images variant.

When no transformations are set, [AcceleratorImage.getUrl](AcceleratorImage.md#geturl) returns the original image URL unchanged.
When at least one transformation or parameter is set, it returns a fully-qualified transformation URL
in the form `{protocol}://{transformationHost}/1/{token}[/{fileName}]`.

**`Example`**

```ts
const image = new AcceleratorImage({
    originalImageUrl: 's3://my-bucket/photo.jpg',
    transformationKey: 'secret',
    transformationHost: 'images.example.com',
});
const url = image.resize(800, 600).imageQuality('auto').getUrl();
```

**`Example`**

```ts
const image = AcceleratorImage.fromTransformationUrl(
    'https://images.example.com/1/abc123...',
    'secret'
);
```

## Hierarchy

- [`ImageTransformBuilder`](ImageTransformBuilder.md)

  ↳ **`AcceleratorImage`**

  ↳↳ [`LegacyImage`](LegacyImage.md)

## Table of contents

### Constructors

- [constructor](AcceleratorImage.md#constructor)

### Properties

- [fileName](AcceleratorImage.md#filename)
- [isInitialized](AcceleratorImage.md#isinitialized)
- [isRelative](AcceleratorImage.md#isrelative)
- [originalImageUrl](AcceleratorImage.md#originalimageurl)
- [params](AcceleratorImage.md#params)
- [processedUrl](AcceleratorImage.md#processedurl)
- [queryParameters](AcceleratorImage.md#queryparameters)
- [transformationHost](AcceleratorImage.md#transformationhost)
- [transformationKey](AcceleratorImage.md#transformationkey)
- [transformationProtocol](AcceleratorImage.md#transformationprotocol)
- [transforms](AcceleratorImage.md#transforms)
- [VERSION](AcceleratorImage.md#version)

### Accessors

- [hasTransforms](AcceleratorImage.md#hastransforms)

### Methods

- [animation](AcceleratorImage.md#animation)
- [autoOrient](AcceleratorImage.md#autoorient)
- [blur](AcceleratorImage.md#blur)
- [clone](AcceleratorImage.md#clone)
- [crop](AcceleratorImage.md#crop)
- [deconstructTransformationUrl](AcceleratorImage.md#deconstructtransformationurl)
- [forceHttpProtocol](AcceleratorImage.md#forcehttpprotocol)
- [getAnimation](AcceleratorImage.md#getanimation)
- [getAutoOrient](AcceleratorImage.md#getautoorient)
- [getBlur](AcceleratorImage.md#getblur)
- [getCrop](AcceleratorImage.md#getcrop)
- [getGrayscale](AcceleratorImage.md#getgrayscale)
- [getHash](AcceleratorImage.md#gethash)
- [getImageFormat](AcceleratorImage.md#getimageformat)
- [getImageQuality](AcceleratorImage.md#getimagequality)
- [getKeepAspectRatio](AcceleratorImage.md#getkeepaspectratio)
- [getMetadata](AcceleratorImage.md#getmetadata)
- [getOverlay](AcceleratorImage.md#getoverlay)
- [getParameters](AcceleratorImage.md#getparameters)
- [getParent](AcceleratorImage.md#getparent)
- [getResize](AcceleratorImage.md#getresize)
- [getResizeCropAuto](AcceleratorImage.md#getresizecropauto)
- [getRotate](AcceleratorImage.md#getrotate)
- [getSetBackground](AcceleratorImage.md#getsetbackground)
- [getSetFocalPoint](AcceleratorImage.md#getsetfocalpoint)
- [getSetName](AcceleratorImage.md#getsetname)
- [getTransformationPath](AcceleratorImage.md#gettransformationpath)
- [getTransformationUrl](AcceleratorImage.md#gettransformationurl)
- [getTransforms](AcceleratorImage.md#gettransforms)
- [getUrl](AcceleratorImage.md#geturl)
- [grayscale](AcceleratorImage.md#grayscale)
- [hash](AcceleratorImage.md#hash)
- [imageFormat](AcceleratorImage.md#imageformat)
- [imageQuality](AcceleratorImage.md#imagequality)
- [initialize](AcceleratorImage.md#initialize)
- [keepAspectRatio](AcceleratorImage.md#keepaspectratio)
- [metadata](AcceleratorImage.md#metadata)
- [overlay](AcceleratorImage.md#overlay)
- [parse](AcceleratorImage.md#parse)
- [parseOriginal](AcceleratorImage.md#parseoriginal)
- [parseTransformation](AcceleratorImage.md#parsetransformation)
- [relative](AcceleratorImage.md#relative)
- [resize](AcceleratorImage.md#resize)
- [resizeCropAuto](AcceleratorImage.md#resizecropauto)
- [rotate](AcceleratorImage.md#rotate)
- [saveAs](AcceleratorImage.md#saveas)
- [setBackground](AcceleratorImage.md#setbackground)
- [setFocalPoint](AcceleratorImage.md#setfocalpoint)
- [setName](AcceleratorImage.md#setname)
- [setResponseHeader](AcceleratorImage.md#setresponseheader)
- [toString](AcceleratorImage.md#tostring)
- [withoutProtocol](AcceleratorImage.md#withoutprotocol)
- [fromTransformationUrl](AcceleratorImage.md#fromtransformationurl)

## Constructors

### constructor

• **new AcceleratorImage**(`params`): [`AcceleratorImage`](AcceleratorImage.md)

Creates a new AcceleratorImage instance.

If `originalImageUrl` is provided and valid (http, https, or s3 protocol), the instance is
immediately initialized. Calling [AcceleratorImage.getUrl](AcceleratorImage.md#geturl) without any transformation
will return the original URL as-is.

If `originalImageUrl` is omitted or `null`, the instance remains uninitialized.
In that case [AcceleratorImage.getUrl](AcceleratorImage.md#geturl) throws [InvalidParameter](InvalidParameter.md) and
[AcceleratorImage.toString](AcceleratorImage.md#tostring) returns a placeholder string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AcceleratorImageParams`](../interfaces/AcceleratorImageParams.md) | Construction parameters. See [AcceleratorImageParams](../interfaces/AcceleratorImageParams.md) for details. |

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

**`Throws`**

If `originalImageUrl` uses an unsupported protocol.

**`Throws`**

If `transformationHost` is missing when `originalImageUrl` is provided.

#### Overrides

[ImageTransformBuilder](ImageTransformBuilder.md).[constructor](ImageTransformBuilder.md#constructor)

#### Defined in

[src/AcceleratorImage.ts:101](src/AcceleratorImage.ts:101)

## Properties

### fileName

• `Private` **fileName**: `string`

#### Defined in

[src/AcceleratorImage.ts:78](src/AcceleratorImage.ts:78)

___

### isInitialized

• `Private` **isInitialized**: `boolean` = `false`

#### Defined in

[src/AcceleratorImage.ts:64](src/AcceleratorImage.ts:64)

___

### isRelative

• `Private` **isRelative**: `boolean` = `false`

#### Defined in

[src/AcceleratorImage.ts:76](src/AcceleratorImage.ts:76)

___

### originalImageUrl

• `Protected` **originalImageUrl**: `string`

#### Defined in

[src/AcceleratorImage.ts:74](src/AcceleratorImage.ts:74)

___

### params

• `Protected` **params**: [`EncodedParameters`](../README.md#encodedparameters)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[params](ImageTransformBuilder.md#params)

#### Defined in

[src/ImageTransformBuilder.ts:94](src/ImageTransformBuilder.ts:94)

___

### processedUrl

• `Protected` **processedUrl**: `string`

#### Defined in

[src/AcceleratorImage.ts:70](src/AcceleratorImage.ts:70)

___

### queryParameters

• `Private` **queryParameters**: `Record`\<`string`, `string`\> = `{}`

#### Defined in

[src/AcceleratorImage.ts:80](src/AcceleratorImage.ts:80)

___

### transformationHost

• `Protected` **transformationHost**: `string`

#### Defined in

[src/AcceleratorImage.ts:66](src/AcceleratorImage.ts:66)

___

### transformationKey

• `Private` `Readonly` **transformationKey**: `string`

#### Defined in

[src/AcceleratorImage.ts:72](src/AcceleratorImage.ts:72)

___

### transformationProtocol

• `Protected` **transformationProtocol**: ``null`` \| `Protocol` = `'https'`

#### Defined in

[src/AcceleratorImage.ts:68](src/AcceleratorImage.ts:68)

___

### transforms

• `Protected` **transforms**: [`EncodedTransforms`](../README.md#encodedtransforms)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[transforms](ImageTransformBuilder.md#transforms)

#### Defined in

[src/ImageTransformBuilder.ts:92](src/ImageTransformBuilder.ts:92)

___

### VERSION

▪ `Static` `Readonly` **VERSION**: ``"1"``

Current version of the Accelerator Images transformation URL

#### Defined in

[src/AcceleratorImage.ts:62](src/AcceleratorImage.ts:62)

## Accessors

### hasTransforms

• `get` **hasTransforms**(): `boolean`

Returns `true` when at least one transformation or at least one global parameter
(e.g. [imageFormat](AcceleratorImage.md#imageformat), [imageQuality](AcceleratorImage.md#imagequality)) has been set on this instance.

#### Returns

`boolean`

#### Defined in

[src/AcceleratorImage.ts:148](src/AcceleratorImage.ts:148)

## Methods

### animation

▸ **animation**(`animation`): `this`

Set animation

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | `boolean` |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#animation)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#animation))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[animation](ImageTransformBuilder.md#animation)

#### Defined in

[src/ImageTransformBuilder.ts:168](src/ImageTransformBuilder.ts:168)

___

### autoOrient

▸ **autoOrient**(`autoOrient`): `this`

Set auto-orientation

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoOrient` | `boolean` |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#autoorient)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#autoorient))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[autoOrient](ImageTransformBuilder.md#autoorient)

#### Defined in

[src/ImageTransformBuilder.ts:189](src/ImageTransformBuilder.ts:189)

___

### blur

▸ **blur**(`power?`): `this`

Apply blur effect to the image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `power?` | `number` | Blur strength |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#blur)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#blur))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[blur](ImageTransformBuilder.md#blur)

#### Defined in

[src/ImageTransformBuilder.ts:262](src/ImageTransformBuilder.ts:262)

___

### clone

▸ **clone**(): [`AcceleratorImage`](AcceleratorImage.md)

Returns a deep clone of this instance with all transformations and parameters copied.

Mutations applied to the clone do not affect the original instance and vice-versa.
If no transformations are set, this is equivalent to [AcceleratorImage.getParent](AcceleratorImage.md#getparent).

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

A new [AcceleratorImage](AcceleratorImage.md) instance with the same transformations.

#### Defined in

[src/AcceleratorImage.ts:328](src/AcceleratorImage.ts:328)

___

### crop

▸ **crop**(`x?`, `y?`, `width?`, `height?`): `this`

Crop image to a given size

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The distance of the cropped image from the left edge of the image |
| `y?` | `number` | The distance of the cropped image from the top edge of the image |
| `width?` | `number` | Width of the cropped image |
| `height?` | `number` | Height of the cropped image |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#crop)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#crop))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[crop](ImageTransformBuilder.md#crop)

#### Defined in

[src/ImageTransformBuilder.ts:309](src/ImageTransformBuilder.ts:309)

___

### deconstructTransformationUrl

▸ **deconstructTransformationUrl**(`url`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encodedTransformation` | `string` |
| `fileName` | `string` |
| `version` | `string` |

#### Defined in

[src/AcceleratorImage.ts:201](src/AcceleratorImage.ts:201)

___

### forceHttpProtocol

▸ **forceHttpProtocol**(): `this`

Forces the generated transformation URL to use the `http` protocol instead of the default `https`.

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[src/AcceleratorImage.ts:279](src/AcceleratorImage.ts:279)

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getAnimation](ImageTransformBuilder.md#getanimation)

#### Defined in

[src/ImageTransformBuilder.ts:177](src/ImageTransformBuilder.ts:177)

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getAutoOrient](ImageTransformBuilder.md#getautoorient)

#### Defined in

[src/ImageTransformBuilder.ts:198](src/ImageTransformBuilder.ts:198)

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getBlur](ImageTransformBuilder.md#getblur)

#### Defined in

[src/ImageTransformBuilder.ts:271](src/ImageTransformBuilder.ts:271)

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getCrop](ImageTransformBuilder.md#getcrop)

#### Defined in

[src/ImageTransformBuilder.ts:318](src/ImageTransformBuilder.ts:318)

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns `undefined` if the transformation is not set.

When the transformation is set this always returns an empty array (grayscale has no arguments).

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getGrayscale](ImageTransformBuilder.md#getgrayscale)

#### Defined in

[src/ImageTransformBuilder.ts:338](src/ImageTransformBuilder.ts:338)

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getHash](ImageTransformBuilder.md#gethash)

#### Defined in

[src/ImageTransformBuilder.ts:427](src/ImageTransformBuilder.ts:427)

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

The currently configured image format, if set.

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getImageFormat](ImageTransformBuilder.md#getimageformat)

#### Defined in

[src/ImageTransformBuilder.ts:134](src/ImageTransformBuilder.ts:134)

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

The current image quality setting, or `undefined` if none is set.

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getImageQuality](ImageTransformBuilder.md#getimagequality)

#### Defined in

[src/ImageTransformBuilder.ts:156](src/ImageTransformBuilder.ts:156)

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getKeepAspectRatio](ImageTransformBuilder.md#getkeepaspectratio)

#### Defined in

[src/ImageTransformBuilder.ts:500](src/ImageTransformBuilder.ts:500)

___

### getMetadata

▸ **getMetadata**(): `undefined` \| `DecodedParameter`[]

Get metadata transformation arguments in decoded form. Returns `undefined` if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getMetadata](ImageTransformBuilder.md#getmetadata)

#### Defined in

[src/ImageTransformBuilder.ts:225](src/ImageTransformBuilder.ts:225)

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getOverlay](ImageTransformBuilder.md#getoverlay)

#### Defined in

[src/ImageTransformBuilder.ts:407](src/ImageTransformBuilder.ts:407)

___

### getParameters

▸ **getParameters**(): `Record`\<`number`, `EncodedParameter`\>

Returns a deep copy of encoded parameters object.

#### Returns

`Record`\<`number`, `EncodedParameter`\>

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getParameters](ImageTransformBuilder.md#getparameters)

#### Defined in

[src/ImageTransformBuilder.ts:111](src/ImageTransformBuilder.ts:111)

___

### getParent

▸ **getParent**(): [`AcceleratorImage`](AcceleratorImage.md)

Returns a new, bare [AcceleratorImage](AcceleratorImage.md) instance pointing at the same original image URL,
with the same `transformationKey` and `transformationHost`, but with **no transformations**.

Useful when you want to start a new transformation chain from scratch based on the same source image.

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

A new [AcceleratorImage](AcceleratorImage.md) instance with no transformations applied.

#### Defined in

[src/AcceleratorImage.ts:312](src/AcceleratorImage.ts:312)

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getResize](ImageTransformBuilder.md#getresize)

#### Defined in

[src/ImageTransformBuilder.ts:294](src/ImageTransformBuilder.ts:294)

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getResizeCropAuto](ImageTransformBuilder.md#getresizecropauto)

#### Defined in

[src/ImageTransformBuilder.ts:361](src/ImageTransformBuilder.ts:361)

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getRotate](ImageTransformBuilder.md#getrotate)

#### Defined in

[src/ImageTransformBuilder.ts:250](src/ImageTransformBuilder.ts:250)

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getSetBackground](ImageTransformBuilder.md#getsetbackground)

#### Defined in

[src/ImageTransformBuilder.ts:384](src/ImageTransformBuilder.ts:384)

___

### getSetFocalPoint

▸ **getSetFocalPoint**(): `undefined` \| `DecodedParameter`[]

Get setFocalPoint transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getSetFocalPoint](ImageTransformBuilder.md#getsetfocalpoint)

#### Defined in

[src/ImageTransformBuilder.ts:469](src/ImageTransformBuilder.ts:469)

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getSetName](ImageTransformBuilder.md#getsetname)

#### Defined in

[src/ImageTransformBuilder.ts:448](src/ImageTransformBuilder.ts:448)

___

### getTransformationPath

▸ **getTransformationPath**(): `string`

Returns URL's path of the transformed image

#### Returns

`string`

#### Defined in

[src/AcceleratorImage.ts:339](src/AcceleratorImage.ts:339)

___

### getTransformationUrl

▸ **getTransformationUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/AcceleratorImage.ts:389](src/AcceleratorImage.ts:389)

___

### getTransforms

▸ **getTransforms**(): `EncodedParameter`[][]

Returns a deep copy of encoded transforms array.

#### Returns

`EncodedParameter`[][]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getTransforms](ImageTransformBuilder.md#gettransforms)

#### Defined in

[src/ImageTransformBuilder.ts:104](src/ImageTransformBuilder.ts:104)

___

### getUrl

▸ **getUrl**(): `string`

Returns the URL for this image.

- When **no** transformations or global parameters are set, returns the original image URL as-is.
- When **at least one** transformation or parameter is set, returns a fully-qualified
  Accelerator Images transformation URL.

#### Returns

`string`

The original image URL or the encoded transformation URL.

**`Throws`**

When the instance is not initialized (no `originalImageUrl` was provided).

**`Throws`**

When [metadata](AcceleratorImage.md#metadata) is combined with other transformations.

#### Defined in

[src/AcceleratorImage.ts:359](src/AcceleratorImage.ts:359)

___

### grayscale

▸ **grayscale**(): `this`

Convert Image to grayscale

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#grayscale)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#grayscale))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[grayscale](ImageTransformBuilder.md#grayscale)

#### Defined in

[src/ImageTransformBuilder.ts:327](src/ImageTransformBuilder.ts:327)

___

### hash

▸ **hash**(`type?`): `this`

Change path in original image URL to a md5 or sha1 hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | [`HashType`](../README.md#hashtype) | Hash type |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[hash](ImageTransformBuilder.md#hash)

#### Defined in

[src/ImageTransformBuilder.ts:418](src/ImageTransformBuilder.ts:418)

___

### imageFormat

▸ **imageFormat**(`format?`): `this`

Sets the format of the transformed image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | [`ImageFormat`](../README.md#imageformat) |

#### Returns

`this`

**`Throws`**

- If format is not supported

**`Rationale`**

- When format "original" is selected, Accelerator will preserve the format of the original image.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[imageFormat](ImageTransformBuilder.md#imageformat)

#### Defined in

[src/ImageTransformBuilder.ts:124](src/ImageTransformBuilder.ts:124)

___

### imageQuality

▸ **imageQuality**(`quality?`): `this`

Set the quality of the transformed image using predefined quality levels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quality?` | [`ImageQuality`](../README.md#imagequality) | Quality of the transformed image. |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[imageQuality](ImageTransformBuilder.md#imagequality)

#### Defined in

[src/ImageTransformBuilder.ts:146](src/ImageTransformBuilder.ts:146)

___

### initialize

▸ **initialize**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/AcceleratorImage.ts:229](src/AcceleratorImage.ts:229)

___

### keepAspectRatio

▸ **keepAspectRatio**(`width?`, `height?`, `blurPower?`, `red?`, `green?`, `blue?`, `alpha?`, `toleranceX?`, `toleranceY?`): `this`

Extends the picture to match given aspect ratio by adding blurred image of itself as background for empty areas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width?` | `number` | Target image width |
| `height?` | `number` | Target image height |
| `blurPower?` | `number` | Blur strength |
| `red?` | `number` | Overlay color red channel |
| `green?` | `number` | Overlay color green channel |
| `blue?` | `number` | Overlay color blue channel |
| `alpha?` | `number` | Overlay color alpha channel. Default is 175. |
| `toleranceX?` | `number` | A percent of width that can be removed to fit aspect ratio. |
| `toleranceY?` | `number` | A percent of height that can be removed to fit aspect ratio. |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#keep-aspect-ratio)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#keep-aspect-ratio))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[keepAspectRatio](ImageTransformBuilder.md#keepaspectratio)

#### Defined in

[src/ImageTransformBuilder.ts:488](src/ImageTransformBuilder.ts:488)

___

### metadata

▸ **metadata**(`mode?`): `this`

Request image metadata instead of the transformed image.

When this transformation is set, Accelerator returns metadata about the image (dimensions,
EXIF, IPTC, etc.) as a JSON response rather than the image itself.

**This transformation cannot be combined with any other transformation.**
Calling [AcceleratorImage.getUrl](AcceleratorImage.md#geturl) with both `metadata` and other transforms will throw [InvalidParameter](InvalidParameter.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode?` | [`MetadataType`](../README.md#metadatatype) | Type of metadata to retrieve. Defaults to `'basic'`. |

#### Returns

`this`

**`Throws`**

If an unsupported mode value is provided.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[metadata](ImageTransformBuilder.md#metadata)

#### Defined in

[src/ImageTransformBuilder.ts:216](src/ImageTransformBuilder.ts:216)

___

### overlay

▸ **overlay**(`url?`, `position?`, `reverse?`, `mode?`): `this`

Combine image with another one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url?` | `string` | URL of the image to overlay |
| `position?` | [`OverlayPosition`](../README.md#overlayposition) | Position of the overlay |
| `reverse?` | `boolean` | Reverse the order of the images. |
| `mode?` | [`OverlayMode`](../README.md#overlaymode) | Overlay mode |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[overlay](ImageTransformBuilder.md#overlay)

#### Defined in

[src/ImageTransformBuilder.ts:398](src/ImageTransformBuilder.ts:398)

___

### parse

▸ **parse**(`urlToParse`, `parseAsTransformation?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `urlToParse` | `string` | `undefined` |
| `parseAsTransformation` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/AcceleratorImage.ts:208](src/AcceleratorImage.ts:208)

___

### parseOriginal

▸ **parseOriginal**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`void`

#### Defined in

[src/AcceleratorImage.ts:152](src/AcceleratorImage.ts:152)

___

### parseTransformation

▸ **parseTransformation**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`void`

#### Defined in

[src/AcceleratorImage.ts:171](src/AcceleratorImage.ts:171)

___

### relative

▸ **relative**(`isRelative?`): `this`

Makes the generated URL path-relative (no protocol or host).

When enabled, [AcceleratorImage.getUrl](AcceleratorImage.md#geturl) returns only the path portion
(e.g. `/1/{token}`) instead of a full URL. Has no effect when no transformations
are set — the original image URL is returned unchanged regardless.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isRelative` | `boolean` | `true` | Pass `false` to revert to an absolute URL. Defaults to `true`. |

#### Returns

`this`

The current instance for method chaining.

#### Defined in

[src/AcceleratorImage.ts:249](src/AcceleratorImage.ts:249)

___

### resize

▸ **resize**(`width?`, `height?`, `scaleUp?`, `scaleDown?`): `this`

Resize image with preserving aspect ratio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width?` | `number` | Target width (0 for preserve aspect ratio) |
| `height?` | `number` | Target height (0 for preserve aspect ratio) |
| `scaleUp?` | `boolean` | Enables enlarging image when one of sizes is set to 0 |
| `scaleDown?` | `boolean` | Enables shrinking image when one of sizes is set to 0 |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resize](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resize)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[resize](ImageTransformBuilder.md#resize)

#### Defined in

[src/ImageTransformBuilder.ts:285](src/ImageTransformBuilder.ts:285)

___

### resizeCropAuto

▸ **resizeCropAuto**(`width?`, `height?`): `this`

Crop image automatically to given width and height

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width?` | `number` | Width of the cropped image |
| `height?` | `number` | Height of the cropped image |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resizecropauto)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resizecropauto))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[resizeCropAuto](ImageTransformBuilder.md#resizecropauto)

#### Defined in

[src/ImageTransformBuilder.ts:352](src/ImageTransformBuilder.ts:352)

___

### rotate

▸ **rotate**(`angle?`): `this`

Rotate image clockwise

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle?` | [`Rotation`](../README.md#rotation) | Number of 90 degrees rotations to perform. |

#### Returns

`this`

**`Throws`**

**`Rationale`**

The angle parameter specifies the number of 90 degree clockwise rotations to perform on the image.
    For example when the angle is 1, the image will be rotated 90 degrees clockwise.
    When the angle is 2, the image will be rotated 180 degrees clockwise. Etc.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[rotate](ImageTransformBuilder.md#rotate)

#### Defined in

[src/ImageTransformBuilder.ts:241](src/ImageTransformBuilder.ts:241)

___

### saveAs

▸ **saveAs**(`name`): `void`

Sets the `Content-Disposition` response header so that the browser treats the image as a
file download with the given filename.

The filename is encoded as a UTF-8 RFC 5987 parameter
(`attachment; filename*=UTF-8''<name>`).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The filename the browser should suggest when saving the image. |

#### Returns

`void`

**`Deprecated`**

This method will be removed in a future major version.

#### Defined in

[src/AcceleratorImage.ts:300](src/AcceleratorImage.ts:300)

___

### setBackground

▸ **setBackground**(`red?`, `green?`, `blue?`, `alpha?`): `this`

Add background to image with alpha channel

#### Parameters

| Name | Type |
| :------ | :------ |
| `red?` | `number` |
| `green?` | `number` |
| `blue?` | `number` |
| `alpha?` | `number` |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-background)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-background))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[setBackground](ImageTransformBuilder.md#setbackground)

#### Defined in

[src/ImageTransformBuilder.ts:375](src/ImageTransformBuilder.ts:375)

___

### setFocalPoint

▸ **setFocalPoint**(`x`, `y`): `this`

* Set the focal point of the image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Focal point X coordinate |
| `y` | `number` | Focal point Y coordinate |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-focal-point)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-focal-point))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[setFocalPoint](ImageTransformBuilder.md#setfocalpoint)

#### Defined in

[src/ImageTransformBuilder.ts:460](src/ImageTransformBuilder.ts:460)

___

### setName

▸ **setName**(`name`): `this`

Appends a human-readable filename to the transformation URL path and registers a `setName`
transformation in the encoded token.

This override differs from [ImageTransformBuilder.setName](ImageTransformBuilder.md#setname) in two ways:
- The full `name` value is appended as an extra path segment at the end of the URL
  (e.g. `.../1/{token}/photo.jpg`), which helps CDN logs and browser downloads.
- Only the first 6 characters of the MD5 hex digest of `name` are passed as the `name`
  argument to the base `setName` transformation, keeping the encoded token compact.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Target filename. Must not contain `/`. |

#### Returns

`this`

The current instance for method chaining.

**`Throws`**

If `name` contains a `/` character.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname)

#### Overrides

[ImageTransformBuilder](ImageTransformBuilder.md).[setName](ImageTransformBuilder.md#setname)

#### Defined in

[src/AcceleratorImage.ts:425](src/AcceleratorImage.ts:425)

___

### setResponseHeader

▸ **setResponseHeader**(`header`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/AcceleratorImage.ts:285](src/AcceleratorImage.ts:285)

___

### toString

▸ **toString**(): `string`

Returns the same value as [AcceleratorImage.getUrl](AcceleratorImage.md#geturl).
When the instance is not initialized, returns a placeholder string instead of throwing.

#### Returns

`string`

The transformation URL, the original image URL, or `'[Uninitialized AcceleratorImage object]'`.

#### Defined in

[src/AcceleratorImage.ts:381](src/AcceleratorImage.ts:381)

___

### withoutProtocol

▸ **withoutProtocol**(): `this`

Removes the protocol from the generated transformation URL, producing a protocol-relative URL.

Has no effect when no transformations are set — the original image URL is returned unchanged.

#### Returns

`this`

The current instance for method chaining.

**`Example`**

```ts
const img = new AcceleratorImage({originalImageUrl: 'https://example.com/img.jpg', transformationKey: TRANSFORM_KEY, transformationHost: 'images.example.com'});
img.rotate(1).withoutProtocol().getUrl(); // '//images.example.com/1/...'
```

#### Defined in

[src/AcceleratorImage.ts:268](src/AcceleratorImage.ts:268)

___

### fromTransformationUrl

▸ **fromTransformationUrl**(`transformedImageUrl`, `transformationKey`): [`AcceleratorImage`](AcceleratorImage.md)

Parses an existing Accelerator Images transformation URL and returns a fully initialized
[AcceleratorImage](AcceleratorImage.md) instance with all transformations and parameters restored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformedImageUrl` | `string` | A previously generated transformation URL. |
| `transformationKey` | `string` | The secret key that was used to sign the URL. |

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

A new [AcceleratorImage](AcceleratorImage.md) instance initialized from the decoded URL.

**`Throws`**

If the URL cannot be parsed.

**`Throws`**

If the URL version does not match [AcceleratorImage.VERSION](AcceleratorImage.md#version).

**`Throws`**

If the signature embedded in the token is invalid.

#### Defined in

[src/AcceleratorImage.ts:136](src/AcceleratorImage.ts:136)
