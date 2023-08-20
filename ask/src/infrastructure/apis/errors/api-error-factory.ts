import {
  APIError,
  APIErrorCode,
} from './api-error-codes';

export class APIErrorFactory extends Error implements APIError {
  constructor(
    public code: APIErrorCode,
    public message: string,
    public statusCode: number,
  ) {
    super(message);
    Object.setPrototypeOf(this, APIErrorFactory.prototype);
  }
}

export const createServerErrorFactory = ({
  code,
  message,
  statusCode,
}: APIError) => new APIErrorFactory(code, message, statusCode);
