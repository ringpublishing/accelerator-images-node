import { LegacyImage } from '../src/LegacyImage';

describe('LegacyImage', () => {
    describe('S3 Parent - OCDN Bucket', () => {
        describe('OCDN Bucket', () => {
            const testUrl = 's3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg';
            const transformKey = 'abc';

            let url: LegacyImage;

            beforeEach(() => {
                url = new LegacyImage({ originalImageUrl: testUrl, transformationKey: transformKey });
            });

            beforeEach(() => {
                url.setBucket('test-bucket');
            });

            it('Should return URL to original', () => {
                expect(url.getUrl()).toEqual('s3://some-s3-bucket/images/d5b8348d9bbfce94534d66db1f330f44.jpg');
            });

            it('Should return URL with transforms', () => {
                url.setName('abc.jpg');

                expect(url.getTransforms()).toEqual([ [ 9, '75639d', 6 ] ]);
                expect(url.getUrl()).toEqual('https://ocdn.eu/test-bucket-transforms/1/6Pdktk_czM6Ly9zb21lLXMzLWJ1Y2tldC9pbWFnZXMvZDViODM0OGQ5YmJmY2U5NDUzNGQ2NmRiMWYzMzBmNDQuanBnkZMJpjc1NjM5ZAY/abc.jpg');
            });

            it('Should parse URL', () => {
                // Given
                url.resize(10, 10);
                url.rotate(1);
                url.grayscale();
                const transformUrl = url.getUrl();

                // When
                const urlRev = LegacyImage.fromTransformationUrl(transformUrl, transformKey);

                // Then
                expect(urlRev.getParent().getUrl()).toEqual(testUrl);
            });
        });
    });
});
