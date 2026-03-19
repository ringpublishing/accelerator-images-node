import { AcceleratorImageError, InvalidParameter, UrlError } from './errors';
import { ImageTransformBuilder } from './ImageTransformBuilder';
import { Decoder } from './internal/Decoder';
import { md5 } from './utils/crypto';

type Protocol = 'http' | 'https';

export interface AcceleratorImageParams {
    /**
     * URL of the image that is going to be transformed.
     *
     * @rationale originalImageUrl can be either a URL pointing to the original image hosted on the internet (e.g. https://example.com/path/to/image.jpg)
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
 * Helper class for generating Ring Accelerator Images transformation URLs.
 *
 * Encodes the original image URL, a list of transformations and global parameters
 * into a single URL-safe token that is served by the Accelerator Images variant.
 *
 * When no transformations are set, {@link AcceleratorImage.getUrl} returns the original image URL unchanged.
 * When at least one transformation or parameter is set, it returns a fully-qualified transformation URL
 * in the form `{protocol}://{transformationHost}/1/{token}[/{fileName}]`.
 *
 * @example Create and encode a transformation URL
 * ```ts
 * const image = new AcceleratorImage({
 *     originalImageUrl: 's3://my-bucket/photo.jpg',
 *     transformationKey: 'secret',
 *     transformationHost: 'images.example.com',
 * });
 * const url = image.resize(800, 600).imageQuality('auto').getUrl();
 * ```
 *
 * @example Decode an existing transformation URL
 * ```ts
 * const image = AcceleratorImage.fromTransformationUrl(
 *     'https://images.example.com/1/abc123...',
 *     'secret'
 * );
 * ```
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
     * Creates a new AcceleratorImage instance.
     *
     * If `originalImageUrl` is provided and valid (http, https, or s3 protocol), the instance is
     * immediately initialized. Calling {@link AcceleratorImage.getUrl} without any transformation
     * will return the original URL as-is.
     *
     * If `originalImageUrl` is omitted or `null`, the instance remains uninitialized.
     * In that case {@link AcceleratorImage.getUrl} throws {@link InvalidParameter} and
     * {@link AcceleratorImage.toString} returns a placeholder string.
     *
     * @param params - Construction parameters. See {@link AcceleratorImageParams} for details.
     * @param params.originalImageUrl - URL of the original image (`http://`, `https://`, or `s3://`).
     * @param params.transformationKey - Secret key used to sign and verify the encoded transformation token.
     * @param params.transformationHost - Hostname of the Accelerator Images variant (e.g. `images.example.com`).
     *
     * @throws {InvalidParameter} If `originalImageUrl` uses an unsupported protocol.
     * @throws {InvalidParameter} If `transformationHost` is missing when `originalImageUrl` is provided.
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
     * Parses an existing Accelerator Images transformation URL and returns a fully initialized
     * {@link AcceleratorImage} instance with all transformations and parameters restored.
     *
     * @param transformedImageUrl - A previously generated transformation URL.
     * @param transformationKey - The secret key that was used to sign the URL.
     *
     * @returns A new {@link AcceleratorImage} instance initialized from the decoded URL.
     *
     * @throws {UrlError} If the URL cannot be parsed.
     * @throws {UrlError} If the URL version does not match {@link AcceleratorImage.VERSION}.
     * @throws {AcceleratorImageError} If the signature embedded in the token is invalid.
     */
    public static fromTransformationUrl(transformedImageUrl: string, transformationKey: string): AcceleratorImage {
        const acceleratorImage = new AcceleratorImage({ originalImageUrl: null, transformationKey });

        acceleratorImage.parse(transformedImageUrl, true);

        return acceleratorImage;
    }

    /**
     * Returns `true` when at least one transformation or at least one global parameter
     * (e.g. {@link imageFormat}, {@link imageQuality}) has been set on this instance.
     */
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

