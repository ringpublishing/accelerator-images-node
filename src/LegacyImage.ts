import { AcceleratorImage, AcceleratorImageParams } from './AcceleratorImage';
import { TRANSFORMS_SUFFIX, LEGACY_TRANSFORM_DOMAIN } from './internal/constants';
import { InvalidParameter } from './errors';

export type LegacyImageParams = Omit<AcceleratorImageParams, 'transformationHost'>;

/**
 * AcceleratorImage implementation for legacy OCDN URLs.
 */
export class LegacyImage extends AcceleratorImage {
    private bucket!: string;

    public static fromTransformationUrl(transformedImageUrl: string, transformationKey: string): AcceleratorImage {
        const acceleratorImage = new LegacyImage({ originalImageUrl: null, transformationKey });

        acceleratorImage.parse(transformedImageUrl, true);

        return acceleratorImage;
    }

    constructor(params: LegacyImageParams) {
        super(params);
        this.transformationHost = LEGACY_TRANSFORM_DOMAIN;
    }

    public setBucket(bucket: string): void {
        this.bucket = bucket;
    }

    protected parseOriginal(url: URL): void {
        /*
            Example originals:
                s3://some-s3-bucket/images/abc.jpg
                https://ocdn.eu/some-s3-bucket/images/abc.jpg
         */
        this.transformationProtocol = 'https';
        this.processedUrl = url.href;
        this.bucket = url.pathname.split('/')[1];

        if (!['http:', 'https:', 's3:'].includes(url.protocol)) {
            throw new InvalidParameter('Unsupported protocol');
        }

        if (this.transformationHost) {
            this.transformationHost = LEGACY_TRANSFORM_DOMAIN;
            throw new InvalidParameter('Transformation host is not set. You need to set the transformation host to parse this URL');
        }
    }

    protected deconstructTransformationUrl(url: URL): { version: string; encodedTransformation: string; fileName: string; } {
        // Example: https://ocdn.eu/test-bucket-transforms/1/base64
        const [, bucket, version, encodedTransformation, fileName] = url.pathname.split('/');

        this.bucket = bucket.replace(TRANSFORMS_SUFFIX, ''); // my-bucket-transforms -> my-bucket

        return { version, encodedTransformation, fileName };
    }

    protected getTransformationPath(): string {
        return `/${ this.bucket }${TRANSFORMS_SUFFIX }${super.getTransformationPath()}`;
    }
}
