import { InternalError, InvalidParameter } from '../../errors';

export type EncodedParameter = string | number | boolean;
export type DecodedParameter = string | number | boolean;

type ParameterValue = {
    type: 'integer' | 'boolean' | 'string';
} | {
    type: 'enum';
    values: Record<number, string>;
};

export type ParameterSchema<DefaultValue = EncodedParameter> = {
    name: string;
    default?: DefaultValue;
} & ParameterValue;

type ArgumentValue = {
    type: 'boolean' | 'string';
} | {
    type: 'enum';
    values: Record<number, string>;
} | {
    type: 'integer';
    minValue?: number;
    maxValue?: number;
};

type ArgumentSchema<DefaultValue = EncodedParameter> = {
    name: string;
    description?: string;
    default?: DefaultValue;
} & ArgumentValue;

interface TransformSchema {
    name: string;
    description: string;
    args: ArgumentSchema[];
}

interface AvailableTransformsSchema {
    transformations: Record<number, TransformSchema>;
    params: Record<number, ParameterSchema>;
}

export const schema: AvailableTransformsSchema = {
    transformations: {
        0: {
            name: 'rotate',
            description: 'Rotate image clockwise',
            args: [
                {
                    name: 'angle',
                    description: 'Number of 90 degrees rotations to perform',
                    type: 'integer',
                    minValue: 0
                }
            ]
        },
        1: {
            name: 'blur',
            description: 'Blur image',
            args: [
                {
                    name: 'power',
                    description: 'Blur strength',
                    type: 'integer',
                    default: 10,
                    minValue: 0,
                    maxValue: 100
                }
            ]
        },
        2: {
            name: 'resize',
            description: 'Resize image with preserving aspect ratio',
            args: [
                {
                    name: 'width',
                    description: 'Target width (0 for preserve aspect ratio)',
                    type: 'integer',
                    minValue: 0
                },
                {
                    name: 'height',
                    description: 'Target height (0 for preserve aspect ratio)',
                    type: 'integer',
                    minValue: 0
                },
                {
                    name: 'scaleUp',
                    description: 'Enables enlarging image when one of sizes is set to 0',
                    type: 'boolean',
                    default: true
                },
                {
                    name: 'scaleDown',
                    description: 'Enables shrinking image when one of sizes is set to 0',
                    type: 'boolean',
                    default: true
                }
            ]
        },
        3: {
            name: 'crop',
            description: 'Crop image to given size',
            args: [
                {
                    name: 'x',
                    description: 'The distance of the cropped image from the left edge of the image',
                    type: 'integer',
                    minValue: 0
                },
                {
                    name: 'y',
                    type: 'integer',
                    description: 'The distance of the cropped image from the top edge of the image',
                    minValue: 0
                },
                {
                    name: 'width',
                    description: 'Width of the cropped image',
                    type: 'integer',
                    minValue: 0
                },
                {
                    name: 'height',
                    type: 'integer',
                    description: 'Height of the cropped image',
                    minValue: 0
                }
            ]
        },
        4: {
            name: 'grayscale',
            description: 'Convert Image to grayscale',
            args: []
        },
        5: {
            name: 'resizeCropAuto',
            description: 'Crop image automatically to given width and height',
            args: [
                {
                    name: 'width',
                    type: 'integer',
                    minValue: 1
                },
                {
                    name: 'height',
                    type: 'integer',
                    minValue: 1
                }
            ]
        },
        6: {
            name: 'setBackground',
            description: 'Add background to image with alpha channel',
            args: [
                {
                    name: 'red',
                    type: 'integer',
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'green',
                    type: 'integer',
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'blue',
                    type: 'integer',
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'alpha',
                    type: 'integer',
                    minValue: 0,
                    maxValue: 255,
                    default: 255
                }
            ]
        },
        7: {
            name: 'overlay',
            description: 'Combine image with another one',
            args: [
                {
                    name: 'uri',
                    type: 'string'
                },
                {
                    name: 'position',
                    type: 'enum',
                    values: {
                        0: 'stretch',
                        1: 'top-left',
                        2: 'top-center',
                        3: 'top-right',
                        4: 'center-left',
                        5: 'center-center',
                        6: 'center-right',
                        7: 'bottom-left',
                        8: 'bottom-center',
                        9: 'bottom-right'
                    },
                    default: 0
                },
                {
                    name: 'reverse',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'mode',
                    type: 'enum',
                    values: {
                        0: 'over',
                        1: 'in',
                        2: 'out',
                        3: 'atop',
                        4: 'xor',
                        5: 'plus',
                        6: 'minus',
                        7: 'add',
                        8: 'subtract',
                        9: 'difference',
                        10: 'divide',
                        11: 'multiply',
                        12: 'bumpmap',
                        13: 'copy',
                        14: 'copy-red',
                        15: 'copy-green',
                        16: 'copy-blue',
                        17: 'copy-opacity',
                        18: 'copy-cyan',
                        19: 'copy-magenta',
                        20: 'copy-yellow',
                        21: 'copy-black'
                    },
                    default: 0
                }
            ]
        },
        8: {
            name: 'hash',
            description: 'Change path in url to hash',
            args: [
                {
                    name: 'type',
                    type: 'enum',
                    values: {
                        0: 'md5',
                        1: 'sha1'
                    },
                    default: 0
                }
            ]
        },
        9: {
            name: 'setName',
            description: 'Add file name to path',
            args: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'len',
                    default: 6,
                    type: 'integer'
                }
            ]
        },
        10: {
            name: 'keepAspectRatio',
            description: 'It extends the picture to match given aspect ratio by adding blurred image of itself as background for empty areas',
            args: [
                {
                    name: 'width',
                    description: 'Target image width',
                    type: 'integer'
                },
                {
                    name: 'height',
                    description: 'Target image height',
                    type: 'integer'
                },
                {
                    name: 'blurPower',
                    description: 'Blur strength',
                    type: 'integer',
                    default: 10,
                    minValue: 0,
                    maxValue: 100
                },
                {
                    name: 'red',
                    description: 'Overlay color red channel',
                    type: 'integer',
                    default: 0,
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'green',
                    description: 'Overlay color green channel',
                    type: 'integer',
                    default: 0,
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'blue',
                    description: 'Overlay color blue channel',
                    type: 'integer',
                    default: 0,
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'alpha',
                    description: 'Overlay color alpha channel',
                    type: 'integer',
                    default: 175,
                    minValue: 0,
                    maxValue: 255
                },
                {
                    name: 'toleranceX',
                    description: 'A percent of width that can be removed to fit aspect ratio',
                    type: 'integer',
                    default: 0,
                    minValue: 0,
                    maxValue: 100
                },
                {
                    name: 'toleranceY',
                    description: 'A percent of height that can be removed to fit aspect ratio',
                    type: 'integer',
                    default: 0,
                    minValue: 0,
                    maxValue: 100
                }
            ]
        }
    },
    params: {
        0: {
            name: 'imageFormat',
            type: 'enum',
            values: {
                0: 'original',
                1: 'jpeg',
                2: 'png',
                3: 'bmp',
                4: 'tiff',
                5: 'webp',
                6: 'avif'
            },
            default: 0
        },
        1: {
            name: 'imageQuality',
            type: 'enum',
            values: {
                0: 'low',
                1: 'medium',
                2: 'high',
                3: 'very-high'
            },
            default: 1
        },
        2: {
            name: 'animation',
            type: 'boolean',
            default: true
        },
        3: {
            name: 'autoOrient',
            type: 'boolean',
            default: false
        },
        4: {
            name: 'autoImageFormat', // This is a reserved parameter for internal use
            type: 'boolean',
            default: true
        }
    }
};

