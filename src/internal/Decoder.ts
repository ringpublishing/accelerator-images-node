import { AcceleratorImageError, InternalError } from '../errors';
import { md5 } from '../utils/crypto';
import { unpack, pack } from 'msgpackr';
import { EncodedParameter } from './transforms/schema';

export type RawTransformData = [string, EncodedParameter[][], Record<number, EncodedParameter>];
export type OptionalRawTransformData = [string | undefined, EncodedParameter[][] | undefined, Record<number, EncodedParameter> | undefined];

export class Decoder {
    /**
     * Encodes Accelerator Image transformation data into a string
     *
     * @param objectDataArray
     * @param key
     */
    public static encode(objectDataArray: RawTransformData, key: string): string {
        if (Object.keys(objectDataArray[2]).length === 0) {
            objectDataArray.pop();
        }

        const encodedData = pack(objectDataArray);

        let encodedDataBase64;

        if (global?.Buffer && Buffer.isBuffer(encodedData)) {
            encodedDataBase64 = encodedData
                .toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
        } else if (global?.Buffer && typeof Buffer?.from !== 'undefined') {
            encodedDataBase64 = Buffer.from(encodedData)
                .toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
        } else if (typeof btoa !== 'undefined') {
            encodedDataBase64 = btoa(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                String.fromCharCode.apply(null, encodedData as any as number[]))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
        } else {
            encodedDataBase64 = encodedData;
        }

        const base64Hash = md5(`${encodedDataBase64}/${key}`, 'base64');
        const signature = base64Hash.slice(0, 3).replace(/\+/g, '-').replace(/\//g, '_');

        return signature + encodedDataBase64;
    }

    /**
     * Decodes Accelerator Image transformation data from a string into an array of objects
     *
     * @param encodedTransformation
     * @param transformationKey
     *
     * @remarks
     * This method is not safe to use in a browser environment as it relies on Node.js buffer.
     *
     * Expects the path to be in the following format: /version/encodedTransform
     *
     * @throws {AcceleratorImageError} when the signature is invalid
     */
    public static decode(encodedTransformation: string, transformationKey: string): OptionalRawTransformData {
        Decoder.checkSignature(encodedTransformation, transformationKey);

        const dataString = encodedTransformation.slice(3); // remove signature

        if (!Buffer) {
            throw new InternalError('Buffer class is not available in the current environment');
        }

        const unpacked = unpack(
            Buffer.from(
                dataString
                    .replace(/-/g, '+')
                    .replace(/_/g, '/'),
                'base64')
        );

        const [url, transforms, params] = unpacked as OptionalRawTransformData;

        return [url, transforms, params];
    }

    private static checkSignature(encodedTransformationToVerify: string, transformKey: string): void {
        const dataString = encodedTransformationToVerify.slice(3);
        const signature = encodedTransformationToVerify.slice(0, 3);

        const data = `${dataString}/${transformKey}`;
        const calculated = md5(data, 'base64').slice(0, 3);

        if (calculated !== signature) {
            throw new AcceleratorImageError('Invalid signature');
        }
    }
}
