import { DomainError } from './error-codes';
import { userRules } from '../entities/user/validations/user-validations';
import { createDomainErrorFactory } from './error-factory';

export const INVALID_USER_USERNAME_LENGTH: DomainError = {
  code: 'INVALID_USER_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
};

export const SINGLE_USER_ONLY: DomainError = {
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Only one user is allowed.',
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

export const USERNAME_ALREADY_EXISTS: DomainError = {
  code: 'USERNAME_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Username already exists. Please choose a different username.',
};

export const InvalidUsernameNameLengthError = createDomainErrorFactory(
  INVALID_USER_USERNAME_LENGTH,
);

export const SingleUserOnlyError = createDomainErrorFactory(
  SINGLE_USER_ONLY,
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

export const UsernameAlreadyExistsError = createDomainErrorFactory(
  USERNAME_ALREADY_EXISTS,
);
