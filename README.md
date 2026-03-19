# @ringpublishing/accelerator-images

Accelerator Images is a feature of Ring Accelerator that allows you to serve transformed and optimized images.
When processing an incoming request, the Ring Accelerator Images variant recognizes transformation parameters encoded
in the request's path and applies them to the original image. The original image is fetched from a location pointed by website's developer.
It can be a S3 bucket, a legacy OCDN bucket, or an external domain that hosts images.

This library is a helper for Ring Accelerator Images users. It provides a set of utilities to define image transformations
and encode them into a URL that can be used in the website's HTML.

## Documentation

- List of [available transformations](https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html)
- [Ring Accelerator Images variant](https://developer.ringpublishing.com/docs/Accelerator/topics/variant-types/images.html)
- @ringpublishing/accelerator-images [API documentation](./docs/api/README.md)

### Quick start

### Using Accelerator Images variant and S3 bucket

Let's suppose that you have a content website example.com. that serves content with images. Accelerator Images variant
will help you to serve optimized images from a separate domain, e.g. images.example.com.

First, you need to configure your Accelerator Images variant. You can do it by following the [official documentation](https://developer.ringpublishing.com/docs/Accelerator/topics/variant-types/images.html).
In order for the `imageQuality('auto')` and `imageFormat('auto')` to work properly, in the variant configuration, enable [smart features](https://developer.ringpublishing.com/docs/Accelerator/topics/variant-types/images.html#smart-features).
Accelerator Images variant will fetch original images that are stored in **your** S3 bucket, apply transformations and serve them to downstream.

```ts
import { AcceleratorImage } from '@ringpublishing/accelerator-images';

const image = new AcceleratorImage({
    originalImageUrl: 's3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg',
    transformationKey: 'abc',
    transformationHost: 'images.example.com'
})
    .imageQuality('auto')
    .resize(10, 10)
    .rotate(1)
    .grayscale();

const url = image.getUrl();
```

### Using Accelerator Images variant and images from an external domain

If you don't want to store images in your S3 bucket, or your original images are provided by your CRM as a URL to some external domain, 
you can still use Accelerator Images variant to serve optimized images.

The variant configuration is going to be the same as in the previous example. The only difference is that you need to provide the original image URL
in `AcceleratorImage` constructor, instead of a S3 URI.

```ts
import { AcceleratorImage } from '@ringpublishing/accelerator-images';

const image = new AcceleratorImage({
    originalImageUrl: 'https://example.com/images/d5b8348d9bbfce94534d66db1f330f44.jpg',
    transformationKey: 'abc',
    transformationHost: 'images.example.com'
})
    .imageQuality('auto')
    .resize(10, 10)
    .rotate(1)
    .grayscale();

const url = image.getUrl();
```

### Easy image optimization or "empty" transformation

Sometimes you do not want to transform an image, but you still want to host it via Accelerator Images variant to benefit from its cache.
The easiest way to do that would be to use something like an "empty" transformation, so that Accelerator will cache the "transformed" image and serve it
from Accelerator's long-TTL cache that is used for transformed images.

The best choice in such situation would be to use `imageQuality('auto')`. It won't apply any transformations that will affect images' size or orientation.
It will however optimize the image's quality by dynamically choosing the best quality preset depending on the network conditions reported by the end-user's browser.

```ts
import { AcceleratorImage } from '@ringpublishing/accelerator-images';

const image = new AcceleratorImage({
    originalImageUrl: 's3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg',
    transformationKey: 'abc',
    transformationHost: 'images.example.com'
});
image.imageQuality('auto');

const optimizedImageUrl = image.getUrl();
```

### Parse a transformation URL and decode its parameters

Suppose that you have a URL to a transformed image, and you want to decode its parameters.

```ts
import { AcceleratorImage } from '@ringpublishing/accelerator-images';

const transformationUrl = 'https://images.example.com/1/hdDk9k_czM6Ly9zb21lLXMzLWJ1Y2tldC9pbWFnZXMvZDViODM0OGQ5YmJmY2U5NDUzNGQ2NmRiMWYzMzBmNDQuanBnk5UCCgrDw5IAAZEE3gABoTTD' // This is the URL we want to decode
const transformationKey = 'abc'; // You need to know the transformation key that was used to encode the URL.

const image = AcceleratorImage.fromTransformationUrl(transformationUrl, transformationKey);
```

### Using clone of AcceleratorImage object

If you want to create an `AcceleratorImage` object that can be reused for other purposes (e.g., you’ve applied one transformation and want to use this object as a base for further transformations without mutating the original), you can use the .clone() method.

This returns a new instance of `AcceleratorImage`, leaving the original image untouched when you apply transformations to the cloned object.

```ts
const image = new AcceleratorImage({
    originalImageUrl: 's3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg',
    transformationKey: 'abc',
    transformationHost: 'images.example.com'
});

const imageWithFocalPoint = image
    .clone()
    .setFocalPoint(100, 100); // New object with setFocalPoint transformation applied

const image1x1Small = imageWithFocalPoint
    .clone()
    .resizeCropAuto(200, 200); // New object with setFocalPoint and resizeCropAuto (imageWithFocalPoint is untouched)
const image1x1Medium = imageWithFocalPoint
    .clone()
    .resizeCropAuto(500, 500); // Same as above
const image1x1Large = imageWithFocalPoint
    .clone()
    .resizeCropAuto(1000, 1000); // Same as above

const image1x1SmallUrl = image1x1Small.getUrl();
const image1x1MediumUrl = image1x1Medium.getUrl();
const image1x1LargeUrl = image1x1Large.getUrl();
```

### Legacy OCDN buckets

If you are using a legacy OCDN bucket, you can use the `LegacyImage` class to define transformations. 

`LegacyImage` generates valid OCDN v3 compliant transformation URLs, however it encodes the original image in a different way, so the resulting URL will be different
compared to a URL generated with the legacy `dl-ocdn` library. These two transformed images will be exactly the same but once you switch from `dl-ocdn` to `@ringpublishing/accelerator-images`,
Accelerator will regenerate the transformation.

You have to keep in mind that this library supports only OCDN v3 format. The old OCDN v2 format is not supported.

```ts
import { LegacyImage } from '@ringpublishing/accelerator-images';

const image = new LegacyImage({
    originalImageUrl: 'https://ocdn.eu/pulscms/MDA_/987654321qwerty.jpg',
    transformationKey: 'abc'
});

image.resizeCropAuto(210, 370);
const url = image.getUrl();
```

## Development and contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information about how to contribute to this project.

## Porting to other languages

If you need to **port this library** to another language (Kotlin, Swift/Objective-C, PHP, Python,
etc.) or generate a compatible implementation with an AI coding tool, a complete language-agnostic
specification is available in [`docs/spec/`](./docs/spec/):

- [`SPECIFICATION.md`](./docs/spec/SPECIFICATION.md) — full encoding pipeline, transform/parameter
  schema tables, URL structure, and error conditions.
- [`TEST_CASES.md`](./docs/spec/TEST_CASES.md) — deterministic test vectors with exact expected
  URLs for verifying a reimplementation.
- [`PORTING_GUIDE.md`](./docs/spec/PORTING_GUIDE.md) — a step-by-step recipe for using an AI
  coding assistant (Claude Code, GitHub Copilot, etc.) to generate a working port.

## Issues

If you're having problems with this library, please contact support@ringpublishing.com.
