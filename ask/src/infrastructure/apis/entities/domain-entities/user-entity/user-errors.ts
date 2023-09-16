import statusCode from 'http-status-codes';
import {
  APIErrorFactory,
  createServerErrorFactory,
} from '../../../errors/api-error-factory';
import {
  UserErrorCode,
} from '../../../../../domain/errors/error-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  UserPermissionDeniedError,
  InvalidUsernameLengthError,
} from '../../../../../domain/entities/user-entity/user-errors';

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
  code: 'NO_USER_CREATED_YET',
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

export const userAPIErrors: Record<UserErrorCode, APIErrorFactory> = {
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthServerError,
  SINGLE_USER_ONLY: SingleUserOnlyServerError,
  NO_USER_CREATED_YET: UserNotFoundServerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedServerError,
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};
