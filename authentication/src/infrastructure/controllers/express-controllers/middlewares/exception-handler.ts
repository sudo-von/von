import { NextFunction, Request, Response } from 'express';
import { DomainErrorCode } from '../../../../domain/errors/errors';
import { DomainErrorFactory } from '../../../../domain/errors/error-factory';
import { RequestErrorFactory } from '../../errors/request-error-factory';
import {
  InvalidNameRequestError,
  InvalidUsernameRequestError,
  InvalidPasswordRequestError,
  InvalidPositionRequestError,
  InvalidInterestRequestError,
  InvalidQuoteRequestError,
  SingleUserOnlyRequestError,
  InternalServerRequestError,
  InvalidCredentialsRequestError,
  EmailAlreadyExistsRequestError,
  UserNotFoundRequestError,
  UserCreationFailedRequestError,
} from '../../errors/request-error-factories';

const errors: Record<DomainErrorCode, RequestErrorFactory> = {
  INVALID_CREDENTIALS_DOMAIN_ERROR: InvalidCredentialsRequestError,
  INVALID_INTEREST_LENGTH_DOMAIN_ERROR: InvalidInterestRequestError,
  INVALID_NAME_LENGTH_DOMAIN_ERROR: InvalidNameRequestError,
  INVALID_PASSWORD_LENGTH_DOMAIN_ERROR: InvalidPasswordRequestError,
  INVALID_POSITION_LENGTH_DOMAIN_ERROR: InvalidPositionRequestError,
  INVALID_QUOTE_LENGTH_DOMAIN_ERROR: InvalidQuoteRequestError,
  INVALID_USERNAME_LENGTH_DOMAIN_ERROR: InvalidUsernameRequestError,
  EMAIL_ALREADY_EXISTS_DOMAIN_ERROR: EmailAlreadyExistsRequestError,
  SINGLE_USER_ONLY_DOMAIN_ERROR: SingleUserOnlyRequestError,
  USER_NOT_FOUND_DOMAIN_ERROR: UserNotFoundRequestError,
  USER_CREATION_FAILED_DOMAIN_ERROR: UserCreationFailedRequestError,
};

const exceptionHandler = (
  error: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => {
  const { code } = error as DomainErrorFactory;
  if (errors[code]) throw errors[code];
  throw InternalServerRequestError;
};

export default exceptionHandler;
