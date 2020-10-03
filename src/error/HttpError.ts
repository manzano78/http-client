import { Config, Response } from '../HttpClient-types'

export class HttpError<T> extends Error {
  readonly config: Config
  readonly response: Response<T> | undefined
  readonly code: string | undefined
  readonly request: any

  constructor(
    config: Config,
    response?: Response<T>,
    code?: string,
    request?: any
  ) {
    super('An HTTP error occured.')
    this.config = config
    this.response = response
    this.code = code
    this.request = request
    Object.setPrototypeOf(this, HttpError.prototype)
  }
}
