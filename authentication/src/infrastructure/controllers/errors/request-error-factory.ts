import { ErrorFactory } from '../../../domain/errors/error-factory';

export type RequestErrorFactory = ErrorFactory & {
  statusCode: number;
};

const createRequestErrorFactory = ({
  name,
  message,
  statusCode,
}: RequestErrorFactory) => class RequestCustomError extends Error {
  statusCode: number;

  constructor() {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, RequestCustomError.prototype);
  }
};

export default createRequestErrorFactory;
