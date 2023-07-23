import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UserNotFoundControllerError,
  SingleUserOnlyControllerError,
  UserUpdateFailedControllerError,
  UserCreationFailedControllerError,
  UsernameAlreadyExistsControllerError,
  InvalidUsernameNameLengthControllerError,
} from '../../errors/user-controller-error';
import {
  InternalServerControllerError,
  PermissionDeniedControllerError,
} from '../../errors/common-controller-error';
import {
  ControllerErrorFactory,
} from '../../errors/controller-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  ProfileNotFoundControllerError,
  SingleProfileOnlyControllerError,
  ProfileUpdateFailedControllerError,
  ProfileCreationFailedControllerError,
  InvalidProfileQuoteLengthControllerError,
  InvalidProfilePositionLengthControllerError,
  InvalidProfileInterestLengthControllerError,
} from '../../errors/profile-controller-error';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  TokenServiceExpiredTokenControllerError,
  TokenServiceInvalidTokenControllerError,
} from '../../errors/token-service-controller-errors';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  MessageBrokerErrorFactory,
} from '../../../message-brokers/errors/message-broker-error-factory';

const domainErrors: Record<DomainErrorCode, ControllerErrorFactory> = {
  INVALID_USER_USERNAME_LENGTH_DOMAIN_ERROR: InvalidUsernameNameLengthControllerError,
  SINGLE_USER_ONLY_DOMAIN_ERROR: SingleUserOnlyControllerError,
  USER_CREATION_FAILED_DOMAIN_ERROR: UserCreationFailedControllerError,
  USER_NOT_FOUND_DOMAIN_ERROR: UserNotFoundControllerError,
  USER_UPDATE_FAILED_DOMAIN_ERROR: UserUpdateFailedControllerError,
  USERNAME_ALREADY_EXISTS_DOMAIN_ERROR: UsernameAlreadyExistsControllerError,
  PERMISSION_DENIED_DOMAIN_ERROR: PermissionDeniedControllerError,
  INVALID_PROFILE_INTEREST_LENGTH_DOMAIN_ERROR: InvalidProfileInterestLengthControllerError,
  INVALID_PROFILE_POSITION_LENGTH_DOMAIN_ERROR: InvalidProfilePositionLengthControllerError,
  INVALID_PROFILE_QUOTE_LENGTH_DOMAIN_ERROR: InvalidProfileQuoteLengthControllerError,
  PROFILE_CREATION_FAILED_DOMAIN_ERROR: ProfileCreationFailedControllerError,
  PROFILE_NOT_FOUND_DOMAIN_ERROR: ProfileNotFoundControllerError,
  PROFILE_UPDATE_FAILED_DOMAIN_ERROR: ProfileUpdateFailedControllerError,
  SINGLE_PROFILE_ONLY_DOMAIN_ERROR: SingleProfileOnlyControllerError,
};

const serviceErrors: Record<ServiceErrorCode, ControllerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN_ERROR: TokenServiceExpiredTokenControllerError,
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
