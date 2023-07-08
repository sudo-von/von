import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from './server-error-factory';
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
  statusCode: statusCode.BAD_REQUEST,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: SingleUserOnlyError.message,
  statusCode: statusCode.CONFLICT,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  message: UserNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const UserPermissionDeniedServerError = createServerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: UserPermissionDeniedError.message,
  statusCode: statusCode.FORBIDDEN,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: UserUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
