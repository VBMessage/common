export class HttpError extends Error {
    public httpCode: number;

    constructor(httpCode: number, message?: string) {
        super(message);

        this.httpCode = httpCode;
    }
}

export class ExtendedHttpError extends HttpError {
    public errors?: any[];

    constructor(httpCode: number, message?: string) {
        super(httpCode, message);
    }
}
