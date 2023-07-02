import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userRules from './user-rules';

export const InvalidUsernameNameLengthError = createDomainErrorFactory({
  code: 'INVALID_USER_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
});

export const SingleUserOnlyError = createDomainErrorFactory({
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Only one user is allowed.',
});

export const UserCreationFailedError = createDomainErrorFactory({
  code: 'USER_CREATION_FAILED_DOMAIN_ERROR',
  message: 'User creation failed.',
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
