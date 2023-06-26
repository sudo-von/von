import {
  USER_NOT_FOUND,
  SINGLE_USER_ONLY,
  USER_UPDATE_FAILED,
  INVALID_NAME_LENGTH,
  EMAIL_ALREADY_EXISTS,
  USER_CREATION_FAILED,
  USERNAME_ALREADY_EXISTS,
  INVALID_USERNAME_LENGTH,
  INVALID_PASSWORD_LENGTH,
  INVALID_PROFILE_PICTURE_LENGTH,
} from '../../../domain/errors/user-error';
import statusCode from '../status-codes';
import {
  ControllerError,
} from './controller-error-codes';
import {
  createControllerErrorFactory,
} from './controller-error-factory';

export const EMAIL_ALREADY_EXISTS_CONTROLLER: ControllerError = {
  code: 'EMAIL_ALREADY_EXISTS_CONTROLLER_ERROR',
  message: EMAIL_ALREADY_EXISTS.message,
  statusCode: statusCode.clientSide.conflict,
};

export const INVALID_USERNAME_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_USERNAME_LENGTH_CONTROLLER_ERROR',
  message: INVALID_USERNAME_LENGTH.message,
  statusCode: statusCode.clientSide.badRequest,
};

export const INVALID_NAME_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_NAME_LENGTH_CONTROLLER_ERROR',
  message: INVALID_NAME_LENGTH.message,
  statusCode: statusCode.clientSide.badRequest,
};

export const INVALID_PASSWORD_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_PASSWORD_LENGTH_CONTROLLER_ERROR',
  message: INVALID_PASSWORD_LENGTH.message,
  statusCode: statusCode.clientSide.badRequest,
};

export const INVALID_PROFILE_PICTURE_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_PROFILE_PICTURE_LENGTH_CONTROLLER_ERROR',
  message: INVALID_PROFILE_PICTURE_LENGTH.message,
  statusCode: statusCode.clientSide.badRequest,
};

export const SINGLE_USER_ONLY_CONTROLLER: ControllerError = {
  code: 'SINGLE_USER_ONLY_CONTROLLER_ERROR',
  message: SINGLE_USER_ONLY.message,
  statusCode: statusCode.clientSide.conflict,
};

export const USER_CREATION_FAILED_CONTROLLER: ControllerError = {
  code: 'USER_CREATION_FAILED_CONTROLLER_ERROR',
  message: USER_CREATION_FAILED.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const USER_NOT_FOUND_CONTROLLER: ControllerError = {
  code: 'USER_NOT_FOUND_CONTROLLER_ERROR',
  message: USER_NOT_FOUND.message,
  statusCode: statusCode.clientSide.notFound,
};

export const USER_UPDATE_FAILED_CONTROLLER: ControllerError = {
  code: 'USER_UPDATE_FAILED_CONTROLLER_ERROR',
  message: USER_UPDATE_FAILED.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const USERNAME_ALREADY_EXISTS_CONTROLLER: ControllerError = {
  code: 'USERNAME_ALREADY_EXISTS_CONTROLLER_ERROR',
  message: USERNAME_ALREADY_EXISTS.message,
  statusCode: statusCode.clientSide.conflict,
};

export const EmailAlreadyExistsControllerError = createControllerErrorFactory(
  EMAIL_ALREADY_EXISTS_CONTROLLER,
);

export const InvalidUsernameLengthControllerError = createControllerErrorFactory(
  INVALID_USERNAME_LENGTH_CONTROLLER,
);

export const InvalidNameLengthControllerError = createControllerErrorFactory(
  INVALID_NAME_LENGTH_CONTROLLER,
);

export const InvalidPasswordLengthControllerError = createControllerErrorFactory(
  INVALID_PASSWORD_LENGTH_CONTROLLER,
);

export const InvalidProfilePictureControllerLengthError = createControllerErrorFactory(
  INVALID_PASSWORD_LENGTH_CONTROLLER,
);

export const SingleUserOnlyControllerError = createControllerErrorFactory(
  SINGLE_USER_ONLY_CONTROLLER,
);

export const UserCreationFailedControllerError = createControllerErrorFactory(
  USER_CREATION_FAILED_CONTROLLER,
);

export const UserNotFoundControllerError = createControllerErrorFactory(
  USER_NOT_FOUND_CONTROLLER,
);

export const UserUpdateFailedControllerError = createControllerErrorFactory(
  USER_UPDATE_FAILED_CONTROLLER,
);

export const UsernameAlreadyExistsControllerError = createControllerErrorFactory(
  USERNAME_ALREADY_EXISTS_CONTROLLER,
);
