import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  InvalidEmailLengthError,
  InvalidNameLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
  SingleUserOnlyError,
  UserNotFoundError,
  UserUpdateFailedError,
} from '../../../domain/entities/user/user-errors';
import { InvalidProfilePictureNameLengthError } from '../../../domain/entities/profile-picture/profile-picture-errors';

export const InvalidEmailLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_EMAIL_LENGTH_CONTROLLER_ERROR',
  message: InvalidEmailLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidNameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_NAME_LENGTH_CONTROLLER_ERROR',
  message: InvalidNameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidPasswordLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH_CONTROLLER_ERROR',
  message: InvalidPasswordLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidProfilePictureControllerLengthError = createControllerErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_LENGTH_CONTROLLER_ERROR',
  message: InvalidProfilePictureNameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidUsernameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH_CONTROLLER_ERROR',
  message: InvalidUsernameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const SingleUserOnlyControllerError = createControllerErrorFactory({
  code: 'SINGLE_USER_ONLY_CONTROLLER_ERROR',
  message: SingleUserOnlyError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const UserNotFoundControllerError = createControllerErrorFactory({
  code: 'USER_NOT_FOUND_CONTROLLER_ERROR',
  message: UserNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const UserUpdateFailedControllerError = createControllerErrorFactory({
  code: 'USER_UPDATE_FAILED_CONTROLLER_ERROR',
  message: UserUpdateFailedError.message,
  statusCode: statusCode.serverSide.internalServer,
});
