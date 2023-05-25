import { type ValidationError } from 'express-validator';
import { RequestError } from '../../../../common/errors/request-error';
import { statusCode } from '../common/status-code';

export class RequestBodyError extends RequestError {
  statusCode = statusCode.clientErrors.badRequest;

  constructor (public errors: ValidationError[]) {
    super('Invalid request parameter');
    Object.setPrototypeOf(this, RequestBodyError.prototype);
  }

  handleErrors (): string[] {
    return this.errors.map((error) => error.msg);
  }
}
