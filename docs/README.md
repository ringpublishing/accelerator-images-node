@ringpublishing/accelerator-images

# @ringpublishing/accelerator-images

## Table of contents

### Classes

- [AcceleratorImage](classes/AcceleratorImage.md)
- [AcceleratorImageError](classes/AcceleratorImageError.md)
- [ImageTransformBuilder](classes/ImageTransformBuilder.md)
- [InternalError](classes/InternalError.md)
- [InvalidParameter](classes/InvalidParameter.md)
- [LegacyImage](classes/LegacyImage.md)
- [UrlError](classes/UrlError.md)

### Interfaces

- [AcceleratorImageParams](interfaces/AcceleratorImageParams.md)

### Type Aliases

- [EncodedParameters](README.md#encodedparameters)
- [EncodedTransforms](README.md#encodedtransforms)
- [HashType](README.md#hashtype)
- [ImageFormat](README.md#imageformat)
- [ImageQuality](README.md#imagequality)
- [LegacyImageParams](README.md#legacyimageparams)
- [MetadataType](README.md#metadatatype)
- [OverlayMode](README.md#overlaymode)
- [OverlayPosition](README.md#overlayposition)
- [Rotation](README.md#rotation)

## Type Aliases

### EncodedParameters

Ƭ **EncodedParameters**: `Record`\<`number`, `EncodedParameter`\>

#### Defined in

[src/ImageTransformBuilder.ts:15](src/ImageTransformBuilder.ts:15)

___

### EncodedTransforms

Ƭ **EncodedTransforms**: `EncodedParameter`[][]

#### Defined in

[src/ImageTransformBuilder.ts:14](src/ImageTransformBuilder.ts:14)

___

### HashType

Ƭ **HashType**: ``"md5"`` \| ``"sha1"``

Available hash types for the hash transformation.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash))

#### Defined in

[src/ImageTransformBuilder.ts:59](src/ImageTransformBuilder.ts:59)

___

### ImageFormat

Ƭ **ImageFormat**: ``"auto"`` \| ``"original"`` \| ``"jpeg"`` \| ``"png"`` \| ``"bmp"`` \| ``"tiff"`` \| ``"webp"`` \| ``"avif"``

Available image formats.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat))

#### Defined in

[src/ImageTransformBuilder.ts:66](src/ImageTransformBuilder.ts:66)

___

### ImageQuality

Ƭ **ImageQuality**: ``"auto"`` \| ``"low"`` \| ``"medium"`` \| ``"high"`` \| ``"very-high"``

Available quality presets.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality))

#### Defined in

[src/ImageTransformBuilder.ts:79](src/ImageTransformBuilder.ts:79)

___

### LegacyImageParams

Ƭ **LegacyImageParams**: `Omit`\<[`AcceleratorImageParams`](interfaces/AcceleratorImageParams.md), ``"transformationHost"``\>

#### Defined in

[src/LegacyImage.ts:5](src/LegacyImage.ts:5)

___

### MetadataType

Ƭ **MetadataType**: ``"basic"`` \| ``"exif"`` \| ``"iptc"`` \| ``"all"``

Available metadata types for the metadata transformation.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata))

#### Defined in

[src/ImageTransformBuilder.ts:73](src/ImageTransformBuilder.ts:73)

___

### OverlayMode

Ƭ **OverlayMode**: ``"over"`` \| ``"in"`` \| ``"out"`` \| ``"atop"`` \| ``"xor"`` \| ``"plus"`` \| ``"minus"`` \| ``"add"`` \| ``"subtract"`` \| ``"difference"`` \| ``"divide"`` \| ``"multiply"`` \| ``"bumpmap"`` \| ``"copy"`` \| ``"copy-red"`` \| ``"copy-green"`` \| ``"copy-blue"`` \| ``"copy-opacity"`` \| ``"copy-cyan"`` \| ``"copy-magenta"`` \| ``"copy-yellow"`` \| ``"copy-black"``

Available values for the mode arg of the Overlay transformation.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay))

#### Defined in

[src/ImageTransformBuilder.ts:30](src/ImageTransformBuilder.ts:30)

___

### OverlayPosition

Ƭ **OverlayPosition**: ``"stretch"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"center-left"`` \| ``"center-center"`` \| ``"center-right"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"``

Available values for the position arg of the Overlay transformation.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay)

#### Defined in

[src/ImageTransformBuilder.ts:22](src/ImageTransformBuilder.ts:22)

___

### Rotation

Ƭ **Rotation**: ``1`` \| ``2`` \| ``3``

Available values for the rotation transformation.

**`See`**

[https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate)](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate))

#### Defined in

[src/ImageTransformBuilder.ts:86](src/ImageTransformBuilder.ts:86)
