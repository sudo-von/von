import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userRules from './user-rules';

export const InvalidCredentialsError = createDomainErrorFactory({
  code: 'INVALID_CREDENTIALS',
  error: 'Please verify your credentials and try again.',
});

export const InvalidEmailLengthError = createDomainErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  error: `Please provide an email that consists of ${userRules.email.content.MIN_LENGTH} to ${userRules.email.content.MAX_LENGTH} characters.`,
});

export const InvalidNameLengthError = createDomainErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  error: `Please provide a name that consists of ${userRules.name.content.MIN_LENGTH} to ${userRules.name.content.MAX_LENGTH} characters.`,
});

export const InvalidPasswordLengthError = createDomainErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  error: `Please provide a password that consists of ${userRules.password.content.MIN_LENGTH} to ${userRules.password.content.MAX_LENGTH} characters.`,
});

export const InvalidUsernameLengthError = createDomainErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  error: `Please provide a username that consists of ${userRules.username.content.MIN_LENGTH} to ${userRules.username.content.MAX_LENGTH} characters.`,
});

export const SingleUserOnlyError = createDomainErrorFactory({
  code: 'SINGLE_USER_ONLY',
  error: 'Only one user registration per application is permitted.',
});

export const UserNotFoundError = createDomainErrorFactory({
  code: 'USER_NOT_FOUND',
  error: 'The requested user could not be found.',
});

export const UserPermissionDeniedError = createDomainErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  error: 'You do not have sufficient permissions to perform this action.',
});

export const UserUpdateFailedError = createDomainErrorFactory({
  code: 'USER_UPDATE_FAILED',
  error: 'The user you attempted to update could not be updated.',
});
