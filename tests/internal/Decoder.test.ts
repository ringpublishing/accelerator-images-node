import { Decoder, RawTransformData } from '../../src/internal/Decoder';
import { InternalError } from '../../src';

describe('Decoder', () => {
    const TRANSFORM_KEY = 'abc';

    const createSimpleTransformation = (): RawTransformData => {
        const originalImage = 'https://images.example.com/originals/kitten.png';
        const rotateTransform = [[0, 1]];
        const transformParameters = { 0: 1 };

        return [originalImage, rotateTransform, transformParameters];
    };

    describe('encode', () => {
        it('Should encode', () => {
            // Given
            const input = createSimpleTransformation();
            // When
            const result = Decoder.encode(input, TRANSFORM_KEY);
            // Then
            expect(result).toEqual('k51k9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB3gABoTAB');
        });
    });

    describe('decode', () => {
        it('Should decode', () => {
            // Given
            const encoded = 'k51k9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB3gABoTAB';
            // When
            const result = Decoder.decode(encoded, TRANSFORM_KEY);
            // Then
            expect(result).toEqual(createSimpleTransformation());
        });
    });

    describe('Browser compatibility (no Buffer)', () => {
        const tmpBuffer = global.Buffer;

        beforeEach(() => {
            // @ts-expect-error - We want to test browser compatibility
            global.Buffer = undefined;
        });

        afterAll(() => {
            global.Buffer = tmpBuffer;
        });

        it('Should encode', () => {
            // Given
            // @ts-expect-error - We want to test browser compatibility
            global.Buffer = undefined;
            const input = createSimpleTransformation();
            // When
            const result = Decoder.encode(input, TRANSFORM_KEY);
            // Then
            expect(result).toEqual('k51k9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB3gABoTAB');
        });

        it('Should fail to decode', () => { // TODO: Currently decode does not work in the browser. Ideally it should be Browser compatible.
            const encoded = 'k51k9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB3gABoTAB';

            expect(() => Decoder.decode(encoded, TRANSFORM_KEY)).toThrow(InternalError);
        });
    });
});
