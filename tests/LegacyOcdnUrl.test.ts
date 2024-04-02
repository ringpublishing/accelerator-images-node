import { LegacyImage } from '../src/LegacyImage';

describe.skip('OCDN URL', () => {
    let url: LegacyImage;
    const TRANSFORM_KEY = 'abc';

    beforeEach(() => {
        url = new LegacyImage({ originalImageUrl: 'http://ocdn.eu/images/pulscms/NTc7MDA_/dc854e2d0993a5402fb15d1fa19f118b.png', transformationKey: TRANSFORM_KEY });
    });

    describe('Deprecated - when it fails, it fails', () => {
        it('Creation return original OCDN 2.0 url', () => {
            url = new LegacyImage({ originalImageUrl: 'http://ocdn.eu/images/pulscms/NTc7MDA_/dc854e2d0993a5402fb15d1fa19f118b.png', transformationKey: TRANSFORM_KEY });
            expect(url.toString()).toEqual('https://ocdn.eu/images/pulscms/NTc7MDA_/dc854e2d0993a5402fb15d1fa19f118b.png');
        });
    });

    describe('BREAKING compared with dl-ocdn', () => {
        it('Should NOT return path for transformation even when no transformations are set (do not respect dl-ocdn OLD_PLUGINS)', () => {
            const img = new LegacyImage({ originalImageUrl: 'http://ocdn.eu/images/pulscms/ZDk7MDYsMWUwLDEwZQ__/775b23a1f11bbb99f34ab109db414019.jpg', transformationKey: TRANSFORM_KEY });

            expect(img.getUrl()).toEqual('https://ocdn.eu/images/pulscms/ZDk7MDYsMWUwLDEwZQ__/775b23a1f11bbb99f34ab109db414019.jpg');
            expect(img.getTransforms()).toEqual([]);

            // What would dl-ocdn return?
            expect(img.getTransforms()).not.toEqual([ [ 5, 480, 270 ] ]);
        });
    });

    describe('OCDN', () => {
        const originalImageUrl = 'http://ocdn.eu/accelerator/path/image.jpg';

        it('Should return URL to original', () => {
            const img = new LegacyImage({ originalImageUrl, transformationKey: TRANSFORM_KEY });
            expect(img.getUrl()).toEqual(originalImageUrl);
        });

        it('Should encode transformation in ocdn.eu format (include bucket in path)', () => {
            // Given
            const image = new LegacyImage({ originalImageUrl, transformationKey: TRANSFORM_KEY });
            image.resize(480, 270);
            image.rotate(1);
            image.grayscale();
            // When
            const url = image.getUrl();
            // Then
            expect(url).toEqual('https://ocdn.eu/accelerator-transforms/1/Xdnkq5wYXRoL2ltYWdlLmpwZ5OVAs0B4M0BDsPDkgABkQQ');
        });

        it('Should encode transformation in ocdn.eu format (include bucket in path) and return relative path', () => {
            // Given
            const image = new LegacyImage({ originalImageUrl, transformationKey: TRANSFORM_KEY });
            image.resize(480, 270);
            image.rotate(1);
            image.grayscale();
            image.relative();
            // When
            const url = image.getUrl();
            // Then
            expect(url).toEqual('/accelerator-transforms/1/Xdnkq5wYXRoL2ltYWdlLmpwZ5OVAs0B4M0BDsPDkgABkQQ');
        });

        it('Should parse URL', () => {
            // Given
            const image = new LegacyImage({ originalImageUrl, transformationKey: TRANSFORM_KEY });
            image.resize(480, 270);
            image.rotate(1);
            image.grayscale();
            const transformedUrl = image.getUrl();
            // When
            const imageRev = LegacyImage.fromTransformationUrl(transformedUrl, TRANSFORM_KEY);
            // Then
            expect(imageRev.getTransforms()).toEqual([[2, 480, 270, true, true], [0, 1], [4]]);
            expect(imageRev.getUrl()).toEqual(transformedUrl);
            expect(imageRev.getParent().getUrl()).toEqual(originalImageUrl);
        });

        describe('OCDN with custom domain', () => {
            const customDomain = 'img.example.com';
            const originalImageUrl = 'http://ocdn.eu/accelerator/path/image.jpg';

            it('Should return URL to original for parent', () => {
                const img = new LegacyImage({
                    originalImageUrl,
                    transformationKey: TRANSFORM_KEY
                });
                expect(img.getParent().getUrl()).toEqual(originalImageUrl);
                expect(img.getUrl()).toEqual(originalImageUrl);
            });

            it('Should encode transformation in custom domain format', () => {
                // Given
                const image = new LegacyImage({
                    originalImageUrl,
                    transformationKey: TRANSFORM_KEY
                });
                image.resize(480, 270);
                image.rotate(1);
                image.grayscale();
                image.setName('image.jpg');
                // When
                const url = image.getUrl();
                // Then
                expect(url).toEqual(`https://${customDomain}/1/YziktkkaHR0cDovL2FjY2VsZXJhdG9yLmV1L3BhdGgvaW1hZ2UuanBnlJUCzQHgzQEOw8OSAAGRBJMJpjBkNWIxYwY/image.jpg`);
            });
        });
    });
});
