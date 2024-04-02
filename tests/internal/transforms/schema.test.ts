import {
    EncodedParameter,
    getEncodedValue,
    getParameterSchema,
    ParameterCode
} from '../../../src/internal/transforms/schema';

describe('schema', () => {
    describe('getParameterSchema', () => {
        it('should return parameter schema', () => {
            // given
            const parameterCode = ParameterCode.imageFormat;
            // when
            const result = getParameterSchema(parameterCode);
            // then
            expect(result).toEqual({
                type: 'enum',
                name: 'imageFormat',
                default: 0,
                values: {
                    0: 'original',
                    1: 'jpeg',
                    2: 'png',
                    3: 'bmp',
                    4: 'tiff',
                    5: 'webp',
                    6: 'avif'
                }
            });
        });
    });
    describe('getEncodedValue', () => {
        it('should return encoded value for enum', () => {
            // given
            const schema = getParameterSchema(ParameterCode.imageFormat);
            // when
            const result = getEncodedValue(schema, 'jpeg');
            // then
            expect(result).toEqual(1);
        });

        it('should throw error when encoded value for enum is not allowed', () => {
            // given
            const schema = getParameterSchema(ParameterCode.imageFormat);
            // when
            const fn = (): EncodedParameter => getEncodedValue(schema, 'siabadaba');
            // then
            expect(fn).toThrow('Cannot encode value of "siabadaba" for parameter imageFormat');
        });

        it('should return encoded value for boolean', () => {
            // given
            const schema = getParameterSchema(ParameterCode.animation);
            // when
            const result = getEncodedValue(schema, false);
            // then
            expect(result).toEqual(false);
        });
    });
});
