import { AcceleratorImageError, InvalidParameter, UrlError } from './errors';
import { ImageTransformBuilder } from './ImageTransformBuilder';
import { Decoder } from './internal/Decoder';
import { md5 } from './utils/crypto';

type Protocol = 'http' | 'https';

export interface AcceleratorImageParams {
    /**
     * URL of the image that is going to be transformed.
     *
     * @rationale originalImageUrl can be either a URL pointing to the original image hosted on the internet (e.g. https://example.com/path/to/image.jpg
     * or a S3 URI pointing to an object stored in an AWS S3 bucket (e.g. s3://example-bucket/path/to/image.jpg).
     */
    originalImageUrl?: string | null;

    /**
     * Transformation key that was used to encode transformation parameters. If you are using Accelerator Images variant,
     * copy the transformation key from variant's configuration.
     */
    transformationKey?: string | null;

    /**
     * Vhost that is used to serve transformed images.
     * If you are using Accelerator Images variant, you should set the domain of your vhost as the custom domain.
     */
    transformationHost?: string;
}

/**
 * @class AcceleratorImage
 *
 */
export class AcceleratorImage extends ImageTransformBuilder {
    /**
     * Current version of the Accelerator Images transformation URL
     */
    public static readonly VERSION = '1';

    private isInitialized = false;

    protected transformationHost!: string;

    protected transformationProtocol: Protocol | null = 'https'; // TODO: change to bool

    protected processedUrl!: string;

    private readonly transformationKey!: string;

    protected originalImageUrl!: string;

    private isRelative = false;

    private fileName!: string;

    private queryParameters: Record<string, string> = {};

    /**
     * @param originalImageUrl - URL of the originalImageUrl image
     * @param key - Transformation transformationKey
     */
    constructor({ originalImageUrl, transformationKey, transformationHost }: AcceleratorImageParams) {
        super();

        if (originalImageUrl) {
            this.processedUrl = originalImageUrl;
            this.originalImageUrl = originalImageUrl;
        }

        if (transformationHost) {
            this.transformationHost = transformationHost;
        }

        if (transformationKey) {
            this.transformationKey = transformationKey;
        }

        if (originalImageUrl) {
            // initialize has to be called after setting originalImageUrl, transformationHost and transformationKey are set
            this.initialize(originalImageUrl);
        }
    }

    /**
     * Parse URL to a transformed image and initialize AcceleratorImage object with transformation parameters
     *
     * @param transformedImageUrl - URL of the transformed image
     * @param transformationKey - Transformation transformationKey that was used to encode transformation parameters
     */
    public static fromTransformationUrl(transformedImageUrl: string, transformationKey: string): AcceleratorImage {
        const acceleratorImage = new AcceleratorImage({ originalImageUrl: null, transformationKey });

        acceleratorImage.parse(transformedImageUrl, true);

        return acceleratorImage;
    }

    public get hasTransforms(): boolean {
        return this.transforms.length > 0 || Object.keys(this.params).length > 0;
    }

    protected parseOriginal(url: URL): void {
        /*
            Example originals:
                s3://some-s3-bucket/images/abc.jpg              -> [s3,    '', some-s3-bucket,  images,                  abc.jpg]
                https://external.src/path/to/original/img.jpg   -> [https, '', external.src,    path,                    to,      original, img.jpg]
         */

        this.transformationProtocol = 'https';
        this.processedUrl = url.href;

        if (!['http:', 'https:', 's3:'].includes(url.protocol)) {
            throw new InvalidParameter('Unsupported protocol');
        }

        if (!this.transformationHost) {
            throw new InvalidParameter('Transformation host is not set. You need to set the transformation host to parse this URL');
        }
    }

    private parseTransformation(url: URL): void {
        this.transformationProtocol = 'https';
        this.processedUrl = url.href;
        this.transformationHost = url.hostname;

        const { version, encodedTransformation, fileName } = this.deconstructTransformationUrl(url);

        if (version !== AcceleratorImage.VERSION) {
            throw new UrlError(`Invalid transformation version of ${version}. Expected version is ${AcceleratorImage.VERSION}`);
        }

        if (!this.transformationKey) {
            throw new AcceleratorImageError('Transformation key is not set. You need to set the transformation key to parse this URL');
        }

        const [
            parentUrl,
            transforms,
            params
        ] = Decoder.decode(encodedTransformation, this.transformationKey);

        this.transforms = transforms ?? [];
        this.params = params ?? {};
        this.originalImageUrl = parentUrl ?? url.href;

        if (fileName) {
            this.fileName = fileName;
        }
    }

