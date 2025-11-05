import {
    DecodedParameter,
    EncodedParameter,
    getDecodedValue,
    getEncodedValue,
    getParameterSchema,
    getTransformSchema,
    ParameterCode,
    TransformCode
} from './internal/transforms/schema';
import { InternalError } from './errors';
import { deepCopy } from './utils/copy';

export type EncodedTransforms = EncodedParameter[][];
export type EncodedParameters = Record<number, EncodedParameter>;

/**
 * Available values for the position arg of the Overlay transformation.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay}
 */
export type OverlayPosition = 'stretch' | 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center'
    | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

/**
 * Available values for the mode arg of the Overlay transformation.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay)}
 */
export type OverlayMode =
    'over'
    | 'in'
    | 'out'
    | 'atop'
    | 'xor'
    | 'plus'
    | 'minus'
    | 'add'
    | 'subtract'
    | 'difference'
    | 'divide'
    | 'multiply'
    | 'bumpmap'
    | 'copy'
    | 'copy-red'
    | 'copy-green'
    | 'copy-blue'
    | 'copy-opacity'
    | 'copy-cyan'
    | 'copy-magenta'
    | 'copy-yellow'
    | 'copy-black';

/**
 * Available hash types for the hash transformation.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash)}
 */
export type HashType = 'md5' | 'sha1';

/**
 * Available image formats.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat)}
 */
export type ImageFormat = 'auto' | 'original' | 'jpeg' | 'png' | 'bmp' | 'tiff' | 'webp' | 'avif';

/**
 * Available metadata types for the metadata transformation.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata)}
 */
export type MetadataType = 'basic' | 'exif' | 'iptc' | 'all';

/**
 * Available quality presets.
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality)}
 */
export type ImageQuality = 'auto' | 'low' | 'medium' | 'high' | 'very-high';

/**
 * Available values for the rotation transformation.
 *
 * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate)}
 */
export type Rotation = 1 | 2 | 3;

/**
 * Builds image transformation metadata object.
 */
export class ImageTransformBuilder {
    protected transforms: EncodedTransforms;

    protected params: EncodedParameters;

    constructor() {
        this.transforms = [];
        this.params = {};
    }

    /**
     * Returns a deep copy of encoded transforms array.
     */
    public getTransforms(): EncodedParameter[][] {
        return deepCopy(this.transforms);
    }

    /**
     * Returns a deep copy of encoded parameters object.
     */
    public getParameters(): Record<number, EncodedParameter> {
        return deepCopy(this.params);
    }

    /**
     * Sets the format of the transformed image.
     *
     * @param format
     *
     * @throws {InvalidParameter} - If format is not supported
     * @rationale - When format "original" is selected, Accelerator will preserve the format of the original image.
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imageformat)}
     */
    public imageFormat(format?: ImageFormat): this {
        this.setParameter(ParameterCode.imageFormat, format);

        return this;
    }

    /**
     * Get image format
     */
    public getImageFormat(): ImageFormat | undefined {
        return this.getParameter(ParameterCode.imageFormat) as ImageFormat | undefined;
    }

    /**
     * Set the quality of the transformed image using predefined quality levels.
     *
     * @param quality - Quality of the transformed image.
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#imagequality)}
     */
    public imageQuality(quality?: ImageQuality): this {
        this.setParameter(ParameterCode.imageQuality, quality);

        return this;
    }

    /**
     * Get image quality
     */
    public getImageQuality(): ImageQuality | undefined {
        return this.getParameter(ParameterCode.imageQuality) as ImageQuality | undefined;
    }

    /**
     * Set animation
     *
     * @param animation
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#animation)}
     */
    public animation(animation: boolean): this {
        this.setParameter(ParameterCode.animation, animation);

        return this;
    }

    /**
     * Get animation
     */
    public getAnimation(): EncodedParameter | undefined {
        return this.getParameter(ParameterCode.animation);
    }

    /**
     * Set auto-orientation
     *
     * @param autoOrient
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#autoorient)}
     */
    public autoOrient(autoOrient: boolean): this {
        this.setParameter(ParameterCode.autoOrient, autoOrient);

        return this;
    }

    /**
     * Get auto-orientation
     */
    public getAutoOrient(): EncodedParameter | undefined {
        return this.getParameter(ParameterCode.autoOrient);
    }

