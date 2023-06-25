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
  ProfileNotFoundControllerError,
  SingleProfileOnlyControllerError,
  ProfileUpdateFailedControllerError,
  ProfileCreationFailedControllerError,
  InvalidProfileQuoteLengthControllerError,
  InvalidProfilePositionLengthControllerError,
  InvalidProfileInterestLengthControllerError,
} from '../../errors/profile-controller-error';
import { DomainErrorCode } from '../../../../domain/errors/error-codes';
import { DomainErrorFactory } from '../../../../domain/errors/error-factory';
import { ControllerErrorFactory } from '../../errors/controller-error-factory';

const errors: Record<DomainErrorCode, ControllerErrorFactory> = {
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

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof DomainErrorFactory) {
    const { message, statusCode, code } = errors[error.code];
    return res.status(statusCode).json({ code, error: message });
  }
  return res.status(InternalServerControllerError.statusCode).json({
    code: InternalServerControllerError.code,
    error: InternalServerControllerError.message,
  });
};

export default errorMiddleware;
