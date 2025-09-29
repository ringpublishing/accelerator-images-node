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

[src/AcceleratorImage.ts:50](src/AcceleratorImage.ts:50)

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

[src/AcceleratorImage.ts:46](src/AcceleratorImage.ts:46)

___

### transformationHost

• `Protected` **transformationHost**: `string`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[transformationHost](AcceleratorImage.md#transformationhost)

#### Defined in

[src/AcceleratorImage.ts:42](src/AcceleratorImage.ts:42)

___

### transformationProtocol

• `Protected` **transformationProtocol**: ``null`` \| `Protocol` = `'https'`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[transformationProtocol](AcceleratorImage.md#transformationprotocol)

#### Defined in

[src/AcceleratorImage.ts:44](src/AcceleratorImage.ts:44)

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

[src/AcceleratorImage.ts:38](src/AcceleratorImage.ts:38)

## Accessors

### hasTransforms

• `get` **hasTransforms**(): `boolean`

#### Returns

`boolean`

#### Inherited from

AcceleratorImage.hasTransforms

#### Defined in

[src/AcceleratorImage.ts:100](src/AcceleratorImage.ts:100)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[animation](AcceleratorImage.md#animation)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#autoorient)](https://developer.ringpublishing.com/topics/images/transformations.html#autoorient))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[autoOrient](AcceleratorImage.md#autoorient)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#blur)](https://developer.ringpublishing.com/topics/images/transformations.html#blur))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[blur](AcceleratorImage.md#blur)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#crop)](https://developer.ringpublishing.com/topics/images/transformations.html#crop))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[crop](AcceleratorImage.md#crop)

#### Defined in

[src/ImageTransformBuilder.ts:301](src/ImageTransformBuilder.ts:301)

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

#### Returns

`this`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[forceHttpProtocol](AcceleratorImage.md#forcehttpprotocol)

#### Defined in

[src/AcceleratorImage.ts:218](src/AcceleratorImage.ts:218)

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getAnimation](AcceleratorImage.md#getanimation)

#### Defined in

[src/ImageTransformBuilder.ts:175](src/ImageTransformBuilder.ts:175)

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getAutoOrient](AcceleratorImage.md#getautoorient)

#### Defined in

[src/ImageTransformBuilder.ts:196](src/ImageTransformBuilder.ts:196)

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getBlur](AcceleratorImage.md#getblur)

#### Defined in

[src/ImageTransformBuilder.ts:263](src/ImageTransformBuilder.ts:263)

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getCrop](AcceleratorImage.md#getcrop)

#### Defined in

[src/ImageTransformBuilder.ts:310](src/ImageTransformBuilder.ts:310)

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getGrayscale](AcceleratorImage.md#getgrayscale)

#### Defined in

[src/ImageTransformBuilder.ts:328](src/ImageTransformBuilder.ts:328)

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getHash](AcceleratorImage.md#gethash)

#### Defined in

[src/ImageTransformBuilder.ts:417](src/ImageTransformBuilder.ts:417)

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getImageFormat](AcceleratorImage.md#getimageformat)

#### Defined in

[src/ImageTransformBuilder.ts:133](src/ImageTransformBuilder.ts:133)

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getImageQuality](AcceleratorImage.md#getimagequality)

#### Defined in

[src/ImageTransformBuilder.ts:154](src/ImageTransformBuilder.ts:154)

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getKeepAspectRatio](AcceleratorImage.md#getkeepaspectratio)

#### Defined in

[src/ImageTransformBuilder.ts:469](src/ImageTransformBuilder.ts:469)

___

### getMetadata

▸ **getMetadata**(): `undefined` \| `DecodedParameter`[]

Get metadata transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getMetadata](AcceleratorImage.md#getmetadata)

#### Defined in

[src/ImageTransformBuilder.ts:217](src/ImageTransformBuilder.ts:217)

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getOverlay](AcceleratorImage.md#getoverlay)

#### Defined in

[src/ImageTransformBuilder.ts:397](src/ImageTransformBuilder.ts:397)

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

Returns a new instance of [AcceleratorImage](AcceleratorImage.md) with originalImageUrl image's URL

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getParent](AcceleratorImage.md#getparent)

#### Defined in

[src/AcceleratorImage.ts:240](src/AcceleratorImage.ts:240)

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getResize](AcceleratorImage.md#getresize)

#### Defined in

[src/ImageTransformBuilder.ts:286](src/ImageTransformBuilder.ts:286)

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getResizeCropAuto](AcceleratorImage.md#getresizecropauto)

#### Defined in

[src/ImageTransformBuilder.ts:351](src/ImageTransformBuilder.ts:351)

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getRotate](AcceleratorImage.md#getrotate)

#### Defined in

[src/ImageTransformBuilder.ts:242](src/ImageTransformBuilder.ts:242)

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getSetBackground](AcceleratorImage.md#getsetbackground)

#### Defined in

[src/ImageTransformBuilder.ts:374](src/ImageTransformBuilder.ts:374)

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getSetName](AcceleratorImage.md#getsetname)

#### Defined in

[src/ImageTransformBuilder.ts:438](src/ImageTransformBuilder.ts:438)

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

Get image's URL

#### Returns

`string`

**`Rationale`**

When an object does not have and transformations nor transformation parameters set this will return URL to the original image.
When transformations are set, this will return URL to the transformed image.

**`Throws`**

when object is not initialized.

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[getUrl](AcceleratorImage.md#geturl)

#### Defined in

[src/AcceleratorImage.ts:268](src/AcceleratorImage.ts:268)

___

### grayscale

▸ **grayscale**(): `this`

Convert Image to grayscale

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/topics/images/transformations.html#grayscale)](https://developer.ringpublishing.com/topics/images/transformations.html#grayscale))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[grayscale](AcceleratorImage.md#grayscale)

#### Defined in

[src/ImageTransformBuilder.ts:319](src/ImageTransformBuilder.ts:319)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[hash](AcceleratorImage.md#hash)

#### Defined in

[src/ImageTransformBuilder.ts:408](src/ImageTransformBuilder.ts:408)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#imagequality)](https://developer.ringpublishing.com/topics/images/transformations.html#imagequality))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[imageQuality](AcceleratorImage.md#imagequality)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#keep-aspect-ratio)](https://developer.ringpublishing.com/topics/images/transformations.html#keep-aspect-ratio))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[keepAspectRatio](AcceleratorImage.md#keepaspectratio)

#### Defined in

[src/ImageTransformBuilder.ts:457](src/ImageTransformBuilder.ts:457)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#metadata)](https://developer.ringpublishing.com/topics/images/transformations.html#metadata))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[metadata](AcceleratorImage.md#metadata)

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

[https://developer.ringpublishing.com/topics/images/transformations.html#overlay)](https://developer.ringpublishing.com/topics/images/transformations.html#overlay))

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[overlay](AcceleratorImage.md#overlay)

#### Defined in

[src/ImageTransformBuilder.ts:388](src/ImageTransformBuilder.ts:388)

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

[src/AcceleratorImage.ts:160](src/AcceleratorImage.ts:160)

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

Set path as relative

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isRelative` | `boolean` | `true` |

#### Returns

`this`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[relative](AcceleratorImage.md#relative)

#### Defined in

[src/AcceleratorImage.ts:196](src/AcceleratorImage.ts:196)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[resize](AcceleratorImage.md#resize)

#### Defined in

[src/ImageTransformBuilder.ts:277](src/ImageTransformBuilder.ts:277)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[resizeCropAuto](AcceleratorImage.md#resizecropauto)

#### Defined in

[src/ImageTransformBuilder.ts:342](src/ImageTransformBuilder.ts:342)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[rotate](AcceleratorImage.md#rotate)

#### Defined in

[src/ImageTransformBuilder.ts:233](src/ImageTransformBuilder.ts:233)

___

### saveAs

▸ **saveAs**(`name`): `void`

Change filename in browser

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of file |

#### Returns

`void`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[saveAs](AcceleratorImage.md#saveas)

#### Defined in

[src/AcceleratorImage.ts:233](src/AcceleratorImage.ts:233)

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

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[setBackground](AcceleratorImage.md#setbackground)

#### Defined in

[src/ImageTransformBuilder.ts:365](src/ImageTransformBuilder.ts:365)

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

### setName

▸ **setName**(`name`): `this`

Add file name to path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Target file name |

#### Returns

`this`

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[setName](AcceleratorImage.md#setname)

#### Defined in

[src/AcceleratorImage.ts:321](src/AcceleratorImage.ts:321)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

**`See`**

[AcceleratorImage#getUrl](AcceleratorImage.md#geturl)

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[toString](AcceleratorImage.md#tostring)

#### Defined in

[src/AcceleratorImage.ts:287](src/AcceleratorImage.ts:287)

___

### withoutProtocol

▸ **withoutProtocol**(): `this`

Remove protocol from the transformation URL

#### Returns

`this`

**`Example`**

Here is a simple example:
```ts
const img = new AcceleratorImage({originalImageUrl: 'https://example.com/img.js', transformationKey: TRANSFORM_KEY});
img.withoutProtocol().toString(); // returns '//example.com/img.js'
```

#### Inherited from

[AcceleratorImage](AcceleratorImage.md).[withoutProtocol](AcceleratorImage.md#withoutprotocol)

#### Defined in

[src/AcceleratorImage.ts:212](src/AcceleratorImage.ts:212)

___

### fromTransformationUrl

▸ **fromTransformationUrl**(`transformedImageUrl`, `transformationKey`): [`AcceleratorImage`](AcceleratorImage.md)

Parse URL to a transformed image and initialize AcceleratorImage object with transformation parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformedImageUrl` | `string` | URL of the transformed image |
| `transformationKey` | `string` | Transformation transformationKey that was used to encode transformation parameters |

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

#### Overrides

[AcceleratorImage](AcceleratorImage.md).[fromTransformationUrl](AcceleratorImage.md#fromtransformationurl)

#### Defined in

[src/LegacyImage.ts:13](src/LegacyImage.ts:13)
