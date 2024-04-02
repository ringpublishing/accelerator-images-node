import { AcceleratorImage } from '../src/AcceleratorImage';

const TRANSFORM_KEY = 'abc';

describe('AcceleratorImage', () => {
    describe('Constructor', () => {
        it('Should throw error when URL with incorrect signature is passed', () => {
            const testUrl = 'https://images.example.com/1/k9kpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5naWaQgaEywg==';

            expect(() => {
                AcceleratorImage.fromTransformationUrl(testUrl, TRANSFORM_KEY);
            }).toThrow('Invalid signature');
        });

        it('Should return original when no key is passed', () => {
            // Given
            const original = 'https://images.example.com/originals/kitten.png';
            // When
            const image = new AcceleratorImage({
                originalImageUrl: original,
                transformationKey: null,
                transformationHost: 'images.example.com'
            });
            // Then
            expect(image.getUrl()).toEqual(original);
        });

        it('Should return placeholder when no key and no original is passed', () => {
            // When
            const image = new AcceleratorImage({});
            // Then
            expect(image.toString()).toEqual('[Uninitialized AcceleratorImage object]');
            expect((): string => image.getUrl()).toThrow('Instance of AcceleratorImage is not initialized');
        });
    });

    describe('parse', () => {
        let acceleratorImage: AcceleratorImage;
        const ORIGINAL_IMAGE = 'https://images.example.com/originals/kitten.png';
        const ORIGINAL_IMAGE_WITHOUT_TLS = ORIGINAL_IMAGE.replace('https:', 'http:');
        const TRANSFORMATIONS_HOST = 'images.example.com';

        beforeEach(() => {
            acceleratorImage = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
        });

        it('Should parse a new url', () => {
            // Given
            const transformedImageUrl = 'https://images.example.com/1/kd7ktkpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5qcGeRlQfZMS9wdWxjbXMvTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5qcGcBwgo';
            // When
            const newImage = AcceleratorImage.fromTransformationUrl(transformedImageUrl, TRANSFORM_KEY);
            // Then
            expect(newImage.getUrl()).toBe(transformedImageUrl);
        });

        it('Should return original when original is parsed', () => {
            expect(acceleratorImage.getUrl()).toBe(ORIGINAL_IMAGE);
        });

        // it('Should return original when original is parsed and replace http with https', () => {
        //     const original = 'http://example.com/path/image.jpeg';
        //     expect(
        //         new AcceleratorImage({
        //             originalImageUrl: original,
        //             transformationKey: TRANSFORM_KEY
        //         }).toString()
        //     ).toBe(original.replace('http:', 'https:'));
        // });

        it('Should add transforms', () => {
            // Given
            const transformedImageUrl = 'https://images.example.com/1/DAdktkpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5qcGeRkgAB';

            const image = AcceleratorImage.fromTransformationUrl(transformedImageUrl, TRANSFORM_KEY);
            expect(image.getTransforms()).toEqual([[0, 1]]);
            expect(image.getParameters()).toEqual({});

            // When
            image.grayscale();

            // Then
            expect(image.getTransforms()).toEqual([[0, 1], [4]]);
            expect(image.getParameters()).toEqual({});
            expect(image.getUrl()).not.toBe(transformedImageUrl);
        });

        it('Should return URL to original', () => {
            // Given
            const transformedImageUrl = acceleratorImage
                .blur(10)
                .rotate(2)
                .resize(100, 100)
                .toString();

            expect(acceleratorImage.getTransforms()).toEqual([[1, 10], [0, 2], [2, 100, 100, true, true]]);
            expect(acceleratorImage.getParameters()).toEqual({});
            expect(acceleratorImage.getUrl()).toEqual('https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD');
            // When
            const parent = AcceleratorImage.fromTransformationUrl(transformedImageUrl, TRANSFORM_KEY).getParent();
            // Then
            expect(parent.getUrl()).toBe(ORIGINAL_IMAGE);
        });

        it('Should return URL without protocol', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const withoutProtocol = image.rotate(1).withoutProtocol();
            // Then
            expect(withoutProtocol.getUrl()).toBe('//images.example.com/1/a6SktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgAB');
        });

        it('Should not return without protocol when returned value is the original image URL', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const withoutProtocol = image.withoutProtocol();
            // Then
            expect(withoutProtocol.getUrl()).toBe(ORIGINAL_IMAGE);
        });

        it('Should return HTTP when explicitly forced', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE_WITHOUT_TLS,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const url = image.forceHttpProtocol().getUrl();
            // Then
            expect(url).toBe(ORIGINAL_IMAGE_WITHOUT_TLS);
        });

        it('Should force HTTPS by default for transformations', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE_WITHOUT_TLS,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const url = image.rotate(1).getUrl();
            // Then
            expect(url.startsWith('https://')).toBeTruthy();
        });

        it('Should return HTTP for transformation when explicitly forced', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE_WITHOUT_TLS,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const url = image.rotate(1).forceHttpProtocol().getUrl();
            // Then
            expect(url.startsWith('http://')).toBeTruthy();
        });
    });

    describe('relative', () => {
        it('Should return relative URL for transforms', () => {
            // Given
            const img = new AcceleratorImage({
                originalImageUrl: 'http://images.example.com/my-bucket/img.jpg',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'optimized.images.example.com'
            });
            img.rotate(1).imageFormat('webp').relative();
            // When
            const transformedImageUrl = img.getUrl();
            // Then
            expect(img.getTransforms()).toEqual([[0, 1]]);
            expect(img.getParameters()).toEqual({ 0: 5 });
            expect(transformedImageUrl).toEqual('/1/i6Ik9kraHR0cDovL2ltYWdlcy5leGFtcGxlLmNvbS9teS1idWNrZXQvaW1nLmpwZ5GSAAHeAAGhMAU');
        });

        it('Should return relative URL for original', () => {
            // Given
            const originalImageUrl = 'http://images.example.com/static/img.jpg';
            const img = new AcceleratorImage({
                originalImageUrl,
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'optimized.images.example.com'
            });
            // When
            const transformedImageUrl = img.relative().getUrl();
            // Then
            expect(transformedImageUrl).toBe(originalImageUrl);
        });
    });

    describe('getParent', () => {
        it('Should return correct parent for external', () => {
            // Given
            const external = 'http://my.test.domain.pl/img.jpg';
            const img = new AcceleratorImage({
                originalImageUrl: external,
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            // When
            const parent = img.getParent();
            // Then
            expect(parent.getUrl()).toBe(external);
        });
    });

    describe('Custom domain', () => {
        let image: AcceleratorImage;

        beforeEach(() => {
            image = new AcceleratorImage({
                originalImageUrl: 'https://external.domain.com/path/image.jpeg',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
        });

        it('Should return URL to original', () => {
            // Given
            const originalPath = '/path/image.jpeg';
            const externalUrl = `https://external.domain.com${originalPath}`;
            const customDomain = 'images.example.com';
            // When
            const image = new AcceleratorImage({
                originalImageUrl: externalUrl,
                transformationKey: TRANSFORM_KEY,
                transformationHost: customDomain
            });
            // Then
            const url = image.getUrl();
            expect(url).toEqual(externalUrl);
        });

        it('Should return URL to transformation', () => {
            // When
            image.setName('abc.jpg');
            // Then
            expect(image.getUrl()).toEqual('https://images.example.com/1/a27ktkraHR0cHM6Ly9leHRlcm5hbC5kb21haW4uY29tL3BhdGgvaW1hZ2UuanBlZ5GTCaY3NTYzOWQG/abc.jpg');
        });

        it('Should parse custom domain URL', () => {
            // Given
            image.resize(10, 10);
            image.rotate(1);
            image.grayscale();
            const transformUrl = image.getUrl();
            // When
            const otherImage = AcceleratorImage.fromTransformationUrl(transformUrl, TRANSFORM_KEY);
            // Then
            expect(otherImage.getParent().getUrl()).toEqual('https://external.domain.com/path/image.jpeg');
        });
    });
});
