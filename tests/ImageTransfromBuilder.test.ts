import { ImageFormat, ImageQuality, ImageTransformBuilder } from '../src/ImageTransformBuilder';

describe('ImageTransformsBuilder', () => {
    describe('constructor', () => {
        it('should create new ImageTransformsBuilder', () => {
            // When
            const result = new ImageTransformBuilder();
            // Then
            expect(result).toBeInstanceOf(ImageTransformBuilder);
        });
    });

    describe('Parameters', () => {
        describe('imageFormat', () => {
            it('should set image format', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.imageFormat('jpeg');
                // Then
                expect(result.getParameters()).toEqual({ 0: 1 });
                expect(result.getImageFormat()).toEqual('jpeg');
            });

            it('Should throw error when unknown imageFormat', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const setImageFormat = (): ImageTransformBuilder => builder.imageFormat('aaa' as ImageFormat);
                // Then
                expect(setImageFormat).toThrow('Cannot encode value of "aaa" for parameter imageFormat');
            });
        });

        describe('imageQuality', () => {
            it('should set image quality', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.imageQuality('high');
                // Then
                expect(result.getParameters()).toEqual({ 1: 2 });
                expect(result.getImageQuality()).toEqual('high');
            });

            it('should set default image quality', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.imageQuality();
                // Then
                expect(result.getParameters()).toEqual({ 1: 1 });
                expect(result.getImageQuality()).toEqual('medium');
            });

            it('should throw error when imageQuality is not within limits', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const setImageQuality = (): ImageTransformBuilder => builder.imageQuality('xyz' as ImageQuality);
                // Then
                expect(setImageQuality).toThrow('Cannot encode value of "xyz" for parameter imageQuality');
            });
        });

        describe('animation', () => {
            it('should set animation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.animation(false);
                // Then
                expect(result.getParameters()).toEqual({ 2: false });
                expect(result.getAnimation()).toEqual(false);
            });
        });

        describe('autoOrient', () => {
            it('should set autoOrient', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.autoOrient(true);
                // Then
                expect(result.getParameters()).toEqual({ 3: true });
                expect(result.getAutoOrient()).toEqual(true);
            });
        });
    });

    describe('Transforms', () => {
        describe('rotate', () => {
            it('should set rotate transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.rotate(1);
                // Then
                expect(result.getTransforms()).toEqual([[0, 1]]);
                expect(result.getRotate()).toEqual([1]);
            });

            it('getRotate should return undefined when transformation is not set', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.getRotate();
                // Then
                expect(result).toBeUndefined();
            });
        });

        describe('blur', () => {
            it('should set blur transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.blur(5);
                // Then
                expect(builder.getTransforms()).toEqual([[1, 5]]);
                expect(builder.getBlur()).toEqual([5]);
            });

            it('should throw error when blur power is greater than max allowed value', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const setBlur = (): ImageTransformBuilder => builder.blur(1683);
                // Then
                expect(setBlur).toThrow('Value must be less than 100');
            });
        });

        describe('resize', () => {
            it('should set resize transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.resize(100, 100, true, false);
                // Then
                expect(builder.getTransforms()).toEqual([[2, 100, 100, true, false]]);
                expect(builder.getResize()).toEqual([100, 100, true, false]);
            });

            it('should set default values', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.resize(100, 100);
                // Then
                expect(builder.getTransforms()).toEqual([[2, 100, 100, true, true]]);
            });
        });

        describe('crop', () => {
            it('should set crop transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.crop(100, 100, 200, 200);
                // Then
                expect(builder.getTransforms()).toEqual([[3, 100, 100, 200, 200]]);
                expect(builder.getCrop()).toEqual([100, 100, 200, 200]);
            });

            it('should throw error when crop values are less than 0', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const setCrop = (): ImageTransformBuilder => builder.crop(-100, 100, 200, 200);
                // Then
                expect(setCrop).toThrow('Value must be greater than 0');
            });
        });

        describe('grayscale', () => {
            it('should set grayscale transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.grayscale();
                // Then
                expect(result.getTransforms()).toEqual([[4]]);
                expect(result.getGrayscale()).toEqual([]);
            });
        });

        describe('resizeCropAuto', () => {
            it('should set resizeCropAuto transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const result = builder.resizeCropAuto(100, 100);
                // Then
                expect(result.getTransforms()).toEqual([[5, 100, 100]]);
                expect(builder.getResizeCropAuto()).toEqual([100, 100]);
            });
        });

        describe('setBackground', () => {
            it('should set setBackground transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.setBackground(100, 100, 100, 100);
                // Then
                expect(builder.getTransforms()).toEqual([[6, 100, 100, 100, 100]]);
                expect(builder.getSetBackground()).toEqual([100, 100, 100, 100]);
            });

            it('should throw error when background values are not within limits', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const setBackground = (): ImageTransformBuilder => builder.setBackground(256, 10, 10, 10);
                // Then
                expect(setBackground).toThrow('Value must be less than 255');
            });
        });

        describe('overlay', () => {
            it('should set overlay transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.overlay('https://example.com/img.png', 'stretch', true, 'xor');
                // Then
                expect(builder.getTransforms()).toEqual([[7, 'https://example.com/img.png', 0, true, 4 ]]);
                expect(builder.getOverlay()).toEqual(['https://example.com/img.png', 'stretch', true, 'xor']);
            });
        });

        describe('hash', () => {
            it('should set hash transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.hash('md5');
                // Then
                expect(builder.getTransforms()).toEqual([[8, 0]]);
                expect(builder.getHash()).toEqual(['md5']);
            });
        });

        describe('setName', () => {
            it('should set name transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.setName('example.png', 11);
                // Then
                expect(builder.getTransforms()).toEqual([[9, 'example.png', 11]]);
                expect(builder.getSetName()).toEqual(['example.png', 11]);
            });
        });

        describe('keepAspectRatio', () => {
            it('should set keepAspectRatio transformation', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.keepAspectRatio(500, 250, 50, 100, 100, 100, 100, 10, 10);
                // Then
                expect(builder.getTransforms()).toEqual([[10, 500, 250, 50, 100, 100, 100, 100, 10, 10]]);
                expect(builder.getKeepAspectRatio()).toEqual([500, 250, 50, 100, 100, 100, 100, 10, 10]);
            });

            it('should set keepAspectRatio transformation with default values', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                builder.keepAspectRatio(500, 250, undefined, undefined, undefined, undefined, undefined, 10, 10);
                // Then
                expect(builder.getTransforms()).toEqual([[10, 500, 250, 10, 0, 0, 0, 175, 10, 10]]);
                expect(builder.getKeepAspectRatio()).toEqual([500, 250, 10, 0, 0, 0, 175, 10, 10]);
            });

            it('should throw error when keepAspectRatio values are not within limits', () => {
                // Given
                const builder = new ImageTransformBuilder();
                // When
                const keepAspectRatio = (): ImageTransformBuilder => builder.keepAspectRatio(500, 250, 50, 100, 100, 100, 100, 101, 100);
                // Then
                expect(keepAspectRatio).toThrow('Value must be less than 100');
            });
        });
    });
});
