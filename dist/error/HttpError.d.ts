import { Config, Response } from '../HttpClient-types';
export declare class HttpError<T> extends Error {
    readonly config: Config;
    readonly response: Response<T> | undefined;
    readonly code: string | undefined;
    readonly request: any;
    constructor(config: Config, response?: Response<T>, code?: string, request?: any);
}
