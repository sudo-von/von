import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  UserDomainErrorCode,
} from '../../../../../domain/errors/error-codes';
import {
  NoUserCreatedYetError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  InvalidNameLengthError,
  InvalidCredentialsError,
  InvalidEmailLengthError,
  UserPermissionDeniedError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../../../../../domain/entities/user-entity/user-errors';

export const InvalidCredentialsServerError = createServerErrorFactory({
  code: 'INVALID_CREDENTIALS',
  message: InvalidCredentialsError.message,
  statusCode: statusCodes.UNAUTHORIZED,
});

export const InvalidEmailLengthServerError = createServerErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  message: InvalidEmailLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidNameLengthServerError = createServerErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  message: InvalidNameLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidPasswordLengthServerError = createServerErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  message: InvalidPasswordLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidUsernameLengthServerError = createServerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  message: InvalidUsernameLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: SingleUserOnlyError.message,
  statusCode: statusCodes.CONFLICT,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  message: NoUserCreatedYetError.message,
  statusCode: statusCodes.NOT_FOUND,
});

export const UserPermissionDeniedServerError = createServerErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: UserPermissionDeniedError.message,
  statusCode: statusCodes.FORBIDDEN,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: UserUpdateFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const userServerErrors: Record<UserDomainErrorCode, ServerErrorFactory> = {
  INVALID_CREDENTIALS: InvalidCredentialsServerError,
  INVALID_EMAIL_LENGTH: InvalidEmailLengthServerError,
  INVALID_NAME_LENGTH: InvalidNameLengthServerError,
  INVALID_PASSWORD_LENGTH: InvalidPasswordLengthServerError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthServerError,
  SINGLE_USER_ONLY: SingleUserOnlyServerError,
  USER_NOT_FOUND: UserNotFoundServerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedServerError,
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};
