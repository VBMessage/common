import { HttpError } from '../../types';

type ErrorResponse = {
    success: boolean;
    message: string;
    statusCode: number;
    stack?: string;
    cause?: Error;
};

export class RestError extends HttpError {
    public errors: any[] = [];

    constructor(
        message: string,
        public readonly statusCode = 500,
        public readonly cause: Error | undefined = undefined
    ) {
        super(statusCode, message);

        Error.captureStackTrace(this, RestError);
    }

    toResponse(): ErrorResponse {
        return {
            success: false,
            message: this.message,
            statusCode: this.statusCode,
            stack: process.env.NODE_ENV === 'development' ? this.stack : undefined,
            cause: process.env.NODE_ENV === 'development' ? this.cause : undefined
        };
    }
}

export class BadRequestError extends RestError {
    constructor(message = 'Bad request', cause: Error | undefined = undefined) {
        super(message, 400, cause);
    }
}

export class UnauthorizedError extends RestError {
    constructor(message = 'Unauthorized', cause: Error | undefined = undefined) {
        super(message, 401, cause);
    }
}

export class ForbiddenError extends RestError {
    constructor(message = 'Forbidden', cause: Error | undefined = undefined) {
        super(message, 403, cause);
    }
}

export class NotFoundError extends RestError {
    constructor(message = 'Not found', cause: Error | undefined = undefined) {
        super(message, 404, cause);
    }
}

export class PreconditionFailedError extends RestError {
    constructor(message = 'Precondition failed', cause: Error | undefined = undefined) {
        super(message, 412, cause);
    }
}

export class InternalServerError extends RestError {
    constructor(message = 'Internal server error', cause: Error | undefined = undefined) {
        super(message, 500, cause);
    }
}

export class NotImplementedError extends RestError {
    constructor(message = 'Not implemented', cause: Error | undefined = undefined) {
        super(message, 501, cause);
    }
}
