import { AllStatusCodes } from '../status-codes';
import { RequestError, RequestErrorCode } from './request-errors';

export class RequestErrorFactory extends Error implements RequestError {
  constructor(
    public code: RequestErrorCode,
    public message: string,
    public statusCode: AllStatusCodes,
  ) {
    super(message);
    Object.setPrototypeOf(this, RequestErrorFactory.prototype);
  }
}

export const createRequestErrorFactory = ({
  code,
  message,
  statusCode,
}: RequestError) => new RequestErrorFactory(code, message, statusCode);