    /**
     * Get metadata of the image
     *
     * @param mode - Type of metadata to get.
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#metadata)}
     */
    public metadata(mode?: MetadataType): this {
        this.pushTransform(TransformCode.metadata, [mode]);

        return this;
    }

    /**
     * Get metadata transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getMetadata(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.metadata);
    }

    /**
     * Rotate image clockwise
     *
     * @param angle - Number of 90 degrees rotations to perform.
     *
     * @throws {InvalidParameter}
     * @rationale
     *     The angle parameter specifies the number of 90 degree clockwise rotations to perform on the image.
     *     For example when the angle is 1, the image will be rotated 90 degrees clockwise.
     *     When the angle is 2, the image will be rotated 180 degrees clockwise. Etc.
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#rotate)}
     */
    public rotate(angle?: Rotation): this {
        this.pushTransform(TransformCode.rotate, [angle]);

        return this;
    }

    /**
     * Get rotate transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getRotate(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.rotate);
    }

    /**
     * Apply blur effect to the image
     *
     * @param power Blur strength
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#blur)}
     */
    public blur(power?: number): this {
        this.pushTransform(TransformCode.blur, [power]);

        return this;
    }

    /**
     * Get blur transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getBlur(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.blur);
    }

    /**
     * Resize image with preserving aspect ratio
     *
     * @param width Target width (0 for preserve aspect ratio)
     * @param height Target height (0 for preserve aspect ratio)
     * @param scaleUp Enables enlarging image when one of sizes is set to 0
     * @param scaleDown Enables shrinking image when one of sizes is set to 0
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resize}
     */
    public resize(width?: number, height?: number, scaleUp?: boolean, scaleDown?: boolean): this {
        this.pushTransform(TransformCode.resize, [width, height, scaleUp, scaleDown]);

        return this;
    }

    /**
     * Get resize transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getResize(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.resize);
    }

    /**
     * Crop image to a given size
     *
     * @param x The distance of the cropped image from the left edge of the image
     * @param y The distance of the cropped image from the top edge of the image
     * @param width Width of the cropped image
     * @param height Height of the cropped image
     *
     * @throws {InvalidParameter}
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#crop)}
     */
    public crop(x?: number, y?: number, width?: number, height?: number): this {
        this.pushTransform(TransformCode.crop, [x, y, width, height]);

        return this;
    }

    /**
     * Get crop transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getCrop(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.crop);
    }

    /**
     * Convert Image to grayscale
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#grayscale)}
     */
    public grayscale(): this {
        this.pushTransform(TransformCode.grayscale, []);

        return this;
    }

    /**
     * Get grayscale transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getGrayscale(): DecodedParameter[] | undefined {
        // When transformation is set this will always return an empty array. Maybe this function is pointless?
        // I'm keeping it though, so we're compatible with the original interface of dl-ocdn.
        return this.getTransformArguments(TransformCode.grayscale);
    }

    /**
     * Crop image automatically to given width and height
     *
     * @param width Width of the cropped image
     * @param height Height of the cropped image
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#resizecropauto)}
     */
    public resizeCropAuto(width?: number, height?: number): this {
        this.pushTransform(TransformCode.resizeCropAuto, [width, height]);

        return this;
    }

    /**
     * Get resizeCropAuto transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getResizeCropAuto(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.resizeCropAuto);
    }

    /**
     * Add background to image with alpha channel
     *
     * @param red
     * @param green
     * @param blue
     * @param alpha
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-background)}
     */
    public setBackground(red?: number, green?: number, blue?: number, alpha?: number): this {
        this.pushTransform(TransformCode.setBackground, [red, green, blue, alpha]);

        return this;
    }

    /**
     * Get setBackground transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getSetBackground(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.setBackground);
    }

    /**
     * Combine image with another one
     *
     * @param url URL of the image to overlay
     * @param position Position of the overlay
     * @param reverse Reverse the order of the images.
     * @param mode Overlay mode
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#overlay)}
     */
    public overlay(url?: string, position?: OverlayPosition, reverse?: boolean, mode?: OverlayMode): this {
        this.pushTransform(TransformCode.overlay, [url, position, reverse, mode]);

        return this;
    }

