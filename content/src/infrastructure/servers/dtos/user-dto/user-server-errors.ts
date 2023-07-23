import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  UserErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  InvalidUsernameLengthError,
} from '../../../../domain/entities/user-entity/user-errors';

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

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  error: UserUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const userServerErrors: Record<UserErrorCode, ServerErrorFactory> = {
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthServerError,
  SINGLE_USER_ONLY: SingleUserOnlyServerError,
  USER_NOT_FOUND: UserNotFoundServerError,
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};
