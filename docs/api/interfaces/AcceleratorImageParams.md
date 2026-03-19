[@ringpublishing/accelerator-images](../README.md) / AcceleratorImageParams

# Interface: AcceleratorImageParams

## Table of contents

### Properties

- [originalImageUrl](AcceleratorImageParams.md#originalimageurl)
- [transformationHost](AcceleratorImageParams.md#transformationhost)
- [transformationKey](AcceleratorImageParams.md#transformationkey)

## Properties

### originalImageUrl

• `Optional` **originalImageUrl**: ``null`` \| `string`

URL of the image that is going to be transformed.

**`Rationale`**

originalImageUrl can be either a URL pointing to the original image hosted on the internet (e.g. https://example.com/path/to/image.jpg)
or a S3 URI pointing to an object stored in an AWS S3 bucket (e.g. s3://example-bucket/path/to/image.jpg).

#### Defined in

[src/AcceleratorImage.ts:15](src/AcceleratorImage.ts:15)

___

### transformationHost

• `Optional` **transformationHost**: `string`

Vhost that is used to serve transformed images.
If you are using Accelerator Images variant, you should set the domain of your vhost as the custom domain.

#### Defined in

[src/AcceleratorImage.ts:27](src/AcceleratorImage.ts:27)

___

### transformationKey

• `Optional` **transformationKey**: ``null`` \| `string`

Transformation key that was used to encode transformation parameters. If you are using Accelerator Images variant,
copy the transformation key from variant's configuration.

#### Defined in

[src/AcceleratorImage.ts:21](src/AcceleratorImage.ts:21)
