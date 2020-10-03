export class CancelError extends Error {
  readonly reason: any

  constructor(reason?: any) {
    super('The request could not proceed because it has been cancelled.')
    this.reason = reason
    Object.setPrototypeOf(this, CancelError.prototype)
  }
}
