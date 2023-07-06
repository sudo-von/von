import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  UserPermissionDeniedError,
  InvalidUsernameLengthError,
} from '../../../domain/entities/user/user-errors';

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
