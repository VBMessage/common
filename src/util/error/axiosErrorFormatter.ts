import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';


export const CONFIG_KEYS = [
    'url',
    'method',
    'baseURL',
    'headers',
    'params',
    'data',
    'timeout',
    'timeoutErrorMessage',
    'withCredentials',
    'auth',
    'responseType',
    'maxContentLength',
    'maxBodyLength',
    'maxRedirects',
    'socketPath',
    'proxy',
    'decompress'
] as const;

export const RESPONSE_KEYS = [
    'data',
    'status',
    'statusText',
    'headers'
] as const;

export interface AxiosErrorFormat<T = any> {
    config: Pick<AxiosRequestConfig, typeof CONFIG_KEYS[number]>;
    code?: string;
    response?: Pick<AxiosResponse<T>, typeof RESPONSE_KEYS[number]>;
    isAxiosError: boolean;
}

export interface AxiosErrorFormatError<T = any> extends Error, AxiosErrorFormat<T> {
}

export function formatAxiosError<E = any>(error: E): E extends AxiosError<infer T> ? AxiosErrorFormatError<T> : E {
    if (!isAxiosError(error)) {
        return error as any;
    }

    const formatError: Partial<AxiosErrorFormatError> = new Error(error.message);

    formatError.name = error.name;
    formatError.stack = error.stack;
    formatError.code = error.code;
    formatError.isAxiosError = error.isAxiosError;
    formatError.config = {};

    for (const configKey of CONFIG_KEYS) {
        if (error.config[configKey] !== undefined) {
            formatError.config[configKey] = configKey === 'data'
                ? formatData(error.config[configKey])
                : error.config[configKey];
        }
    }

    if (error.response) {
        formatError.response = {} as any;
        for (const responseKey of RESPONSE_KEYS) {
            if (error.response[responseKey] !== undefined) {
                (formatError.response as any)[responseKey] = responseKey === 'data'
                    ? formatData(error.response[responseKey])
                    : error.response[responseKey];
            }
        }
    }

    return formatError as any;
}

function formatData(data: any): any {
    if (data && typeof data === 'string') {
        try {
            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }

    if (global && global.process) {
        if (data instanceof require('stream').Readable) {
            return '[Readable]';
        }
    }

    return data;
}

export function isAxiosError(error: any): error is AxiosError {
    return !!error?.isAxiosError;
}
