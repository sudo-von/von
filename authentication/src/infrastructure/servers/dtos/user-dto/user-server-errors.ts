import statusCodes from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
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
} from '../../../../domain/entities/user-entity/user-errors';

export const InvalidCredentialsServerError = createServerErrorFactory({
  code: 'INVALID_CREDENTIALS',
  error: InvalidCredentialsError.message,
  statusCode: statusCodes.UNAUTHORIZED,
});

export const InvalidEmailLengthServerError = createServerErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  error: InvalidEmailLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidNameLengthServerError = createServerErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  error: InvalidNameLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidPasswordLengthServerError = createServerErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  error: InvalidPasswordLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidUsernameLengthServerError = createServerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  error: InvalidUsernameLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  error: SingleUserOnlyError.message,
  statusCode: statusCodes.CONFLICT,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  error: UserNotFoundError.message,
  statusCode: statusCodes.NOT_FOUND,
});

export const UserPermissionDeniedServerError = createServerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  error: UserPermissionDeniedError.message,
  statusCode: statusCodes.FORBIDDEN,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  error: UserUpdateFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});
