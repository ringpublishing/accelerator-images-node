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

[src/ImageTransformBuilder.ts:166](src/ImageTransformBuilder.ts:166)

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

[src/ImageTransformBuilder.ts:187](src/ImageTransformBuilder.ts:187)

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

[src/ImageTransformBuilder.ts:254](src/ImageTransformBuilder.ts:254)

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

[src/ImageTransformBuilder.ts:302](src/ImageTransformBuilder.ts:302)

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

[src/ImageTransformBuilder.ts:175](src/ImageTransformBuilder.ts:175)

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Defined in

[src/ImageTransformBuilder.ts:196](src/ImageTransformBuilder.ts:196)

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:263](src/ImageTransformBuilder.ts:263)

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:311](src/ImageTransformBuilder.ts:311)

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:329](src/ImageTransformBuilder.ts:329)

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:418](src/ImageTransformBuilder.ts:418)

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

#### Defined in

[src/ImageTransformBuilder.ts:133](src/ImageTransformBuilder.ts:133)

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

#### Defined in

[src/ImageTransformBuilder.ts:154](src/ImageTransformBuilder.ts:154)

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:492](src/ImageTransformBuilder.ts:492)

___

### getMetadata

▸ **getMetadata**(): `undefined` \| `DecodedParameter`[]

Get metadata transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:217](src/ImageTransformBuilder.ts:217)

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:398](src/ImageTransformBuilder.ts:398)

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

[src/ImageTransformBuilder.ts:501](src/ImageTransformBuilder.ts:501)

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

[src/ImageTransformBuilder.ts:287](src/ImageTransformBuilder.ts:287)

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:352](src/ImageTransformBuilder.ts:352)

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:242](src/ImageTransformBuilder.ts:242)

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:375](src/ImageTransformBuilder.ts:375)

___

### getSetFocalPoint

▸ **getSetFocalPoint**(): `undefined` \| `DecodedParameter`[]

Get setFocalPoint transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:461](src/ImageTransformBuilder.ts:461)

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Defined in

[src/ImageTransformBuilder.ts:439](src/ImageTransformBuilder.ts:439)

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

[src/ImageTransformBuilder.ts:522](src/ImageTransformBuilder.ts:522)

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

[src/ImageTransformBuilder.ts:320](src/ImageTransformBuilder.ts:320)

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

[src/ImageTransformBuilder.ts:409](src/ImageTransformBuilder.ts:409)

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

[src/ImageTransformBuilder.ts:145](src/ImageTransformBuilder.ts:145)

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

[src/ImageTransformBuilder.ts:480](src/ImageTransformBuilder.ts:480)

___

### metadata

▸ **metadata**(`mode?`): `this`

Get metadata of the image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode?` | [`MetadataType`](../README.md#metadatatype) | Type of metadata to get. |

#### Returns

`this`

**`Throws`**

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata))

#### Defined in

[src/ImageTransformBuilder.ts:208](src/ImageTransformBuilder.ts:208)

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

[src/ImageTransformBuilder.ts:389](src/ImageTransformBuilder.ts:389)

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

[src/ImageTransformBuilder.ts:509](src/ImageTransformBuilder.ts:509)

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

[src/ImageTransformBuilder.ts:278](src/ImageTransformBuilder.ts:278)

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

[src/ImageTransformBuilder.ts:343](src/ImageTransformBuilder.ts:343)

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

[src/ImageTransformBuilder.ts:233](src/ImageTransformBuilder.ts:233)

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

[src/ImageTransformBuilder.ts:366](src/ImageTransformBuilder.ts:366)

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

[src/ImageTransformBuilder.ts:452](src/ImageTransformBuilder.ts:452)

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

[src/ImageTransformBuilder.ts:430](src/ImageTransformBuilder.ts:430)

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

[src/ImageTransformBuilder.ts:496](src/ImageTransformBuilder.ts:496)
