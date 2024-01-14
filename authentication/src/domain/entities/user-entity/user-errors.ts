import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userRules from './user-rules';

export const InvalidCredentialsError = createDomainErrorFactory({
  code: 'INVALID_CREDENTIALS',
  message: 'Please verify your credentials and try again.',
});

export const InvalidEmailLengthError = createDomainErrorFactory({
  code: 'INVALID_EMAIL_LENGTH',
  message: `Please provide an email that consists of ${userRules.email.MIN_LENGTH} to ${userRules.email.MAX_LENGTH} characters.`,
});

export const InvalidNameError = createDomainErrorFactory({
  code: 'INVALID_NAME',
  message: 'Please provide a name that consists of only letters.',
});

export const InvalidNameLengthError = createDomainErrorFactory({
  code: 'INVALID_NAME_LENGTH',
  message: `Please provide a name that consists of ${userRules.name.MIN_LENGTH} to ${userRules.name.MAX_LENGTH} characters.`,
});

export const InvalidPasswordLengthError = createDomainErrorFactory({
  code: 'INVALID_PASSWORD_LENGTH',
  message: `Please provide a password that consists of ${userRules.password.MIN_LENGTH} to ${userRules.password.MAX_LENGTH} characters.`,
});

export const InvalidUsernameError = createDomainErrorFactory({
  code: 'INVALID_USERNAME',
  message: 'Please provide a username that consists of only letters, numbers and underscores.',
});

export const InvalidUsernameLengthError = createDomainErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
});

export const NoUserCreatedYetError = createDomainErrorFactory({
  code: 'NO_USER_CREATED_YET',
  message: 'There is no user created yet.',
});

export const SingleUserOnlyError = createDomainErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: 'Only one user registration per application is permitted.',
});

export const UserPermissionDeniedError = createDomainErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: 'You do not have sufficient permissions to perform this action.',
});

export const UserUpdateFailedError = createDomainErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: 'The user you attempted to update could not be updated.',
});
