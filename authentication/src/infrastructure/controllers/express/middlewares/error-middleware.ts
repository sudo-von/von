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
  UsernameAlreadyExistsControllerError,
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
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
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

const domainErrors: Record<DomainErrorCode, ControllerErrorFactory> = {
  INVALID_CREDENTIALS_DOMAIN_ERROR: InvalidCredentialsControllerError,
  INVALID_EMAIL_LENGTH_DOMAIN_ERROR: InvalidEmailLengthControllerError,
  INVALID_NAME_LENGTH_DOMAIN_ERROR: InvalidNameLengthControllerError,
  INVALID_PASSWORD_LENGTH_DOMAIN_ERROR: InvalidPasswordLengthControllerError,
  INVALID_PROFILE_PICTURE_NAME_LENGTH_DOMAIN_ERROR: InvalidProfilePictureControllerLengthError,
  INVALID_USERNAME_LENGTH_DOMAIN_ERROR: InvalidUsernameLengthControllerError,
  SINGLE_USER_ONLY_DOMAIN_ERROR: SingleUserOnlyControllerError,
  USER_NOT_FOUND_DOMAIN_ERROR: UserNotFoundControllerError,
  USER_PERMISSION_DENIED_DOMAIN_ERROR: PermissionDeniedControllerError,
  USER_UPDATE_FAILED_DOMAIN_ERROR: UserUpdateFailedControllerError,
  USERNAME_ALREADY_EXISTS_DOMAIN_ERROR: UsernameAlreadyExistsControllerError,
  INVALID_PROFILE_PICTURE_MIME_TYPE_DOMAIN_ERROR: InternalServerControllerError,
  INVALID_PROFILE_PICTURE_SIZE_DOMAIN_ERROR: InternalServerControllerError,
};

const serviceErrors: Record<ServiceErrorCode, ControllerErrorFactory> = {
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR: CryptographyServiceInvalidCompareControllerError,
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR: CryptographyServiceInvalidHashDataControllerError,
  TOKEN_SERVICE_EXPIRED_TOKEN_ERROR: TokenServiceExpiredTokenControllerError,
  TOKEN_SERVICE_FAILED_TOKEN_GENERATION_ERROR: TokenServiceFailedTokenGenerationError,
  TOKEN_SERVICE_INVALID_TOKEN_ERROR: TokenServiceInvalidTokenControllerError,
};

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(`⛔️ An error occurred with the controller: ${(error as Error).message}`);

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