    /**
     * Get overlay transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getOverlay(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.overlay);
    }

    /**
     * Change path in original image URL to a md5 or sha1 hash
     *
     * @param type Hash type
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#hash)}
     */
    public hash(type?: HashType): this {
        this.pushTransform(TransformCode.hash, [type]);

        return this;
    }

    /**
     * Get hash transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getHash(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.hash);
    }

    /**
     * Add file name to path
     *
     * @param name Target file name
     * @param len File name length limit
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#setname)}
     */
    public setName(name?: string, len?: number): this {
        this.pushTransform(TransformCode.setName, [name, len]);

        return this;
    }

    /**
     * Get setName transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getSetName(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.setName);
    }

    /**
     * * Set the focal point of the image
     *
     * @param x Focal point X coordinate
     * @param y Focal point Y coordinate
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#set-focal-point)}
     */
    public setFocalPoint(x: number, y: number): this {
        this.pushTransform(TransformCode.setFocalPoint, [x, y]);

        return this;
    }

    /**
     * Get setFocalPoint transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getSetFocalPoint(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.setFocalPoint);
    }

    /**
     * Extends the picture to match given aspect ratio by adding blurred image of itself as background for empty areas
     *
     * @param width Target image width
     * @param height Target image height
     * @param blurPower Blur strength
     * @param red Overlay color red channel
     * @param green Overlay color green channel
     * @param blue Overlay color blue channel
     * @param alpha Overlay color alpha channel. Default is 175.
     * @param toleranceX A percent of width that can be removed to fit aspect ratio.
     * @param toleranceY A percent of height that can be removed to fit aspect ratio.
     *
     * @see {@link https://developer.ringpublishing.com/docs/Accelerator/topics/images/transformations.html#keep-aspect-ratio)}
     */
    public keepAspectRatio(
        width?: number, height?: number, blurPower?: number,
        red?: number, green?: number, blue?: number, alpha?: number,
        toleranceX?: number, toleranceY?: number): this {
        this.pushTransform(TransformCode.keepAspectRatio, [width, height, blurPower, red, green, blue, alpha, toleranceX, toleranceY]);

        return this;
    }

    /**
     * Get keepAspectRatio transformation arguments in decoded form. Returns undefined if the transformation is not set.
     */
    public getKeepAspectRatio(): DecodedParameter[] | undefined {
        return this.getTransformArguments(TransformCode.keepAspectRatio);
    }

    private setParameter(parameterCode: ParameterCode, valueToEncode?: DecodedParameter): void {
        const schema = getParameterSchema(parameterCode);
        this.params[parameterCode] = getEncodedValue(schema, valueToEncode);
    }

    private getParameter(parameterCode: ParameterCode): DecodedParameter | undefined {
        const schema = getParameterSchema(parameterCode);

        const encodedValue = this.params[parameterCode];

        return encodedValue !== undefined ? getDecodedValue(schema, encodedValue) : undefined;
    }

    private pushTransform(transformCode: TransformCode, args: (DecodedParameter | undefined)[]): void {
        const schema = getTransformSchema(transformCode);
        const tmp: EncodedParameter[] = [transformCode];

        // Mind that the order of args must match the order of schema.args
        for (const [idx, argumentSchema] of schema.args.entries()) {
            const encodedValue = getEncodedValue(argumentSchema, args[idx]);
            tmp.push(encodedValue);
        }

        this.transforms.push(tmp);
    }

    private getTransformArguments(transformCode: TransformCode): DecodedParameter[] | undefined {
        const transformation = this.transforms.find((t) => t[0] === transformCode);

        if (transformation) {
            const result: DecodedParameter[] = [];
            const encodedArgs = transformation.slice(1);

            const transformSchema = getTransformSchema(transformCode);

            for (const [index, argumentSchema] of transformSchema.args.entries()) {
                const decodedValue = getDecodedValue(argumentSchema, encodedArgs[index]);

                result.push(decodedValue);
            }

            if (result.length !== transformSchema.args.length) {
                // This should never happen unless there's a bug in the way we handle transforms
                throw new InternalError(`Invalid number of arguments for transformation ${transformCode}`);
            }

            return result;
        }

        return undefined;
    }
}