export enum ParameterCode {
    imageFormat = 0,
    imageQuality = 1,
    animation = 2,
    autoOrient = 3,
    autoImageFormat = 4
}

export enum TransformCode {
    rotate = 0,
    blur = 1,
    resize = 2,
    crop = 3,
    grayscale = 4,
    resizeCropAuto = 5,
    setBackground = 6,
    overlay = 7,
    hash = 8,
    setName = 9,
    keepAspectRatio = 10
}

export function getParameterSchema(parameter: ParameterCode): ParameterSchema {
    if (parameter === ParameterCode.autoImageFormat) {
        throw new InternalError('Cannot get schema for reserved parameter');
    }

    return schema.params[parameter];
}

export function getTransformSchema(transformation: TransformCode): TransformSchema {
    return schema.transformations[transformation];
}

export function getEncodedValue(schema: ParameterSchema | ArgumentSchema, value?: EncodedParameter): EncodedParameter {
    if (value === undefined) {
        if (schema.default === undefined) {
            throw new InvalidParameter('Required value not specified');
        }

        return schema.default;
    }

    switch (schema.type) {
        case 'integer': {
            if (typeof value !== 'number') {
                throw new InvalidParameter('Invalid type of value - should be number');
            }

            if ('minValue' in schema && schema.minValue !== undefined && value < schema.minValue) {
                throw new InvalidParameter(`Value must be greater than ${schema.minValue}`);
            }

            if ('maxValue' in schema && schema.maxValue !== undefined && value > schema.maxValue) {
                throw new InvalidParameter(`Value must be less than ${schema.maxValue}`);
            }

            return value;
        }
        case 'boolean': {
            if (typeof value !== 'boolean') {
                throw new InvalidParameter('Invalid type of value - should be boolean');
            }

            return value;
        }
        case 'string': {
            if (typeof value !== 'string') {
                throw new Error('Invalid type of value - should be string');
            }

            return value;
        }
        case 'enum': {
            const allowedValues = Object.entries(schema.values);

            for (const [enumCode, enumValue] of allowedValues) {
                if (value === enumValue) {
                    return parseInt(enumCode, 10);
                }
            }

            throw new InvalidParameter(`Cannot encode value of "${value}" for parameter ${schema.name}`);
        }
    }
}

export function getDecodedValue(schema: ParameterSchema | ArgumentSchema, value: EncodedParameter): EncodedParameter {
    if (value === undefined) {
        throw new InvalidParameter('Required value not specified');
    }

    if (schema.type === 'enum') {
        if (typeof value !== 'number') {
            throw new InternalError(`Cannot decode value of ${value} for parameter ${schema.name}. Expected encoded value to be a number for enum type.`);
        }

        return schema.values[value];
    }

    return value;
}
