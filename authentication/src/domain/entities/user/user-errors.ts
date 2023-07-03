import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userRules from './user-rules';

export const InvalidCredentialsError = createDomainErrorFactory({
  code: 'INVALID_CREDENTIALS_DOMAIN_ERROR',
  message: 'Please verify your email and password and try again.',
});

export const InvalidEmailLengthError = createDomainErrorFactory({
  code: 'INVALID_EMAIL_LENGTH_DOMAIN_ERROR',
  message: `Please provide an email that consists of ${userRules.email.MIN_LENGTH} to ${userRules.email.MAX_LENGTH} characters.`,
});

export const InvalidUsernameLengthError = createDomainErrorFactory({
  code: 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
});

export const InvalidNameLengthError = createDomainErrorFactory({
  code: 'INVALID_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${userRules.name.MIN_LENGTH} to ${userRules.name.MAX_LENGTH} characters.`,
});

export const InvalidPasswordLengthError = createDomainErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR',
  message: `Please provide a password that consists of ${userRules.password.MIN_LENGTH} to ${userRules.password.MAX_LENGTH} characters.`,
});

export const SingleUserOnlyError = createDomainErrorFactory({
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Only one user is allowed.',
});

export const UserNotFoundError = createDomainErrorFactory({
  code: 'USER_NOT_FOUND_DOMAIN_ERROR',
  message: 'User not found.',
});

export const UserPermissionDeniedError = createDomainErrorFactory({
  code: 'USER_PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have sufficient permissions to perform this action.',
});

export const UserUpdateFailedError = createDomainErrorFactory({
  code: 'USER_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'User update failed.',
});

export const UsernameAlreadyExistsError = createDomainErrorFactory({
  code: 'USERNAME_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Username already exists. Please choose a different username.',
});
