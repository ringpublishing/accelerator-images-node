[@ringpublishing/accelerator-images](../README.md) / LegacyImage

# Class: LegacyImage

AcceleratorImage implementation for legacy OCDN URLs.

## Hierarchy

- [`AcceleratorImage`](AcceleratorImage.md)

  ↳ **`LegacyImage`**

## Table of contents

### Constructors

- [constructor](LegacyImage.md#constructor)

### Properties

- [bucket](LegacyImage.md#bucket)
- [originalImageUrl](LegacyImage.md#originalimageurl)
- [params](LegacyImage.md#params)
- [processedUrl](LegacyImage.md#processedurl)
- [transformationHost](LegacyImage.md#transformationhost)
- [transformationProtocol](LegacyImage.md#transformationprotocol)
- [transforms](LegacyImage.md#transforms)
- [VERSION](LegacyImage.md#version)

### Accessors

- [hasTransforms](LegacyImage.md#hastransforms)

### Methods

- [animation](LegacyImage.md#animation)
- [autoOrient](LegacyImage.md#autoorient)
- [blur](LegacyImage.md#blur)
- [clone](LegacyImage.md#clone)
- [crop](LegacyImage.md#crop)
- [deconstructTransformationUrl](LegacyImage.md#deconstructtransformationurl)
- [forceHttpProtocol](LegacyImage.md#forcehttpprotocol)
- [getAnimation](LegacyImage.md#getanimation)
- [getAutoOrient](LegacyImage.md#getautoorient)
- [getBlur](LegacyImage.md#getblur)
- [getCrop](LegacyImage.md#getcrop)
- [getGrayscale](LegacyImage.md#getgrayscale)
- [getHash](LegacyImage.md#gethash)
- [getImageFormat](LegacyImage.md#getimageformat)
- [getImageQuality](LegacyImage.md#getimagequality)
- [getKeepAspectRatio](LegacyImage.md#getkeepaspectratio)
- [getMetadata](LegacyImage.md#getmetadata)
- [getOverlay](LegacyImage.md#getoverlay)
- [getParameters](LegacyImage.md#getparameters)
- [getParent](LegacyImage.md#getparent)
- [getResize](LegacyImage.md#getresize)
- [getResizeCropAuto](LegacyImage.md#getresizecropauto)
- [getRotate](LegacyImage.md#getrotate)
- [getSetBackground](LegacyImage.md#getsetbackground)
- [getSetFocalPoint](LegacyImage.md#getsetfocalpoint)
- [getSetName](LegacyImage.md#getsetname)
- [getTransformationPath](LegacyImage.md#gettransformationpath)
- [getTransforms](LegacyImage.md#gettransforms)
- [getUrl](LegacyImage.md#geturl)
- [grayscale](LegacyImage.md#grayscale)
- [hash](LegacyImage.md#hash)
- [imageFormat](LegacyImage.md#imageformat)
- [imageQuality](LegacyImage.md#imagequality)
- [keepAspectRatio](LegacyImage.md#keepaspectratio)
- [metadata](LegacyImage.md#metadata)
- [overlay](LegacyImage.md#overlay)
- [parse](LegacyImage.md#parse)
- [parseOriginal](LegacyImage.md#parseoriginal)
- [relative](LegacyImage.md#relative)
- [resize](LegacyImage.md#resize)
- [resizeCropAuto](LegacyImage.md#resizecropauto)
- [rotate](LegacyImage.md#rotate)
- [saveAs](LegacyImage.md#saveas)
- [setBackground](LegacyImage.md#setbackground)
- [setBucket](LegacyImage.md#setbucket)
- [setFocalPoint](LegacyImage.md#setfocalpoint)
- [setName](LegacyImage.md#setname)
- [toString](LegacyImage.md#tostring)
- [withoutProtocol](LegacyImage.md#withoutprotocol)
- [fromTransformationUrl](LegacyImage.md#fromtransformationurl)

## Constructors

### constructor

• **new LegacyImage**(`params`): [`LegacyImage`](LegacyImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LegacyImageParams`](../README.md#legacyimageparams) |

#### Returns

[`LegacyImage`](LegacyImage.md)

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[constructor](AcceleratorImage.md#constructor)

#### Defined in

[src/LegacyImage.ts:21](src/LegacyImage.ts:21)

## Properties

### bucket

• `Private` **bucket**: `string`

#### Defined in

[src/LegacyImage.ts:11](src/LegacyImage.ts:11)

___

### originalImageUrl

• `Protected` **originalImageUrl**: `string`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[originalImageUrl](AcceleratorImage.md#originalimageurl)

#### Defined in

[src/AcceleratorImage.ts:74](src/AcceleratorImage.ts:74)

___

### params

• `Protected` **params**: [`EncodedParameters`](../README.md#encodedparameters)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[params](AcceleratorImage.md#params)

#### Defined in

[src/ImageTransformBuilder.ts:94](src/ImageTransformBuilder.ts:94)

___

### processedUrl

• `Protected` **processedUrl**: `string`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[processedUrl](AcceleratorImage.md#processedurl)

#### Defined in

[src/AcceleratorImage.ts:70](src/AcceleratorImage.ts:70)

___

### transformationHost

• `Protected` **transformationHost**: `string`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[transformationHost](AcceleratorImage.md#transformationhost)

#### Defined in

[src/AcceleratorImage.ts:66](src/AcceleratorImage.ts:66)

___

### transformationProtocol

• `Protected` **transformationProtocol**: ``null`` \| `Protocol` = `'https'`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[transformationProtocol](AcceleratorImage.md#transformationprotocol)

#### Defined in

[src/AcceleratorImage.ts:68](src/AcceleratorImage.ts:68)

___

### transforms

• `Protected` **transforms**: [`EncodedTransforms`](../README.md#encodedtransforms)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[transforms](AcceleratorImage.md#transforms)

#### Defined in

[src/ImageTransformBuilder.ts:92](src/ImageTransformBuilder.ts:92)

___

### VERSION

▪ `Static` `Readonly` **VERSION**: ``"1"``

Current version of the Accelerator Images transformation URL

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[VERSION](AcceleratorImage.md#version)

#### Defined in

[src/AcceleratorImage.ts:62](src/AcceleratorImage.ts:62)

## Accessors

### hasTransforms

• `get` **hasTransforms**(): `boolean`

Returns `true` when at least one transformation or at least one global parameter
(e.g. [imageFormat](AcceleratorImage.md#imageformat), [imageQuality](AcceleratorImage.md#imagequality)) has been set on this instance.

#### Returns

`boolean`

#### Inherited from

AcceleratorImage.hasTransforms

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

[AcceleratorImage](AcceleratorImage.md).[animation](AcceleratorImage.md#animation)

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

[AcceleratorImage](AcceleratorImage.md).[autoOrient](AcceleratorImage.md#autoorient)

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

[AcceleratorImage](AcceleratorImage.md).[blur](AcceleratorImage.md#blur)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[clone](AcceleratorImage.md#clone)

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

[AcceleratorImage](AcceleratorImage.md).[crop](AcceleratorImage.md#crop)

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

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[deconstructTransformationUrl](AcceleratorImage.md#deconstructtransformationurl)

#### Defined in

[src/LegacyImage.ts:50](src/LegacyImage.ts:50)

___

### forceHttpProtocol

▸ **forceHttpProtocol**(): `this`

Forces the generated transformation URL to use the `http` protocol instead of the default `https`.

#### Returns

`this`

The current instance for method chaining.

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[forceHttpProtocol](AcceleratorImage.md#forcehttpprotocol)

#### Defined in

[src/AcceleratorImage.ts:279](src/AcceleratorImage.ts:279)

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getAnimation](AcceleratorImage.md#getanimation)

#### Defined in

[src/ImageTransformBuilder.ts:177](src/ImageTransformBuilder.ts:177)

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getAutoOrient](AcceleratorImage.md#getautoorient)

#### Defined in

[src/ImageTransformBuilder.ts:198](src/ImageTransformBuilder.ts:198)

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getBlur](AcceleratorImage.md#getblur)

#### Defined in

[src/ImageTransformBuilder.ts:271](src/ImageTransformBuilder.ts:271)

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getCrop](AcceleratorImage.md#getcrop)

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

[AcceleratorImage](AcceleratorImage.md).[getGrayscale](AcceleratorImage.md#getgrayscale)

#### Defined in

[src/ImageTransformBuilder.ts:338](src/ImageTransformBuilder.ts:338)

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getHash](AcceleratorImage.md#gethash)

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

[AcceleratorImage](AcceleratorImage.md).[getImageFormat](AcceleratorImage.md#getimageformat)

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

[AcceleratorImage](AcceleratorImage.md).[getImageQuality](AcceleratorImage.md#getimagequality)

#### Defined in

[src/ImageTransformBuilder.ts:156](src/ImageTransformBuilder.ts:156)

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getKeepAspectRatio](AcceleratorImage.md#getkeepaspectratio)

#### Defined in

[src/ImageTransformBuilder.ts:500](src/ImageTransformBuilder.ts:500)

___

### getMetadata

▸ **getMetadata**(): `undefined` \| `DecodedParameter`[]

Get metadata transformation arguments in decoded form. Returns `undefined` if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getMetadata](AcceleratorImage.md#getmetadata)

#### Defined in

[src/ImageTransformBuilder.ts:225](src/ImageTransformBuilder.ts:225)

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getOverlay](AcceleratorImage.md#getoverlay)

#### Defined in

[src/ImageTransformBuilder.ts:407](src/ImageTransformBuilder.ts:407)

___

### getParameters

▸ **getParameters**(): `Record`\<`number`, `EncodedParameter`\>

Returns a deep copy of encoded parameters object.

#### Returns

`Record`\<`number`, `EncodedParameter`\>

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getParameters](AcceleratorImage.md#getparameters)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getParent](AcceleratorImage.md#getparent)

#### Defined in

[src/AcceleratorImage.ts:312](src/AcceleratorImage.ts:312)

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getResize](AcceleratorImage.md#getresize)

#### Defined in

[src/ImageTransformBuilder.ts:294](src/ImageTransformBuilder.ts:294)

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getResizeCropAuto](AcceleratorImage.md#getresizecropauto)

#### Defined in

[src/ImageTransformBuilder.ts:361](src/ImageTransformBuilder.ts:361)

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getRotate](AcceleratorImage.md#getrotate)

#### Defined in

[src/ImageTransformBuilder.ts:250](src/ImageTransformBuilder.ts:250)

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getSetBackground](AcceleratorImage.md#getsetbackground)

#### Defined in

[src/ImageTransformBuilder.ts:384](src/ImageTransformBuilder.ts:384)

___

### getSetFocalPoint

▸ **getSetFocalPoint**(): `undefined` \| `DecodedParameter`[]

Get setFocalPoint transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getSetFocalPoint](AcceleratorImage.md#getsetfocalpoint)

#### Defined in

[src/ImageTransformBuilder.ts:469](src/ImageTransformBuilder.ts:469)

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getSetName](AcceleratorImage.md#getsetname)

#### Defined in

[src/ImageTransformBuilder.ts:448](src/ImageTransformBuilder.ts:448)

___

### getTransformationPath

▸ **getTransformationPath**(): `string`

Returns URL's path of the transformed image

#### Returns

`string`

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[getTransformationPath](AcceleratorImage.md#gettransformationpath)

#### Defined in

[src/LegacyImage.ts:59](src/LegacyImage.ts:59)

___

### getTransforms

▸ **getTransforms**(): `EncodedParameter`[][]

Returns a deep copy of encoded transforms array.

#### Returns

`EncodedParameter`[][]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getTransforms](AcceleratorImage.md#gettransforms)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getUrl](AcceleratorImage.md#geturl)

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

[AcceleratorImage](AcceleratorImage.md).[grayscale](AcceleratorImage.md#grayscale)

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

[AcceleratorImage](AcceleratorImage.md).[hash](AcceleratorImage.md#hash)

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

[AcceleratorImage](AcceleratorImage.md).[imageFormat](AcceleratorImage.md#imageformat)

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

[AcceleratorImage](AcceleratorImage.md).[imageQuality](AcceleratorImage.md#imagequality)

#### Defined in

[src/ImageTransformBuilder.ts:146](src/ImageTransformBuilder.ts:146)

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

[AcceleratorImage](AcceleratorImage.md).[keepAspectRatio](AcceleratorImage.md#keepaspectratio)

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

[AcceleratorImage](AcceleratorImage.md).[metadata](AcceleratorImage.md#metadata)

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

[AcceleratorImage](AcceleratorImage.md).[overlay](AcceleratorImage.md#overlay)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[parse](AcceleratorImage.md#parse)

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

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[parseOriginal](AcceleratorImage.md#parseoriginal)

#### Defined in

[src/LegacyImage.ts:30](src/LegacyImage.ts:30)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[relative](AcceleratorImage.md#relative)

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

[AcceleratorImage](AcceleratorImage.md).[resize](AcceleratorImage.md#resize)

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

[AcceleratorImage](AcceleratorImage.md).[resizeCropAuto](AcceleratorImage.md#resizecropauto)

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

[AcceleratorImage](AcceleratorImage.md).[rotate](AcceleratorImage.md#rotate)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[saveAs](AcceleratorImage.md#saveas)

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

[AcceleratorImage](AcceleratorImage.md).[setBackground](AcceleratorImage.md#setbackground)

#### Defined in

[src/ImageTransformBuilder.ts:375](src/ImageTransformBuilder.ts:375)

___

### setBucket

▸ **setBucket**(`bucket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | `string` |

#### Returns

`void`

#### Defined in

[src/LegacyImage.ts:26](src/LegacyImage.ts:26)

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

[AcceleratorImage](AcceleratorImage.md).[setFocalPoint](AcceleratorImage.md#setfocalpoint)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[setName](AcceleratorImage.md#setname)

#### Defined in

[src/AcceleratorImage.ts:425](src/AcceleratorImage.ts:425)

___

### toString

▸ **toString**(): `string`

Returns the same value as [AcceleratorImage.getUrl](AcceleratorImage.md#geturl).
When the instance is not initialized, returns a placeholder string instead of throwing.

#### Returns

`string`

The transformation URL, the original image URL, or `'[Uninitialized AcceleratorImage object]'`.

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[toString](AcceleratorImage.md#tostring)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[withoutProtocol](AcceleratorImage.md#withoutprotocol)

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

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[fromTransformationUrl](AcceleratorImage.md#fromtransformationurl)

#### Defined in

[src/LegacyImage.ts:13](src/LegacyImage.ts:13)
