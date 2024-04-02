import { md5 } from '../../src/utils/crypto';

describe('crypto browser', () => {
    describe('md5', () => {
        it('should compute md5 hash', () => {
            // Given
            const text = 'hello world';
            const expected = '5eb63bbbe01eeed093cb22bb8f5acdc3'; // $ printf "hello world" |  openssl dgst -md5
            // When
            const hash = md5(text);
            // Then
            expect(hash).toBe(expected);
        });

        it('should compute md5 hash in base64', () => {
            // Given
            const text = 'hello world';
            const expected = 'XrY7u+Ae7tCTyyK7j1rNww=='; // $ printf "hello world" |  openssl dgst -md5 -binary | openssl enc -base64
            // When
            const hash = md5(text, 'base64');
            // Then
            expect(hash).toBe(expected);
        });
    });
});