        if (!parseAsTransformation) {
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
     * Makes the generated URL path-relative (no protocol or host).
     *
     * When enabled, {@link AcceleratorImage.getUrl} returns only the path portion
     * (e.g. `/1/{token}`) instead of a full URL. Has no effect when no transformations
     * are set — the original image URL is returned unchanged regardless.
     *
     * @param isRelative - Pass `false` to revert to an absolute URL. Defaults to `true`.
     * @returns The current instance for method chaining.
     */
    public relative(isRelative = true): this {
        this.isRelative = isRelative;

        return this;
    }

    /**
     * Removes the protocol from the generated transformation URL, producing a protocol-relative URL.
     *
     * Has no effect when no transformations are set — the original image URL is returned unchanged.
     *
     * @returns The current instance for method chaining.
     *
     * @example
     * ```ts
     * const img = new AcceleratorImage({originalImageUrl: 'https://example.com/img.jpg', transformationKey: TRANSFORM_KEY, transformationHost: 'images.example.com'});
     * img.rotate(1).withoutProtocol().getUrl(); // '//images.example.com/1/...'
     * ```
     */
    public withoutProtocol(): this {
        this.transformationProtocol = null;

        return this;
    }

    /**
     * Forces the generated transformation URL to use the `http` protocol instead of the default `https`.
     *
     * @returns The current instance for method chaining.
     */
    public forceHttpProtocol(): this {
        this.transformationProtocol = 'http';

        return this;
    }

    private setResponseHeader(header: string, value: string): void {
        this.queryParameters[`response-${header}`] = value;
    }

    /**
     * Sets the `Content-Disposition` response header so that the browser treats the image as a
     * file download with the given filename.
     *
     * The filename is encoded as a UTF-8 RFC 5987 parameter
     * (`attachment; filename*=UTF-8''<name>`).
     *
     * @param name - The filename the browser should suggest when saving the image.
     *
     * @deprecated This method will be removed in a future major version.
     */
    public saveAs(name: string): void {
        this.setResponseHeader('content-disposition', `attachment; filename*=UTF-8''${name}`);
    }

    /**
     * Returns a new, bare {@link AcceleratorImage} instance pointing at the same original image URL,
     * with the same `transformationKey` and `transformationHost`, but with **no transformations**.
     *
     * Useful when you want to start a new transformation chain from scratch based on the same source image.
     *
     * @returns A new {@link AcceleratorImage} instance with no transformations applied.
     */
    public getParent(): AcceleratorImage {
        return new AcceleratorImage({
            originalImageUrl: this.originalImageUrl,
            transformationKey: this.transformationKey,
            transformationHost: this.transformationHost
        });
    }

    /**
     * Returns a deep clone of this instance with all transformations and parameters copied.
     *
     * Mutations applied to the clone do not affect the original instance and vice-versa.
     * If no transformations are set, this is equivalent to {@link AcceleratorImage.getParent}.
     *
     * @returns A new {@link AcceleratorImage} instance with the same transformations.
     */
    public clone(): AcceleratorImage {
        if (!this.hasTransforms) {
            return this.getParent();
        }

        return AcceleratorImage.fromTransformationUrl(this.getUrl(), this.transformationKey);
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
     * Returns the URL for this image.
     *
     * - When **no** transformations or global parameters are set, returns the original image URL as-is.
     * - When **at least one** transformation or parameter is set, returns a fully-qualified
     *   Accelerator Images transformation URL.
     *
     * @returns The original image URL or the encoded transformation URL.
     *
     * @throws {InvalidParameter} When the instance is not initialized (no `originalImageUrl` was provided).
     * @throws {InvalidParameter} When {@link metadata} is combined with other transformations.
     */
    public getUrl(): string {
        if (!this.isInitialized) {
            throw new InvalidParameter('Instance of AcceleratorImage is not initialized');
        }

        if (!this.hasTransforms) {
            return this.originalImageUrl;
        }

        if (!this.transformationKey) {
            throw new InvalidParameter('Transformation key is required when using transformations or parameters');
        }

        if (this.getMetadata() && this.getTransforms().length > 1) {
            throw new InvalidParameter('Cannot use metadata transformation with other transformations. Use it as the only transformation.');
        }

        return this.getTransformationUrl();
    }

    /**
     * Returns the same value as {@link AcceleratorImage.getUrl}.
     * When the instance is not initialized, returns a placeholder string instead of throwing.
     *
     * @returns The transformation URL, the original image URL, or `'[Uninitialized AcceleratorImage object]'`.
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
     * Appends a human-readable filename to the transformation URL path and registers a `setName`
     * transformation in the encoded token.
     *
     * This override differs from {@link ImageTransformBuilder.setName} in two ways:
     * - The full `name` value is appended as an extra path segment at the end of the URL
     *   (e.g. `.../1/{token}/photo.jpg`), which helps CDN logs and browser downloads.
     * - Only the first 6 characters of the MD5 hex digest of `name` are passed as the `name`
     *   argument to the base `setName` transformation, keeping the encoded token compact.
     *
     * @param name - Target filename. Must not contain `/`.
     * @returns The current instance for method chaining.
     *
     * @throws {InvalidParameter} If `name` contains a `/` character.
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname}
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
