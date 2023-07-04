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
  InvalidCredentialsControllerError,
  InvalidEmailLengthControllerError,
  UserPermissionDeniedControllerError,
  InvalidPasswordLengthControllerError,
  InvalidUsernameLengthControllerError,
} from '../../errors/user-controller-errors';
import {
  InternalServerControllerError,
} from '../../errors/request-controller-errors';
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
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  TokenServiceFailedTokenGenerationError,
  TokenServiceExpiredTokenControllerError,
  TokenServiceInvalidTokenControllerError,
} from '../../errors/token-service-controller-errors';
import {
  InvalidProfilePictureSizeControllerError,
  InvalidProfilePictureMimeTypeControllerError,
  InvalidProfilePictureNameLengthControllerError,
} from '../../errors/profile-picture-controller-errors';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  MessageBrokerErrorFactory,
} from '../../../message-brokers/errors/message-broker-error-factory';

const domainErrors: Record<DomainErrorCode, ControllerErrorFactory> = {
  INVALID_CREDENTIALS: InvalidCredentialsControllerError,
  INVALID_EMAIL_LENGTH: InvalidEmailLengthControllerError,
  INVALID_NAME_LENGTH: InvalidNameLengthControllerError,
  INVALID_PASSWORD_LENGTH: InvalidPasswordLengthControllerError,
  INVALID_PROFILE_PICTURE_NAME_LENGTH: InvalidProfilePictureNameLengthControllerError,
  INVALID_PROFILE_PICTURE_MIME_TYPE: InvalidProfilePictureMimeTypeControllerError,
  INVALID_PROFILE_PICTURE_SIZE: InvalidProfilePictureSizeControllerError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthControllerError,
  SINGLE_USER_ONLY: SingleUserOnlyControllerError,
  USER_NOT_FOUND: UserNotFoundControllerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedControllerError,
  USER_UPDATE_FAILED: UserUpdateFailedControllerError,
};

const serviceErrors: Record<ServiceErrorCode, ControllerErrorFactory> = {
  SECURITY_SERVICE_FAILED_CHECKSUM_COMPUTING: InternalServerControllerError,
  SECURITY_SERVICE_FAILED_HASH_COMPARISON: InternalServerControllerError,
  SECURITY_SERVICE_FAILED_PASSWORD_HASHING: InternalServerControllerError,
  FILE_SERVICE_FAILED_DELETION: InternalServerControllerError,
  FILE_SERVICE_FAILED_FILE_UPLOADING: InternalServerControllerError,
  FILE_SERVICE_ERROR_NO_ENTITY: InternalServerControllerError,
  TOKEN_SERVICE_EXPIRED_TOKEN: TokenServiceExpiredTokenControllerError,
  TOKEN_SERVICE_FAILED_TOKEN_GENERATION: TokenServiceFailedTokenGenerationError,
  TOKEN_SERVICE_INVALID_TOKEN: TokenServiceInvalidTokenControllerError,
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
