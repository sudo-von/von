import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UserNotFoundControllerError,
  SingleUserOnlyControllerError,
  UserUpdateFailedControllerError,
  InvalidNameLengthControllerError,
  InvalidPasswordLengthControllerError,
  InvalidUsernameLengthControllerError,
  InvalidProfilePictureControllerLengthError,
  InvalidEmailLengthControllerError,
} from '../../errors/user-controller-error';
import {
  InternalServerControllerError,
  PermissionDeniedControllerError,
  InvalidCredentialsControllerError,
} from '../../errors/common-controller-error';
import {
  ControllerErrorFactory,
} from '../../errors/controller-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  TokenServiceFailedTokenGenerationError,
  TokenServiceExpiredTokenControllerError,
  TokenServiceInvalidTokenControllerError,
} from '../../errors/token-service-controller-errors';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  CryptographyServiceInvalidCompareControllerError,
  CryptographyServiceInvalidHashDataControllerError,
} from '../../errors/cryptography-service-controller-errors';
import {
  MessageBrokerErrorFactory,
} from '../../../message-brokers/errors/message-broker-error-factory';
import { ServiceErrorCode } from '../../../services/errors/service-error-codes';

const domainErrors: Record<DomainErrorCode, ControllerErrorFactory> = {
  INVALID_CREDENTIALS: InvalidCredentialsControllerError,
  INVALID_EMAIL_LENGTH: InvalidEmailLengthControllerError,
  INVALID_NAME_LENGTH: InvalidNameLengthControllerError,
  INVALID_PASSWORD_LENGTH: InvalidPasswordLengthControllerError,
  INVALID_PROFILE_PICTURE_NAME_LENGTH: InvalidProfilePictureControllerLengthError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthControllerError,
  SINGLE_USER_ONLY: SingleUserOnlyControllerError,
  USER_NOT_FOUND: UserNotFoundControllerError,
  USER_PERMISSION_DENIED: PermissionDeniedControllerError,
  USER_UPDATE_FAILED: UserUpdateFailedControllerError,
  INVALID_PROFILE_PICTURE_MIME_TYPE: InternalServerControllerError,
  INVALID_PROFILE_PICTURE_SIZE: InternalServerControllerError,
};

const serviceErrors: Record<ServiceErrorCode, ControllerErrorFactory> = {
  SECURITY_SERVICE_UNCAUGHT_COMPARE_HASHES: InternalServerControllerError,
  SECURITY_SERVICE_UNCAUGHT_HASH: InternalServerControllerError,
  SECURITY_SERVICE_UNCAUGHT_HASH_PASSWORD: InternalServerControllerError,
  TOKEN_SERVICE_EXPIRED_TOKEN: TokenServiceExpiredTokenControllerError,
  TOKEN_SERVICE_FAILED_TOKEN_GENERATION: TokenServiceFailedTokenGenerationError,
  TOKEN_SERVICE_INVALID_TOKEN: TokenServiceInvalidTokenControllerError,
  FILE_SERVICE_UNCAUGHT_STORE: InternalServerControllerError,
};

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof MessageBrokerErrorFactory) {
    return res.end();
  }

  if (error instanceof ControllerErrorFactory) {
    return res.status(error.statusCode).json({ code: error.code, error: error.message });
  }

  if (error instanceof DomainErrorFactory) {
    const {
      code,
      message,
      statusCode,
    } = domainErrors[error.code] || InternalServerControllerError;
    return res.status(statusCode).json({ code, error: message });
  }

  if (error instanceof ServiceErrorFactory) {
    const {
      code,
      message,
      statusCode,
    } = serviceErrors[error.code] || InternalServerControllerError;
    return res.status(statusCode).json({ code, error: message });
  }

  return res.status(InternalServerControllerError.statusCode).json({
    code: InternalServerControllerError.code,
    error: InternalServerControllerError.message,
  });
};

export default errorMiddleware;
