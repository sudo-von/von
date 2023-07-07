import {
  createServerErrorFactory,
} from './server-error-factory';
import statusCode from '../constants/status-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  UserPermissionDeniedError,
  InvalidUsernameLengthError,
} from '../../../domain/entities/user/user-errors';

export const InvalidUsernameLengthServerError = createServerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  message: InvalidUsernameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: SingleUserOnlyError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  message: UserNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const UserPermissionDeniedServerError = createServerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: UserPermissionDeniedError.message,
  statusCode: statusCode.clientSide.forbidden,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: UserUpdateFailedError.message,
  statusCode: statusCode.serverSide.internalServer,
});
