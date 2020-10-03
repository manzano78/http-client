export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
export declare type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
export interface ProxyConfig {
    host: string;
    port: number;
    auth?: {
        username: string;
        password: string;
    };
    protocol?: string;
}
export interface BasicCredentials {
    username: string;
    password: string;
}
export interface Adapter {
    (request: Config): Promise<Response<any>>;
}
export interface Transformer {
    (data: any, headers?: any): any;
}
export declare type RequestConfig = Omit<Config, 'url' | 'data' | 'method'>;
export interface Config {
    url?: string;
    method?: Method;
    baseURL?: string;
    transformRequest?: Transformer | Transformer[];
    transformResponse?: Transformer | Transformer[];
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    adapter?: Adapter;
    auth?: BasicCredentials;
    responseType?: ResponseType;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: ProgressEvent) => void;
    onDownloadProgress?: (progressEvent: ProgressEvent) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean | null;
    maxBodyLength?: number;
    maxRedirects?: number;
    socketPath?: string | null;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: ProxyConfig | false;
    cancelToken?: any;
    decompress?: boolean;
}
export interface Response<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: Config;
    request?: any;
}
export declare type RemoveInterceptor = () => void;
export declare type CancelToken = any;
export declare type Cancel = (reason?: any) => void;
