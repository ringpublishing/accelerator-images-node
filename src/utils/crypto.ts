import browserSafeMd5 from 'crypto-js/md5';
import browserSafeBase64 from 'crypto-js/enc-base64';

export function md5(str: string, digest?: 'hex' | 'base64'): string {
    const encoder = digest === 'base64' ? browserSafeBase64 : undefined;

    return browserSafeMd5(str).toString(encoder);
}
