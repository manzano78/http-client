import { Config, Response, Cancel, CancelToken, RemoveInterceptor, RequestConfig } from './HttpClient-types';
import { CancelError } from './error/CancelError';
import { HttpError } from './error/HttpError';
export declare abstract class HttpClient {
    static isHttpError<T = any>(error: any): error is HttpError<T>;
    static isCancelError(error: any): error is CancelError;
    request<T = any>(config: Config): Promise<Response<T>>;
    get<T = any>(url: string, config?: RequestConfig): Promise<Response<T>>;
    options<T = any>(url: string, config?: RequestConfig): Promise<Response<T>>;
    head<T = any>(url: string, config?: RequestConfig): Promise<Response<T>>;
    delete<T = any>(url: string, config?: RequestConfig): Promise<Response<T>>;
    post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<Response<T>>;
    put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<Response<T>>;
    patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<Response<T>>;
    addRequestInterceptor(onSuccess?: (response: Config) => Config | Promise<Config>, onError?: (error: any) => Config | Promise<Config>): RemoveInterceptor;
    addResponseInterceptor(onSuccess?: (response: Response) => Response | Promise<Response>, onError?: (error: any) => Response | Promise<Response>): RemoveInterceptor;
    createCancelToken(): [CancelToken, Cancel];
    private _request;
}
