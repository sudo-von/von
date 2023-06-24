import { DomainError } from './error-codes';
import { userRules } from '../validations/user-validations';
import { createDomainErrorFactory } from './error-factory';

export const INVALID_USER_USERNAME_LENGTH: DomainError = {
  code: 'INVALID_USER_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
};

export const USER_CREATION_FAILED: DomainError = {
  code: 'USER_CREATION_FAILED_DOMAIN_ERROR',
  message: 'User creation failed.',
};

export const USER_NOT_FOUND: DomainError = {
  code: 'USER_NOT_FOUND_DOMAIN_ERROR',
  message: 'User not found.',
};

export const USER_UPDATE_FAILED: DomainError = {
  code: 'USER_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'User update failed.',
};

export const SINGLE_USER_ONLY: DomainError = {
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Only one user is allowed.',
};

export const PERMISSION_DENIED: DomainError = {
  code: 'PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have permission to access this resource.',
};

export const InvalidUserUsernameNameLengthError = createDomainErrorFactory(
  INVALID_USER_USERNAME_LENGTH,
);

export const UserCreationFailedError = createDomainErrorFactory(
  USER_CREATION_FAILED,
);

export const UserNotFoundError = createDomainErrorFactory(
  USER_NOT_FOUND,
);

export const UserUpdateFailedError = createDomainErrorFactory(
  USER_UPDATE_FAILED,
);

export const SingleUserOnlyError = createDomainErrorFactory(
  SINGLE_USER_ONLY,
);

export const PermissionDeniedError = createDomainErrorFactory(
  PERMISSION_DENIED,
);
