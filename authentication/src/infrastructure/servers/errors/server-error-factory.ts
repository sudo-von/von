import {
  ServerError,
  ServerErrorCode,
} from './server-error-codes';

export class ServerErrorFactory extends Error implements ServerError {
  constructor(
    public code: ServerErrorCode,
    public error: string,
    public statusCode: number,
  ) {
    super(error);
    Object.setPrototypeOf(this, ServerErrorFactory.prototype);
  }
}

export const createServerErrorFactory = ({
  code,
  error,
  statusCode,
}: ServerError) => new ServerErrorFactory(code, error, statusCode);
