import {
  Config,
  Response,
  Cancel,
  CancelToken,
  Method,
  RemoveInterceptor,
  RequestConfig
} from './HttpClient-types'
import { NotImplementedError } from './error/NotImplementedError'
import { CancelError } from './error/CancelError'
import { HttpError } from './error/HttpError'

export abstract class HttpClient {
  static isHttpError<T = any>(error: any): error is HttpError<T> {
    return error instanceof HttpError
  }

  static isCancelError(error: any): error is CancelError {
    return error instanceof CancelError
  }

  request<T = any>(config: Config): Promise<Response<T>>
  request<T = any>(): Promise<Response<T>> {
    throw new NotImplementedError()
  }

  get<T = any>(url: string, config?: RequestConfig) {
    return this._request<T>(url, 'get', config)
  }

  options<T = any>(url: string, config?: RequestConfig) {
    return this._request<T>(url, 'options', config)
  }

  head<T = any>(url: string, config?: RequestConfig): Promise<Response<T>> {
    return this._request<T>(url, 'head', config)
  }

  delete<T = any>(url: string, config?: RequestConfig) {
    return this._request<T>(url, 'delete', config)
  }

  post<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this._request<T>(url, 'post', config, data)
  }

  put<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this._request<T>(url, 'put', config, data)
  }

  patch<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this._request<T>(url, 'patch', config, data)
  }

  addRequestInterceptor(
    onSuccess?: (response: Config) => Config | Promise<Config>,
    onError?: (error: any) => Config | Promise<Config>
  ): RemoveInterceptor
  addRequestInterceptor(): RemoveInterceptor {
    throw new NotImplementedError()
  }

  addResponseInterceptor(
    onSuccess?: (response: Response) => Response | Promise<Response>,
    onError?: (error: any) => Response | Promise<Response>
  ): RemoveInterceptor
  addResponseInterceptor(): RemoveInterceptor {
    throw new NotImplementedError()
  }

  createCancelToken(): [CancelToken, Cancel]
  createCancelToken(): [CancelToken, Cancel] {
    throw new NotImplementedError()
  }

  private _request<T>(
    url: string,
    method: Method,
    baseRequestConfig: RequestConfig = {},
    data?: any
  ) {
    return this.request<T>({
      ...baseRequestConfig,
      url,
      method,
      data
    })
  }
}
