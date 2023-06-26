import { DomainError } from './error-codes';
import { userRules } from '../validations/user-validations';
import { createDomainErrorFactory } from './error-factory';

export const EMAIL_ALREADY_EXISTS: DomainError = {
  code: 'EMAIL_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Email already exists. Please choose a different email address.',
};

export const INVALID_USERNAME_LENGTH: DomainError = {
  code: 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a quote that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
};

export const INVALID_NAME_LENGTH: DomainError = {
  code: 'INVALID_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${userRules.name.MIN_LENGTH} to ${userRules.name.MAX_LENGTH} characters.`,
};

export const INVALID_PASSWORD_LENGTH: DomainError = {
  code: 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR',
  message: `Password must contain a minimum of ${userRules.password.MIN_LENGTH} characters.`,
};

export const INVALID_PROFILE_PICTURE_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_PICTURE_LENGTH_DOMAIN_ERROR',
  message: `Profile picture must not exceed ${userRules.profilePicture.MAX_LENGTH} characters.`,
};

export const SINGLE_USER_ONLY: DomainError = {
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Single user only. Only one user is allowed.',
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

export const EmailAlreadyExistsError = createDomainErrorFactory(EMAIL_ALREADY_EXISTS);

export const InvalidUsernameLengthError = createDomainErrorFactory(INVALID_USERNAME_LENGTH);

export const InvalidNameLengthError = createDomainErrorFactory(INVALID_NAME_LENGTH);

export const InvalidPasswordLengthError = createDomainErrorFactory(INVALID_PASSWORD_LENGTH);

export const InvalidProfilePictureLengthError = createDomainErrorFactory(INVALID_PASSWORD_LENGTH);

export const SingleUserOnlyError = createDomainErrorFactory(SINGLE_USER_ONLY);

export const UserCreationFailedError = createDomainErrorFactory(USER_CREATION_FAILED);

export const UserNotFoundError = createDomainErrorFactory(USER_NOT_FOUND);

export const UserUpdateFailedError = createDomainErrorFactory(USER_UPDATE_FAILED);

export const UsernameAlreadyExistsError = createDomainErrorFactory(USERNAME_ALREADY_EXISTS);
