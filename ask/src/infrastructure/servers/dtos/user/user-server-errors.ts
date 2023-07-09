import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  UserPermissionDeniedError,
  InvalidUsernameLengthError,
} from '../../../../domain/entities/user/user-errors';

export const InvalidUsernameLengthServerError = createServerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  error: InvalidUsernameLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  error: SingleUserOnlyError.message,
  statusCode: statusCode.CONFLICT,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  error: UserNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const UserPermissionDeniedServerError = createServerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  error: UserPermissionDeniedError.message,
  statusCode: statusCode.FORBIDDEN,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  error: UserUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
