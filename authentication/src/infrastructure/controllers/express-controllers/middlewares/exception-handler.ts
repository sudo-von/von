import { NextFunction, Request, Response } from 'express';
import { DomainErrorCode } from '../../../../domain/errors/errors';
import { RequestErrorFactory } from '../../errors/request-error-factory';
import { DomainErrorFactory } from '../../../../domain/errors/error-factory';
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
  InvalidTokenRequestError,
  ExpiredTokenRequestError,
} from '../../errors/request-error-factories';
import { ServiceErrorCode } from '../../../services/errors/service-errors';
import { ServiceErrorFactory } from '../../../services/errors/service-error-factory';
import ILoggerService from '../../../../domain/services/logger-service';
import { MessageBrokerErrorFactory } from '../../../message-brokers/errors/message-broker-error-factory';

const domainErrors: Record<DomainErrorCode, RequestErrorFactory> = {
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

const serviceErrors: Record<ServiceErrorCode, RequestErrorFactory> = {
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR: UserCreationFailedRequestError,
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR: UserCreationFailedRequestError,
  TOKEN_SERVICE_INVALID_TOKEN_ERROR: InvalidTokenRequestError,
  TOKEN_SERVICE_EXPIRED_TOKEN_ERROR: ExpiredTokenRequestError,
};

const exceptionHandler = (loggerService: ILoggerService) => (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  loggerService.log('warn', (error as Error).message);
  if (error instanceof MessageBrokerErrorFactory) {
    res.end();
  }
  if (error instanceof DomainErrorFactory) {
    throw domainErrors[error.code];
  }
  if (error instanceof ServiceErrorFactory) {
    throw serviceErrors[error.code];
  }
  throw InternalServerRequestError;
};

export default exceptionHandler;
