# @ringpublishing/accelerator-images

Accelerator Images is a feature of Ring Accelerator that allows you to serve transformed and optimized images.
When processing an incoming request, the Ring Accelerator Images variant recognizes transformation parameters encoded
in the request's path and applies them to the original image. The original image is fetched from a location pointed by website's developer.
It can be a S3 bucket, a legacy OCDN bucket, or an external domain that hosts images.

This library is a helper for Ring Accelerator Images users. It provides a set of utilities to define image transformations
and encode them into a URL that can be used in the website's HTML.

## Documentation

- Full documentation of this library is available at: TODO
- List of [available transformations](https://developer.ringpublishing.com/docs/Accelerator/topics/ocdn/transforms.html)
- [Ring Accelerator Images variant](https://developer.ringpublishing.com/docs/Accelerator/topics/variant-types/images.html)

### Quick start

### Using Accelerator Images variant and S3 bucket

Let's suppose that you have a content website example.com. that serves content with images. Accelerator Images variant
will help you to serve optimized images from a separate domain, e.g. images.example.com.

First, you need to configure your Accelerator Images variant. You can do it by following the [official documentation](https://developer.ringpublishing.com/docs/Accelerator/topics/variant-types/images.html).
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
    .grayscale()

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

## Development and contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information about how to contribute to this project.

## Issues

If you're having problems with this library, please contact support@ringpublishing.com.

