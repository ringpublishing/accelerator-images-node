/* eslint-disable max-classes-per-file */

/**
 * General AcceleratorImage error
 */
export class AcceleratorImageError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AcceleratorImageError';
    }
}

/**
 * Thrown when an incorrect URL is provided.
 */
export class UrlError extends AcceleratorImageError {
    constructor(message: string) {
        super(message);
        this.name = 'UrlError: Incorrect URL';
    }
}

/**
 * Thrown when invalid parameters are provided.
 *
 * @rationale
 * This error indicated that the user provided invalid data. Either the data does not match the expected format or the data is not valid for the operation.
 */
export class InvalidParameter extends AcceleratorImageError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidParameter';
    }
}

/**
 * Thrown when an internal error occurs.
 *
 * @rationale This error indicates that something went wrong internally. This could be due to a bug in the code or an unexpected condition.
 */
export class InternalError extends AcceleratorImageError {
    constructor(message: string) {
        super(message);
        this.name = 'InternalError';
    }
}
