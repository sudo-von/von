import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  InvalidNameLengthError,
  InvalidCredentialsError,
  InvalidEmailLengthError,
  UserPermissionDeniedError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../../../domain/entities/user-entity/user-errors';

export const InvalidCredentialsControllerError = createControllerErrorFactory({
  code: 'INVALID_CREDENTIALS',
  message: InvalidCredentialsError.message,
  statusCode: statusCode.clientSide.unauthorized,
});

export const InvalidEmailLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  message: InvalidEmailLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidNameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  message: InvalidNameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidPasswordLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  message: InvalidPasswordLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidUsernameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  message: InvalidUsernameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const SingleUserOnlyControllerError = createControllerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: SingleUserOnlyError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const UserNotFoundControllerError = createControllerErrorFactory({
  code: 'USER_NOT_FOUND',
  message: UserNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const UserPermissionDeniedControllerError = createControllerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: UserPermissionDeniedError.message,
  statusCode: statusCode.clientSide.forbidden,
});

export const UserUpdateFailedControllerError = createControllerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: UserUpdateFailedError.message,
  statusCode: statusCode.serverSide.internalServer,
});