    protected deconstructTransformationUrl(url: URL): { version: string; encodedTransformation: string; fileName: string; } {
        // Example: https://img.example.com/1/base64/abc.jpg
        const [, version, encodedTransformation, fileName] = url.pathname.split('/');

        return { version, encodedTransformation, fileName };
    }

    protected parse(urlToParse: string, parseAsTransformation = false): void {
        let url: URL;

        try {
            url = new URL(urlToParse);
        } catch (error) {
            throw new UrlError(`Failed to parse original URL of: ${urlToParse}`);
        }

        if (parseAsTransformation === false) {
            this.parseOriginal(url);

            return;
        }

        this.parseTransformation(url);

        this.transformationProtocol = 'https';
        this.isInitialized = true;
    }

    private initialize(url: string): void {
        if (this.isInitialized) {
            return;
        }

        this.isInitialized = true;

        this.parse(url, false);
    }

    /**
     * Set path as relative
     *
     * @param isRelative
     */
    public relative(isRelative = true): this {
        this.isRelative = isRelative;

        return this;
    }

    /**
     * Remove protocol from the transformation URL
     *
     * @example
     * Here is a simple example:
     * ```ts
     * const img = new AcceleratorImage({originalImageUrl: 'https://example.com/img.js', transformationKey: TRANSFORM_KEY});
     * img.withoutProtocol().toString(); // returns '//example.com/img.js'
     * ```
     */
    public withoutProtocol(): this {
        this.transformationProtocol = null;

        return this;
    }

    public forceHttpProtocol(): this {
        this.transformationProtocol = 'http';

        return this;
    }

    private setResponseHeader(header: string, value: string): void {
        this.queryParameters[`response-${header}`] = value;
    }

    /**
     * Change filename in browser
     *
     * @param name name of file
     */
    public saveAs(name: string): void {
        this.setResponseHeader('content-disposition', `attachment; filename*=UTF-8''${name}`);
    }

    /**
     * Returns a new instance of {@link AcceleratorImage} with originalImageUrl image's URL
     */
    public getParent(): AcceleratorImage {
        return new AcceleratorImage({
            originalImageUrl: this.originalImageUrl,
            transformationKey: this.transformationKey,
            transformationHost: this.transformationHost
        });
    }

    /**
     * Returns URL's path of the transformed image
     */
    protected getTransformationPath(): string {
        if (!this.hasTransforms) {
            throw new InvalidParameter('No transformations set');
        }

        return `/${AcceleratorImage.VERSION}/${Decoder.encode([this.originalImageUrl, this.transforms, this.params], this.transformationKey)}`;
    }

    /**
     * Get image's URL
     *
     * @rationale
     * When an object does not have and transformations nor transformation parameters set this will return URL to the original image.
     * When transformations are set, this will return URL to the transformed image.
     *
     * @throws {InvalidParameter} when object is not initialized.
     */
    public getUrl(): string {
        if (!this.isInitialized) {
            throw new InvalidParameter('Instance of AcceleratorImage is not initialized');
        }

        if (!this.hasTransforms) {
            return this.originalImageUrl;
        }

        return this.getTransformationUrl();
    }

    /**
     * @see {@link AcceleratorImage#getUrl}
     */
    public toString(): string {
        if (!this.isInitialized) {
            return '[Uninitialized AcceleratorImage object]';
        }

        return this.getUrl();
    }

    private getTransformationUrl(): string {
        const urlWithoutPath = this.transformationProtocol ? `${this.transformationProtocol}://${this.transformationHost}` : `//${this.transformationHost}`;

        let url = this.isRelative ? this.getTransformationPath() : urlWithoutPath + this.getTransformationPath();

        if (this.fileName) {
            url = `${url}/${this.fileName}`;
        }

        const queryParameters = Object.entries(this.queryParameters);
        const query = queryParameters.length
            ? `?${ queryParameters
                .map(([key, value]) => `${key}=${value}`)
                .join('&')}`
            : '';

        return url + query;
    }

    /**
     * Add file name to path
     *
     * @override
     *
     * @param name Target file name
     */
    public setName(name: string): this {
        if (name.indexOf('/') !== -1) {
            throw new InvalidParameter('Invalid name given. Name should not contain "/"');
        }

        this.fileName = name;
        const length = 6;
        const hash = md5(name, 'hex').slice(0, length);
        super.setName(hash, length);

        return this;
    }
}
