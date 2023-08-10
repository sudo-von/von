import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  UserDomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
  InvalidNameLengthError,
  InvalidCredentialsError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../../../../domain/entities/user-entity/user-errors';

export const InvalidCredentialsServerError = createServerErrorFactory({
  code: 'INVALID_CREDENTIALS',
  error: InvalidCredentialsError.error,
  statusCode: statusCodes.UNAUTHORIZED,
});

export const InvalidEmailLengthServerError = createServerErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  error: InvalidEmailLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidNameLengthServerError = createServerErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  error: InvalidNameLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidPasswordLengthServerError = createServerErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  error: InvalidPasswordLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidUsernameLengthServerError = createServerErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  error: InvalidUsernameLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const SingleUserOnlyServerError = createServerErrorFactory({
  code: 'SINGLE_USER_ONLY',
  error: SingleUserOnlyError.error,
  statusCode: statusCodes.CONFLICT,
});

export const UserNotFoundServerError = createServerErrorFactory({
  code: 'USER_NOT_FOUND',
  error: UserNotFoundError.error,
  statusCode: statusCodes.NOT_FOUND,
});

export const UserUpdateFailedServerError = createServerErrorFactory({
  code: 'USER_UPDATE_FAILED',
  error: UserUpdateFailedError.error,
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
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};
