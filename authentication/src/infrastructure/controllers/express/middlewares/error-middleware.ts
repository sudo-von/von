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
  EmailAlreadyExistsControllerError,
  UserCreationFailedControllerError,
  InvalidPasswordLengthControllerError,
  InvalidUsernameLengthControllerError,
  UsernameAlreadyExistsControllerError,
  InvalidProfilePictureControllerLengthError,
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
  INVALID_NAME_LENGTH_DOMAIN_ERROR: InvalidNameLengthControllerError,
  INVALID_PASSWORD_LENGTH_DOMAIN_ERROR: InvalidPasswordLengthControllerError,
  INVALID_PROFILE_PICTURE_LENGTH_DOMAIN_ERROR: InvalidProfilePictureControllerLengthError,
  INVALID_USERNAME_LENGTH_DOMAIN_ERROR: InvalidUsernameLengthControllerError,
  EMAIL_ALREADY_EXISTS_DOMAIN_ERROR: EmailAlreadyExistsControllerError,
  SINGLE_USER_ONLY_DOMAIN_ERROR: SingleUserOnlyControllerError,
  USER_NOT_FOUND_DOMAIN_ERROR: UserNotFoundControllerError,
  USER_CREATION_FAILED_DOMAIN_ERROR: UserCreationFailedControllerError,
  PERMISSION_DENIED_DOMAIN_ERROR: PermissionDeniedControllerError,
  USER_UPDATE_FAILED_DOMAIN_ERROR: UserUpdateFailedControllerError,
  USERNAME_ALREADY_EXISTS_DOMAIN_ERROR: UsernameAlreadyExistsControllerError,
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
