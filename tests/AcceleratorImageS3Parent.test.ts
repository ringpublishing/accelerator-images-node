import { AcceleratorImage } from '../src/AcceleratorImage';

describe('AcceleratorImage - S3 Parent', () => {
    const testUrl = 's3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg';
    const transformKey = 'abc';

    describe('Custom domain', () => {
        let url: AcceleratorImage;
        beforeEach(() => {
            url = new AcceleratorImage({
                originalImageUrl: testUrl,
                transformationKey: transformKey,
                transformationHost: 'img.example.com'
            });
        });

        it('Should return URL to original', () => {
            expect(url.getUrl()).toEqual('s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg');
        });

        it('Should return URL with transforms', () => {
            url.setName('abc.jpg');
            expect(url.getUrl()).toEqual('https://img.example.com/1/6Pdktk_czM6Ly9zb21lLXMzLWJ1Y2tldC9pbWFnZXMvZDViODM0OGQ5YmJmY2U5NDUzNGQ2NmRiMWYzMzBmNDQuanBnkZMJpjc1NjM5ZAY/abc.jpg');
        });

        it('Should parse using fromTransformationUrl', () => {
            // Given
            url.resize(10, 10);
            url.rotate(1);
            url.grayscale();
            const transformUrl = url.getUrl();
            // When
            const urlRev = AcceleratorImage.fromTransformationUrl(transformUrl, transformKey);
            // Then
            expect(urlRev.getParent().getUrl()).toEqual(testUrl);
            expect(urlRev.getTransforms()).toEqual([ [ 2, 10, 10, true, true ], [0, 1], [4] ]);
            expect(urlRev.getResize()).toEqual([10, 10, true, true]);
        });

        it('Should preserve parent URL', () => {
            // Given
            url.resize(10, 10);
            url.rotate(1);
            url.grayscale();
            const transformUrl = url.getUrl();
            // When
            const urlRev = AcceleratorImage.fromTransformationUrl(transformUrl, transformKey);
            // Then
            expect(urlRev.getUrl()).toEqual(transformUrl);
            expect(urlRev.getParent().getUrl()).toEqual(testUrl);
        });
    });
});
