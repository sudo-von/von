import {
  DomainError,
} from './error-codes';
import {
  createDomainErrorFactory,
} from './error-factory';
import userRules from '../entities/user/user-rules';

export const EMAIL_ALREADY_EXISTS: DomainError = {
  code: 'EMAIL_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Email already exists. Please choose a different email address.',
};

export const INVALID_EMAIL_LENGTH: DomainError = {
  code: 'INVALID_EMAIL_LENGTH_DOMAIN_ERROR',
  message: `Please provide an email that consists of ${userRules.email.MIN_LENGTH} to ${userRules.email.MAX_LENGTH} characters.`,
};

export const INVALID_USERNAME_LENGTH: DomainError = {
  code: 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
};

export const INVALID_NAME_LENGTH: DomainError = {
  code: 'INVALID_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${userRules.name.MIN_LENGTH} to ${userRules.name.MAX_LENGTH} characters.`,
};

export const INVALID_PASSWORD_LENGTH: DomainError = {
  code: 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR',
  message: `Please provide a password that consists of ${userRules.password.MIN_LENGTH} to ${userRules.password.MAX_LENGTH} characters.`,
};

export const INVALID_PROFILE_PICTURE_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_PICTURE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a profile picture that consists of ${userRules.profilePicture.MIN_LENGTH} to ${userRules.profilePicture.MAX_LENGTH} characters.`,
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

export const EmailAlreadyExistsError = createDomainErrorFactory(
  EMAIL_ALREADY_EXISTS,
);

export const InvalidEmailLengthError = createDomainErrorFactory(
  INVALID_EMAIL_LENGTH,
);

export const InvalidUsernameLengthError = createDomainErrorFactory(
  INVALID_USERNAME_LENGTH,
);

export const InvalidNameLengthError = createDomainErrorFactory(
  INVALID_NAME_LENGTH,
);

export const InvalidPasswordLengthError = createDomainErrorFactory(
  INVALID_PASSWORD_LENGTH,
);

export const InvalidProfilePictureLengthError = createDomainErrorFactory(
  INVALID_PROFILE_PICTURE_LENGTH,
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
