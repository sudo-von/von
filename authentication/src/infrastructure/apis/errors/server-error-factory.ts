import {
  ServerError,
  ServerErrorCode,
} from './server-error-codes';

export class ServerErrorFactory extends Error implements ServerError {
  constructor(
    public code: ServerErrorCode,
    public message: string,
    public statusCode: number,
  ) {
    super(message);
    Object.setPrototypeOf(this, ServerErrorFactory.prototype);
  }
}

export const createServerErrorFactory = ({
  code,
  message: error,
  statusCode,
}: ServerError) => new ServerErrorFactory(code, error, statusCode);
