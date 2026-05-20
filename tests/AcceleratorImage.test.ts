import { AcceleratorImage } from '../src/AcceleratorImage';

const TRANSFORM_KEY = 'abc';

describe('AcceleratorImage', () => {
    describe('Constructor', () => {
        it('[TC-15] Should throw error when URL with incorrect signature is passed', () => {
            const testUrl = 'https://images.example.com/1/k9kpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5naWaQgaEywg==';

            expect(() => {
                AcceleratorImage.fromTransformationUrl(testUrl, TRANSFORM_KEY);
            }).toThrow('Invalid signature');
        });

        it('[TC-02] Should return original when no key is passed', () => {
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

        it('[TC-03] Should return placeholder when no key and no original is passed', () => {
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

        it('[TC-13] Should parse a transformation URL and restore the original URL', () => {
            // Given
            const transformedImageUrl = 'https://images.example.com/1/kd7ktkpTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5qcGeRlQfZMS9wdWxjbXMvTURBXy84ODBjZjYwNGM1MzgwZDdlY2JmMDdmMGE5MzFjMDY3Ni5qcGcBwgo';
            // When
            const newImage = AcceleratorImage.fromTransformationUrl(transformedImageUrl, TRANSFORM_KEY);
            // Then
            expect(newImage.getUrl()).toBe(transformedImageUrl);
        });

        it('[TC-01] Should return original URL unchanged when no transforms are applied', () => {
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

        it('[TC-13] Should allow adding transforms after fromTransformationUrl decode', () => {
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

        it('[TC-04] Should return URL to original', () => {
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

        it('[TC-07a] Should return URL without protocol when transforms are applied', () => {
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

        it('[TC-01/TC-07] Should not strip protocol when returned value is the original image URL (no transforms)', () => {
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

        it('[TC-01] Should return original http URL unchanged when no transforms are set', () => {
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

        it('[TC-09] Should force HTTPS by default for transformations', () => {
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

        it('[TC-08] Should return HTTP for transformation when explicitly forced', () => {
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

        it('[TC-17] Should raise exception if any other transform is defined with metadata.', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: ORIGINAL_IMAGE,
                transformationKey: TRANSFORM_KEY,
                transformationHost: TRANSFORMATIONS_HOST
            });
            // When
            const withoutProtocol = image.rotate(1);
            withoutProtocol.metadata('exif');
            // Then
            expect(() => withoutProtocol.getUrl()).toThrow('Cannot use metadata transformation with other transformations. Use it as the only transformation.');
        });

        it('[TC-16a] Should return cloned object that is distinct but equal', () => {
            // Given
            const clone = acceleratorImage.clone();
            // Then
            expect(clone).not.toBe(acceleratorImage);
            expect(clone.getUrl()).toBe(acceleratorImage.getUrl());
        });

        it('[TC-16b] Should not mutate original when transforms applied to clone', () => {
            // Given
            const clone = acceleratorImage.clone();
            // When
            clone
                .blur(10)
                .rotate(2)
                .resize(100, 100);
            // Then
            expect(acceleratorImage.getTransforms()).toEqual([]);
            expect(acceleratorImage.getUrl()).toBe(ORIGINAL_IMAGE);
            expect(clone).not.toBe(acceleratorImage);
            expect(clone.getTransforms()).toEqual([[1, 10], [0, 2], [2, 100, 100, true, true]]);
            expect(clone.getUrl()).toBe('https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD');
            expect(clone.getUrl()).not.toBe(acceleratorImage.getUrl());
        });

        it('[TC-16c] Should not mutate already-transformed original when transforms applied to its clone', () => {
            // Given
            const transformedImage = acceleratorImage
                .blur(10)
                .rotate(2)
                .resize(100, 100);

            const clone = transformedImage.clone();
            // When
            clone
                .blur(10)
                .rotate(2)
                .resize(100, 100);
            // Then
            expect(transformedImage.getTransforms()).toEqual([[1, 10], [0, 2], [2, 100, 100, true, true]]);
            expect(transformedImage.getUrl()).toBe('https://images.example.com/1/naHktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeTkgEKkgAClQJkZMPD');
            expect(clone).not.toBe(transformedImage);
            expect(clone.getTransforms()).toEqual([[1, 10], [0, 2], [2, 100, 100, true, true], [1, 10], [0, 2], [2, 100, 100, true, true]]);
            expect(clone.getUrl()).toBe('https://images.example.com/1/slkktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeWkgEKkgAClQJkZMPDkgEKkgAClQJkZMPD');
            expect(clone.getUrl()).not.toBe(transformedImage.getUrl());
        });
    });

    describe('relative', () => {
        it('[TC-06] Should return relative URL for transforms', () => {
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

        it('[TC-01] Should return original URL unchanged when relative() is set but no transforms applied', () => {
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
        it('[TC-18] Should return correct parent for external', () => {
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

        it('[TC-01] Should return external URL unchanged when no transforms are applied', () => {
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

        it('[TC-12] Should return URL to transformation', () => {
            // When
            image.setName('abc.jpg');
            // Then
            expect(image.getUrl()).toEqual('https://images.example.com/1/a27ktkraHR0cHM6Ly9leHRlcm5hbC5kb21haW4uY29tL3BhdGgvaW1hZ2UuanBlZ5GTCaY3NTYzOWQG/abc.jpg');
        });

        it('[TC-13] Should parse custom domain URL', () => {
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

    describe('Error conditions', () => {
        it('[TC-26] Should throw when transformationKey is null and transforms are set', () => {
            // Given
            const image = new AcceleratorImage({
                originalImageUrl: 'https://images.example.com/originals/kitten.png',
                transformationKey: null,
                transformationHost: 'images.example.com'
            });
            image.rotate(1);
            // Then
            expect(() => image.getUrl()).toThrow('Transformation key is required when using transformations or parameters');
        });
    });

    describe('TC-25: animation parameter encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode animation(false) into getParameters()', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.animation(false);
            expect(image.getParameters()).toEqual({ 2: false });
        });

        it('Should encode animation(true) into getParameters()', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.animation(true);
            expect(image.getParameters()).toEqual({ 2: true });
        });
    });

    describe('TC-26: autoOrient parameter encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode autoOrient(true) into getParameters()', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.autoOrient(true);
            expect(image.getParameters()).toEqual({ 3: true });
        });

        it('Should encode autoOrient(false) into getParameters()', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.autoOrient(false);
            expect(image.getParameters()).toEqual({ 3: false });
        });
    });

    describe('TC-27: keepAspectRatio encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode keepAspectRatio with default arguments', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.keepAspectRatio(800, 600);
            expect(image.getTransforms()).toEqual([[10, 800, 600, 10, 0, 0, 0, 175, 0, 0]]);
            expect(image.getUrl()).toEqual('https://images.example.com/1/d_sktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRmgrNAyDNAlgKAAAAzK8AAA');
        });

        it('Should encode keepAspectRatio with non-default arguments', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.keepAspectRatio(800, 600, 20, 255, 0, 0, 200, 10, 5);
            expect(image.getTransforms()).toEqual([[10, 800, 600, 20, 255, 0, 0, 200, 10, 5]]);
            expect(image.getUrl()).toEqual('https://images.example.com/1/TJCktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRmgrNAyDNAlgUzP8AAMzICgU');
        });
    });

    describe('TC-28: resizeCropAuto encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode resizeCropAuto(400, 300)', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.resizeCropAuto(400, 300);
            expect(image.getTransforms()).toEqual([[5, 400, 300]]);
            expect(image.getUrl()).toEqual('https://images.example.com/1/7zvktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkwXNAZDNASw');
        });
    });

    describe('TC-29: setBackground encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode setBackground with default alpha', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.setBackground(255, 0, 128);
            expect(image.getTransforms()).toEqual([[6, 255, 0, 128, 255]]);
            expect(image.getUrl()).toEqual('https://images.example.com/1/EZ-ktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRlQbM_wDMgMz_');
        });
    });

    describe('TC-30: setFocalPoint encoding', () => {
        const ORIG = 'https://images.example.com/originals/kitten.png';
        const HOST = 'images.example.com';

        it('Should encode setFocalPoint(100, 200)', () => {
            const image = new AcceleratorImage({ originalImageUrl: ORIG, transformationKey: TRANSFORM_KEY, transformationHost: HOST });
            image.setFocalPoint(100, 200);
            expect(image.getTransforms()).toEqual([[12, 100, 200]]);
            expect(image.getUrl()).toEqual('https://images.example.com/1/dWaktkvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkwxkzMg');
        });
    });

    describe('TC-31: relative(true) takes precedence over forceHttpProtocol()', () => {
        it('Should produce a path-only URL even when forceHttpProtocol() was called', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'http://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.rotate(1).forceHttpProtocol().relative(true);
            const url = image.getUrl();
            expect(url.startsWith('/1/')).toBeTruthy();
            expect(url).toBe('/1/dW8ktkuaHR0cDovL2ltYWdlcy5leGFtcGxlLmNvbS9vcmlnaW5hbHMva2l0dGVuLnBuZ5GSAAE');
        });

        it('Should also produce a path-only URL when relative(true) is called before forceHttpProtocol()', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'http://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.rotate(1).relative(true).forceHttpProtocol();
            const url = image.getUrl();
            expect(url.startsWith('/1/')).toBeTruthy();
            expect(url).toBe('/1/dW8ktkuaHR0cDovL2ltYWdlcy5leGFtcGxlLmNvbS9vcmlnaW5hbHMva2l0dGVuLnBuZ5GSAAE');
        });
    });

    describe('TC-32: extractDominantColor parameter', () => {
        it('Should encode extractDominantColor in the URL', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'https://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.extractDominantColor();
            expect(image.getParameters()).toEqual({ 5: true });
            expect(image.getUrl()).toBe(
                'https://images.example.com/1/Cx8k9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeQ3gABoTXD'
            );
        });
    });

    describe('TC-33: extractDominantColor + extractDimensions', () => {
        it('Should encode both extraction params in the URL', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'https://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.extractDominantColor();
            image.extractDimensions();
            expect(image.getParameters()).toEqual({ 5: true, 6: true });
            expect(image.getUrl()).toBe(
                'https://images.example.com/1/JHdk9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeQ3gACoTXDoTbD'
            );
        });
    });

    describe('TC-34: extractDominantColor + metadata transform', () => {
        it('Should encode extractDominantColor param together with metadata transform', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'https://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.extractDominantColor();
            image.metadata('basic');
            expect(image.getParameters()).toEqual({ 5: true });
            expect(image.getTransforms()).toEqual([[11, 0]]);
            expect(image.getUrl()).toBe(
                'https://images.example.com/1/eCbk9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRkgsA3gABoTXD'
            );
        });
    });

    describe('TC-35: resize + extractDominantColor + extractDimensions', () => {
        it('Should encode extraction params alongside resize transform', () => {
            const image = new AcceleratorImage({
                originalImageUrl: 'https://images.example.com/originals/kitten.png',
                transformationKey: TRANSFORM_KEY,
                transformationHost: 'images.example.com'
            });
            image.resize(800, 600);
            image.extractDominantColor();
            image.extractDimensions();
            expect(image.getParameters()).toEqual({ 5: true, 6: true });
            expect(image.getTransforms()).toEqual([[2, 800, 600, true, true]]);
            expect(image.getUrl()).toBe(
                'https://images.example.com/1/UTfk9kvaHR0cHM6Ly9pbWFnZXMuZXhhbXBsZS5jb20vb3JpZ2luYWxzL2tpdHRlbi5wbmeRlQLNAyDNAljDw94AAqE1w6E2ww'
            );
        });
    });
});
