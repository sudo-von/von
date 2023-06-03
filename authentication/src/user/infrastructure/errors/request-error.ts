
export abstract class RequestError extends Error {
  abstract statusCode: number;
  constructor (message: string) {
    super(message);
    Object.setPrototypeOf(this, RequestError.prototype);
  }

  abstract handleErrors (): string[];
}
