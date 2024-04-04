[@ringpublishing/accelerator-images](../README.md) / AcceleratorImage

# Class: AcceleratorImage

AcceleratorImage

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
- [getOverlay](AcceleratorImage.md#getoverlay)
- [getParameters](AcceleratorImage.md#getparameters)
- [getParent](AcceleratorImage.md#getparent)
- [getResize](AcceleratorImage.md#getresize)
- [getResizeCropAuto](AcceleratorImage.md#getresizecropauto)
- [getRotate](AcceleratorImage.md#getrotate)
- [getSetBackground](AcceleratorImage.md#getsetbackground)
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
- [setName](AcceleratorImage.md#setname)
- [setResponseHeader](AcceleratorImage.md#setresponseheader)
- [toString](AcceleratorImage.md#tostring)
- [withoutProtocol](AcceleratorImage.md#withoutprotocol)
- [fromTransformationUrl](AcceleratorImage.md#fromtransformationurl)

## Constructors

### constructor

• **new AcceleratorImage**(`«destructured»`): [`AcceleratorImage`](AcceleratorImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`AcceleratorImageParams`](../interfaces/AcceleratorImageParams.md) |

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

#### Overrides

[ImageTransformBuilder](ImageTransformBuilder.md).[constructor](ImageTransformBuilder.md#constructor)

#### Defined in

src/AcceleratorImage.ts:62

## Properties

### fileName

• `Private` **fileName**: `string`

#### Defined in

src/AcceleratorImage.ts:54

___

### isInitialized

• `Private` **isInitialized**: `boolean` = `false`

#### Defined in

src/AcceleratorImage.ts:40

___

### isRelative

• `Private` **isRelative**: `boolean` = `false`

#### Defined in

src/AcceleratorImage.ts:52

___

### originalImageUrl

• `Protected` **originalImageUrl**: `string`

#### Defined in

src/AcceleratorImage.ts:50

___

### params

• `Protected` **params**: [`EncodedParameters`](../README.md#encodedparameters)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[params](ImageTransformBuilder.md#params)

#### Defined in

src/ImageTransformBuilder.ts:87

___

### processedUrl

• `Protected` **processedUrl**: `string`

#### Defined in

src/AcceleratorImage.ts:46

___

### queryParameters

• `Private` **queryParameters**: `Record`\<`string`, `string`\> = `{}`

#### Defined in

src/AcceleratorImage.ts:56

___

### transformationHost

• `Protected` **transformationHost**: `string`

#### Defined in

src/AcceleratorImage.ts:42

___

### transformationKey

• `Private` `Readonly` **transformationKey**: `string`

#### Defined in

src/AcceleratorImage.ts:48

___

### transformationProtocol

• `Protected` **transformationProtocol**: ``null`` \| `Protocol` = `'https'`

#### Defined in

src/AcceleratorImage.ts:44

___

### transforms

• `Protected` **transforms**: [`EncodedTransforms`](../README.md#encodedtransforms)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[transforms](ImageTransformBuilder.md#transforms)

#### Defined in

src/ImageTransformBuilder.ts:85

___

### VERSION

▪ `Static` `Readonly` **VERSION**: ``"1"``

Current version of the Accelerator Images transformation URL

#### Defined in

src/AcceleratorImage.ts:38

## Accessors

### hasTransforms

• `get` **hasTransforms**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/AcceleratorImage.ts:98

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

[ImageTransformBuilder](ImageTransformBuilder.md).[animation](ImageTransformBuilder.md#animation)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[autoOrient](ImageTransformBuilder.md#autoorient)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[blur](ImageTransformBuilder.md#blur)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[crop](ImageTransformBuilder.md#crop)

#### Defined in

src/ImageTransformBuilder.ts:273

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

src/AcceleratorImage.ts:151

___

### forceHttpProtocol

▸ **forceHttpProtocol**(): `this`

#### Returns

`this`

#### Defined in

src/AcceleratorImage.ts:216

___

### getAnimation

▸ **getAnimation**(): `undefined` \| `EncodedParameter`

Get animation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getAnimation](ImageTransformBuilder.md#getanimation)

#### Defined in

src/ImageTransformBuilder.ts:168

___

### getAutoOrient

▸ **getAutoOrient**(): `undefined` \| `EncodedParameter`

Get auto-orientation

#### Returns

`undefined` \| `EncodedParameter`

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getAutoOrient](ImageTransformBuilder.md#getautoorient)

#### Defined in

src/ImageTransformBuilder.ts:189

___

### getBlur

▸ **getBlur**(): `undefined` \| `DecodedParameter`[]

Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getBlur](ImageTransformBuilder.md#getblur)

#### Defined in

src/ImageTransformBuilder.ts:235

___

### getCrop

▸ **getCrop**(): `undefined` \| `DecodedParameter`[]

Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getCrop](ImageTransformBuilder.md#getcrop)

#### Defined in

src/ImageTransformBuilder.ts:282

___

### getGrayscale

▸ **getGrayscale**(): `undefined` \| `DecodedParameter`[]

Get grayscale transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getGrayscale](ImageTransformBuilder.md#getgrayscale)

#### Defined in

src/ImageTransformBuilder.ts:300

___

### getHash

▸ **getHash**(): `undefined` \| `DecodedParameter`[]

Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getHash](ImageTransformBuilder.md#gethash)

#### Defined in

src/ImageTransformBuilder.ts:389

___

### getImageFormat

▸ **getImageFormat**(): `undefined` \| [`ImageFormat`](../README.md#imageformat)

Get image format

#### Returns

`undefined` \| [`ImageFormat`](../README.md#imageformat)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getImageFormat](ImageTransformBuilder.md#getimageformat)

#### Defined in

src/ImageTransformBuilder.ts:126

___

### getImageQuality

▸ **getImageQuality**(): `undefined` \| [`ImageQuality`](../README.md#imagequality)

Get image quality

#### Returns

`undefined` \| [`ImageQuality`](../README.md#imagequality)

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getImageQuality](ImageTransformBuilder.md#getimagequality)

#### Defined in

src/ImageTransformBuilder.ts:147

___

### getKeepAspectRatio

▸ **getKeepAspectRatio**(): `undefined` \| `DecodedParameter`[]

Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getKeepAspectRatio](ImageTransformBuilder.md#getkeepaspectratio)

#### Defined in

src/ImageTransformBuilder.ts:441

___

### getOverlay

▸ **getOverlay**(): `undefined` \| `DecodedParameter`[]

Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getOverlay](ImageTransformBuilder.md#getoverlay)

#### Defined in

src/ImageTransformBuilder.ts:369

___

### getParameters

▸ **getParameters**(): `Record`\<`number`, `EncodedParameter`\>

Returns a deep copy of encoded parameters object.

#### Returns

`Record`\<`number`, `EncodedParameter`\>

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getParameters](ImageTransformBuilder.md#getparameters)

#### Defined in

src/ImageTransformBuilder.ts:104

___

### getParent

▸ **getParent**(): [`AcceleratorImage`](AcceleratorImage.md)

Returns a new instance of [AcceleratorImage](AcceleratorImage.md) with originalImageUrl image's URL

#### Returns

[`AcceleratorImage`](AcceleratorImage.md)

#### Defined in

src/AcceleratorImage.ts:238

___

### getResize

▸ **getResize**(): `undefined` \| `DecodedParameter`[]

Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getResize](ImageTransformBuilder.md#getresize)

#### Defined in

src/ImageTransformBuilder.ts:258

___

### getResizeCropAuto

▸ **getResizeCropAuto**(): `undefined` \| `DecodedParameter`[]

Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getResizeCropAuto](ImageTransformBuilder.md#getresizecropauto)

#### Defined in

src/ImageTransformBuilder.ts:323

___

### getRotate

▸ **getRotate**(): `undefined` \| `DecodedParameter`[]

Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getRotate](ImageTransformBuilder.md#getrotate)

#### Defined in

src/ImageTransformBuilder.ts:214

___

### getSetBackground

▸ **getSetBackground**(): `undefined` \| `DecodedParameter`[]

Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getSetBackground](ImageTransformBuilder.md#getsetbackground)

#### Defined in

src/ImageTransformBuilder.ts:346

___

### getSetName

▸ **getSetName**(): `undefined` \| `DecodedParameter`[]

Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.

#### Returns

`undefined` \| `DecodedParameter`[]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getSetName](ImageTransformBuilder.md#getsetname)

#### Defined in

src/ImageTransformBuilder.ts:410

___

### getTransformationPath

▸ **getTransformationPath**(): `string`

Returns URL's path of the transformed image

#### Returns

`string`

#### Defined in

src/AcceleratorImage.ts:249

___

### getTransformationUrl

▸ **getTransformationUrl**(): `string`

#### Returns

`string`

#### Defined in

src/AcceleratorImage.ts:289

___

### getTransforms

▸ **getTransforms**(): `EncodedParameter`[][]

Returns a deep copy of encoded transforms array.

#### Returns

`EncodedParameter`[][]

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[getTransforms](ImageTransformBuilder.md#gettransforms)

#### Defined in

src/ImageTransformBuilder.ts:97

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

#### Defined in

src/AcceleratorImage.ts:266

___

### grayscale

▸ **grayscale**(): `this`

Convert Image to grayscale

#### Returns

`this`

**`See`**

[https://developer.ringpublishing.com/topics/images/transformations.html#grayscale)](https://developer.ringpublishing.com/topics/images/transformations.html#grayscale))

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[grayscale](ImageTransformBuilder.md#grayscale)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[hash](ImageTransformBuilder.md#hash)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[imageFormat](ImageTransformBuilder.md#imageformat)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[imageQuality](ImageTransformBuilder.md#imagequality)

#### Defined in

src/ImageTransformBuilder.ts:138

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

src/AcceleratorImage.ts:179

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

[ImageTransformBuilder](ImageTransformBuilder.md).[keepAspectRatio](ImageTransformBuilder.md#keepaspectratio)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[overlay](ImageTransformBuilder.md#overlay)

#### Defined in

src/ImageTransformBuilder.ts:360

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

src/AcceleratorImage.ts:158

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

src/AcceleratorImage.ts:102

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

src/AcceleratorImage.ts:121

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

#### Defined in

src/AcceleratorImage.ts:194

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

[ImageTransformBuilder](ImageTransformBuilder.md).[resize](ImageTransformBuilder.md#resize)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[resizeCropAuto](ImageTransformBuilder.md#resizecropauto)

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

#### Inherited from

[ImageTransformBuilder](ImageTransformBuilder.md).[rotate](ImageTransformBuilder.md#rotate)

#### Defined in

src/ImageTransformBuilder.ts:205

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

#### Defined in

src/AcceleratorImage.ts:231

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

[ImageTransformBuilder](ImageTransformBuilder.md).[setBackground](ImageTransformBuilder.md#setbackground)

#### Defined in

src/ImageTransformBuilder.ts:337

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

#### Overrides

[ImageTransformBuilder](ImageTransformBuilder.md).[setName](ImageTransformBuilder.md#setname)

#### Defined in

src/AcceleratorImage.ts:315

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

src/AcceleratorImage.ts:222

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

**`See`**

[AcceleratorImage#getUrl](AcceleratorImage.md#geturl)

#### Defined in

src/AcceleratorImage.ts:281

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

#### Defined in

src/AcceleratorImage.ts:210

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

#### Defined in

src/AcceleratorImage.ts:90
