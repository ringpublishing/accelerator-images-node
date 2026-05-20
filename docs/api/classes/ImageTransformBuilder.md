[@ringpublishing/accelerator-images](../README.md) / ImageTransformBuilder

# Class: ImageTransformBuilder

Builds image transformation metadata object.

## Hierarchy

- **`ImageTransformBuilder`**

  ↳ [`AcceleratorImage`](AcceleratorImage.md)

## Table of contents

### Constructors

- [constructor](ImageTransformBuilder.md#constructor)

### Properties

- [params](ImageTransformBuilder.md#params)
- [transforms](ImageTransformBuilder.md#transforms)

### Methods

- [animation](ImageTransformBuilder.md#animation)
- [autoOrient](ImageTransformBuilder.md#autoorient)
- [blur](ImageTransformBuilder.md#blur)
- [crop](ImageTransformBuilder.md#crop)
- [extractDimensions](ImageTransformBuilder.md#extractdimensions)
- [extractDominantColor](ImageTransformBuilder.md#extractdominantcolor)
- [getAnimation](ImageTransformBuilder.md#getanimation)
- [getAutoOrient](ImageTransformBuilder.md#getautoorient)
- [getBlur](ImageTransformBuilder.md#getblur)
- [getCrop](ImageTransformBuilder.md#getcrop)
- [getExtractDimensions](ImageTransformBuilder.md#getextractdimensions)
- [getExtractDominantColor](ImageTransformBuilder.md#getextractdominantcolor)
- [getGrayscale](ImageTransformBuilder.md#getgrayscale)
- [getHash](ImageTransformBuilder.md#gethash)
- [getImageFormat](ImageTransformBuilder.md#getimageformat)
- [getImageQuality](ImageTransformBuilder.md#getimagequality)
- [getKeepAspectRatio](ImageTransformBuilder.md#getkeepaspectratio)
- [getMetadata](ImageTransformBuilder.md#getmetadata)
- [getOverlay](ImageTransformBuilder.md#getoverlay)
- [getParameter](ImageTransformBuilder.md#getparameter)
- [getParameters](ImageTransformBuilder.md#getparameters)
- [getResize](ImageTransformBuilder.md#getresize)
- [getResizeCropAuto](ImageTransformBuilder.md#getresizecropauto)
- [getRotate](ImageTransformBuilder.md#getrotate)
- [getSetBackground](ImageTransformBuilder.md#getsetbackground)
- [getSetFocalPoint](ImageTransformBuilder.md#getsetfocalpoint)
- [getSetName](ImageTransformBuilder.md#getsetname)
- [getTransformArguments](ImageTransformBuilder.md#gettransformarguments)
- [getTransforms](ImageTransformBuilder.md#gettransforms)
- [grayscale](ImageTransformBuilder.md#grayscale)
- [hash](ImageTransformBuilder.md#hash)
- [imageFormat](ImageTransformBuilder.md#imageformat)
- [imageQuality](ImageTransformBuilder.md#imagequality)
- [keepAspectRatio](ImageTransformBuilder.md#keepaspectratio)
- [metadata](ImageTransformBuilder.md#metadata)
- [overlay](ImageTransformBuilder.md#overlay)
- [pushTransform](ImageTransformBuilder.md#pushtransform)
- [resize](ImageTransformBuilder.md#resize)
- [resizeCropAuto](ImageTransformBuilder.md#resizecropauto)
- [rotate](ImageTransformBuilder.md#rotate)
- [setBackground](ImageTransformBuilder.md#setbackground)
- [setFocalPoint](ImageTransformBuilder.md#setfocalpoint)
- [setName](ImageTransformBuilder.md#setname)
- [setParameter](ImageTransformBuilder.md#setparameter)

## Constructors

### constructor

• **new ImageTransformBuilder**(): [`ImageTransformBuilder`](ImageTransformBuilder.md)

#### Returns

[`ImageTransformBuilder`](ImageTransformBuilder.md)

#### Defined in

[src/ImageTransformBuilder.ts:96](src/ImageTransformBuilder.ts:96)

## Properties

### params

• `Protected` **params**: [`EncodedParameters`](../README.md#encodedparameters)

#### Defined in

[src/ImageTransformBuilder.ts:94](src/ImageTransformBuilder.ts:94)

___

### transforms

• `Protected` **transforms**: [`EncodedTransforms`](../README.md#encodedtransforms)

#### Defined in

[src/ImageTransformBuilder.ts:92](src/ImageTransformBuilder.ts:92)

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

#### Defined in

[src/ImageTransformBuilder.ts:331](src/ImageTransformBuilder.ts:331)

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

#### Defined in

[src/ImageTransformBuilder.ts:378](src/ImageTransformBuilder.ts:378)

___

### extractDimensions

▸ **extractDimensions**(): `this`

Extract the width and height of the transformed (output) image.

Image response headers:
- `x-acc-img-width` — output width in pixels, e.g. `800`
- `x-acc-img-height` — output height in pixels, e.g. `600`

JSON response fields (when `metadata()` is in pipeline):
- `width` and `height` — already present in basic metadata response

#### Returns

`this`

#### Defined in

[src/ImageTransformBuilder.ts:258](src/ImageTransformBuilder.ts:258)

___

### extractDominantColor

▸ **extractDominantColor**(): `this`

Extract the dominant color and a palette of up to 3 prominent colors
from the transformed image.

Uses k-means clustering in CIE Lab color space with HSL correction and
WCAG 7:1 contrast verification against white text.

Image response headers:
- `x-acc-img-dominant-color` — single hex value without `#`, e.g. `2a1f4e`
- `x-acc-img-color-palette` — comma-separated top 3 hex values, e.g. `2a1f4e,8b3a2f,1a5c3d`

JSON response fields (when `metadata()` is in pipeline):
- `dominantColor` — string, e.g. `"2a1f4e"`
- `colorPalette` — array of strings, e.g. `["2a1f4e", "8b3a2f", "1a5c3d"]`

#### Returns

`this`

#### Defined in

[src/ImageTransformBuilder.ts:235](src/ImageTransformBuilder.ts:235)

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

[src/ImageTransformBuilder.ts:177](src/ImageTransformBuilder.ts:177)

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

[src/ImageTransformBuilder.ts:198](src/ImageTransformBuilder.ts:198)

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:340](src/ImageTransformBuilder.ts:340)

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:387](src/ImageTransformBuilder.ts:387)

___

### getExtractDimensions

▸ **getExtractDimensions**(): `undefined` \| `boolean`

Get extractDimensions parameter value. Returns `undefined` if not set.

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/ImageTransformBuilder.ts:267](src/ImageTransformBuilder.ts:267)

___

### getExtractDominantColor

▸ **getExtractDominantColor**(): `undefined` \| `boolean`

Get extractDominantColor parameter value. Returns `undefined` if not set.

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/ImageTransformBuilder.ts:244](src/ImageTransformBuilder.ts:244)

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns `undefined` if the transformation is not set.

When the transformation is set this always returns an empty array (grayscale has no arguments).

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:407](src/ImageTransformBuilder.ts:407)

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:496](src/ImageTransformBuilder.ts:496)

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

The currently configured image format, if set.

#### Defined in

[src/ImageTransformBuilder.ts:134](src/ImageTransformBuilder.ts:134)

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

The current image quality setting, or `undefined` if none is set.

#### Defined in

[src/ImageTransformBuilder.ts:156](src/ImageTransformBuilder.ts:156)

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:569](src/ImageTransformBuilder.ts:569)

___

### getMetadata

▸ **getMetadata**(): `undefined` \| `DecodedParameter`[]

Get metadata transformation arguments in decoded form. Returns `undefined` if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:294](src/ImageTransformBuilder.ts:294)

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:476](src/ImageTransformBuilder.ts:476)

___

### getParameter

▸ **getParameter**(`parameterCode`): `undefined` \| `DecodedParameter`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameterCode` | `ParameterCode` |

#### Returns

`undefined` \| `DecodedParameter`

#### Defined in

[src/ImageTransformBuilder.ts:578](src/ImageTransformBuilder.ts:578)

___

### getParameters

▸ **getParameters**(): `Record`\<`number`, `EncodedParameter`\>

Returns a deep copy of encoded parameters object.

#### Returns

`Record`\<`number`, `EncodedParameter`\>

#### Defined in

[src/ImageTransformBuilder.ts:111](src/ImageTransformBuilder.ts:111)

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:363](src/ImageTransformBuilder.ts:363)

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:430](src/ImageTransformBuilder.ts:430)

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:319](src/ImageTransformBuilder.ts:319)

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:453](src/ImageTransformBuilder.ts:453)

___

### getSetFocalPoint

▸ **getSetFocalPoint**(): `undefined` \| `DecodedParameter`[]

Get setFocalPoint transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:538](src/ImageTransformBuilder.ts:538)

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:517](src/ImageTransformBuilder.ts:517)

___

### getTransformArguments

▸ **getTransformArguments**(`transformCode`): `undefined` \| `DecodedParameter`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformCode` | `TransformCode` |

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:599](src/ImageTransformBuilder.ts:599)

___

### getTransforms

▸ **getTransforms**(): `EncodedParameter`[][]

Returns a deep copy of encoded transforms array.

#### Returns

`EncodedParameter`[][]

#### Defined in

[src/ImageTransformBuilder.ts:104](src/ImageTransformBuilder.ts:104)

___

### grayscale

▸ **grayscale**(): `this`

Convert Image to grayscale

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#grayscale)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#grayscale))

#### Defined in

[src/ImageTransformBuilder.ts:396](src/ImageTransformBuilder.ts:396)

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

#### Defined in

[src/ImageTransformBuilder.ts:487](src/ImageTransformBuilder.ts:487)

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

#### Defined in

[src/ImageTransformBuilder.ts:557](src/ImageTransformBuilder.ts:557)

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

#### Defined in

[src/ImageTransformBuilder.ts:285](src/ImageTransformBuilder.ts:285)

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

#### Defined in

[src/ImageTransformBuilder.ts:467](src/ImageTransformBuilder.ts:467)

___

### pushTransform

▸ **pushTransform**(`transformCode`, `args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformCode` | `TransformCode` |
| `args` | (`undefined` \| `DecodedParameter`)[] |

#### Returns

`void`

#### Defined in

[src/ImageTransformBuilder.ts:586](src/ImageTransformBuilder.ts:586)

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

#### Defined in

[src/ImageTransformBuilder.ts:354](src/ImageTransformBuilder.ts:354)

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

#### Defined in

[src/ImageTransformBuilder.ts:421](src/ImageTransformBuilder.ts:421)

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

#### Defined in

[src/ImageTransformBuilder.ts:310](src/ImageTransformBuilder.ts:310)

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

#### Defined in

[src/ImageTransformBuilder.ts:444](src/ImageTransformBuilder.ts:444)

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

#### Defined in

[src/ImageTransformBuilder.ts:529](src/ImageTransformBuilder.ts:529)

___

### setName

▸ **setName**(`name?`, `len?`): `this`

Add file name to path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Target file name |
| `len?` | `number` | File name length limit |

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname))

#### Defined in

[src/ImageTransformBuilder.ts:508](src/ImageTransformBuilder.ts:508)

___

### setParameter

▸ **setParameter**(`parameterCode`, `valueToEncode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameterCode` | `ParameterCode` |
| `valueToEncode?` | `DecodedParameter` |

#### Returns

`void`

#### Defined in

[src/ImageTransformBuilder.ts:573](src/ImageTransformBuilder.ts:573)
