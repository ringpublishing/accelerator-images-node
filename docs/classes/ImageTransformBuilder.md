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
- [getAnimation](ImageTransformBuilder.md#getanimation)
- [getAutoOrient](ImageTransformBuilder.md#getautoorient)
- [getBlur](ImageTransformBuilder.md#getblur)
- [getCrop](ImageTransformBuilder.md#getcrop)
- [getGrayscale](ImageTransformBuilder.md#getgrayscale)
- [getHash](ImageTransformBuilder.md#gethash)
- [getImageFormat](ImageTransformBuilder.md#getimageformat)
- [getImageQuality](ImageTransformBuilder.md#getimagequality)
- [getKeepAspectRatio](ImageTransformBuilder.md#getkeepaspectratio)
- [getOverlay](ImageTransformBuilder.md#getoverlay)
- [getParameter](ImageTransformBuilder.md#getparameter)
- [getParameters](ImageTransformBuilder.md#getparameters)
- [getResize](ImageTransformBuilder.md#getresize)
- [getResizeCropAuto](ImageTransformBuilder.md#getresizecropauto)
- [getRotate](ImageTransformBuilder.md#getrotate)
- [getSetBackground](ImageTransformBuilder.md#getsetbackground)
- [getSetName](ImageTransformBuilder.md#getsetname)
- [getTransformArguments](ImageTransformBuilder.md#gettransformarguments)
- [getTransforms](ImageTransformBuilder.md#gettransforms)
- [grayscale](ImageTransformBuilder.md#grayscale)
- [hash](ImageTransformBuilder.md#hash)
- [imageFormat](ImageTransformBuilder.md#imageformat)
- [imageQuality](ImageTransformBuilder.md#imagequality)
- [keepAspectRatio](ImageTransformBuilder.md#keepaspectratio)
- [overlay](ImageTransformBuilder.md#overlay)
- [pushTransform](ImageTransformBuilder.md#pushtransform)
- [resize](ImageTransformBuilder.md#resize)
- [resizeCropAuto](ImageTransformBuilder.md#resizecropauto)
- [rotate](ImageTransformBuilder.md#rotate)
- [setBackground](ImageTransformBuilder.md#setbackground)
- [setName](ImageTransformBuilder.md#setname)
- [setParameter](ImageTransformBuilder.md#setparameter)

## Constructors

### constructor

• **new ImageTransformBuilder**(): [`ImageTransformBuilder`](ImageTransformBuilder.md)

#### Returns

[`ImageTransformBuilder`](ImageTransformBuilder.md)

#### Defined in

src/ImageTransformBuilder.ts:89

## Properties

### params

• `Protected` **params**: [`EncodedParameters`](../README.md#encodedparameters)

#### Defined in

src/ImageTransformBuilder.ts:87

___

### transforms

• `Protected` **transforms**: [`EncodedTransforms`](../README.md#encodedtransforms)

#### Defined in

src/ImageTransformBuilder.ts:85

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

[https://developer.ringpublishing.com/topics/images/transformations.html#animation)](https://developer.ringpublishing.com/topics/images/transformations.html#animation))

#### Defined in

src/ImageTransformBuilder.ts:159

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

[https://developer.ringpublishing.com/topics/images/transformations.html#autoorient)](https://developer.ringpublishing.com/topics/images/transformations.html#autoorient))

#### Defined in

src/ImageTransformBuilder.ts:180

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

[https://developer.ringpublishing.com/topics/images/transformations.html#blur)](https://developer.ringpublishing.com/topics/images/transformations.html#blur))

#### Defined in

src/ImageTransformBuilder.ts:226

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

[https://developer.ringpublishing.com/topics/images/transformations.html#crop)](https://developer.ringpublishing.com/topics/images/transformations.html#crop))

#### Defined in

src/ImageTransformBuilder.ts:273

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

src/ImageTransformBuilder.ts:168

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

src/ImageTransformBuilder.ts:189

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:235

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:282

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:300

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:389

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

#### Defined in

src/ImageTransformBuilder.ts:126

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

#### Defined in

src/ImageTransformBuilder.ts:147

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:441

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:369

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

src/ImageTransformBuilder.ts:450

___

### getParameters

▸ **getParameters**(): `Record`\<`number`, `EncodedParameter`\>

Returns a deep copy of encoded parameters object.

#### Returns

`Record`\<`number`, `EncodedParameter`\>

#### Defined in

src/ImageTransformBuilder.ts:104

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:258

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:323

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:214

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:346

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

src/ImageTransformBuilder.ts:410

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

src/ImageTransformBuilder.ts:471

___

### getTransforms

▸ **getTransforms**(): `EncodedParameter`[][]

Returns a deep copy of encoded transforms array.

#### Returns

`EncodedParameter`[][]

#### Defined in

src/ImageTransformBuilder.ts:97

___

### grayscale

▸ **grayscale**(): `this`

Convert Image to grayscale

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/topics/images/transformations.html#grayscale)](https://developer.ringpublishing.com/topics/images/transformations.html#grayscale))

#### Defined in

src/ImageTransformBuilder.ts:291

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

[https://developer.ringpublishing.com/topics/images/transformations.html#hash)](https://developer.ringpublishing.com/topics/images/transformations.html#hash))

#### Defined in

src/ImageTransformBuilder.ts:380

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

[https://developer.ringpublishing.com/topics/images/transformations.html#imageformat)](https://developer.ringpublishing.com/topics/images/transformations.html#imageformat))

#### Defined in

src/ImageTransformBuilder.ts:117

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

[https://developer.ringpublishing.com/topics/images/transformations.html#imagequality)](https://developer.ringpublishing.com/topics/images/transformations.html#imagequality))

#### Defined in

src/ImageTransformBuilder.ts:138

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

[https://developer.ringpublishing.com/topics/images/transformations.html#keep-aspect-ratio)](https://developer.ringpublishing.com/topics/images/transformations.html#keep-aspect-ratio))

#### Defined in

src/ImageTransformBuilder.ts:429

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

[https://developer.ringpublishing.com/topics/images/transformations.html#overlay)](https://developer.ringpublishing.com/topics/images/transformations.html#overlay))

#### Defined in

src/ImageTransformBuilder.ts:360

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

src/ImageTransformBuilder.ts:458

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

[https://developer.ringpublishing.com/topics/images/transformations.html#resize)](https://developer.ringpublishing.com/topics/images/transformations.html#resize))

#### Defined in

src/ImageTransformBuilder.ts:249

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

[https://developer.ringpublishing.com/topics/images/transformations.html#resizecropauto)](https://developer.ringpublishing.com/topics/images/transformations.html#resizecropauto))

#### Defined in

src/ImageTransformBuilder.ts:314

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

[https://developer.ringpublishing.com/topics/images/transformations.html#rotate)](https://developer.ringpublishing.com/topics/images/transformations.html#rotate))

#### Defined in

src/ImageTransformBuilder.ts:205

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

[https://developer.ringpublishing.com/topics/images/transformations.html#set-background)](https://developer.ringpublishing.com/topics/images/transformations.html#set-background))

#### Defined in

src/ImageTransformBuilder.ts:337

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

[https://developer.ringpublishing.com/topics/images/transformations.html#setname)](https://developer.ringpublishing.com/topics/images/transformations.html#setname))

#### Defined in

src/ImageTransformBuilder.ts:401

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

src/ImageTransformBuilder.ts:445
