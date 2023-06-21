import { createUserRules } from '../entities/validations/user-validations';
import { createAboutRules } from '../entities/validations/about-validations';

export type DomainErrorCode =
  | 'USER_NOT_FOUND_DOMAIN_ERROR'
  | 'SINGLE_USER_ONLY_DOMAIN_ERROR'
  | 'PERMISSION_DENIED_DOMAIN_ERROR'
  | 'USER_UPDATE_FAILED_DOMAIN_ERROR'
  | 'INVALID_NAME_LENGTH_DOMAIN_ERROR'
  | 'INVALID_CREDENTIALS_DOMAIN_ERROR'
  | 'INVALID_QUOTE_LENGTH_DOMAIN_ERROR'
  | 'EMAIL_ALREADY_EXISTS_DOMAIN_ERROR'
  | 'USER_CREATION_FAILED_DOMAIN_ERROR'
  | 'USERNAME_ALREADY_EXISTS_DOMAIN_ERROR'
  | 'INVALID_INTEREST_LENGTH_DOMAIN_ERROR'
  | 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR'
  | 'INVALID_POSITION_LENGTH_DOMAIN_ERROR'
  | 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR';

export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export const INVALID_CREDENTIALS: DomainError = {
  code: 'INVALID_CREDENTIALS_DOMAIN_ERROR',
  message: 'Invalid credentials. Please verify your username and password and try again.',
};

export const EMAIL_ALREADY_EXISTS: DomainError = {
  code: 'EMAIL_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Email already exists. Please choose a different email address.',
};

export const USERNAME_ALREADY_EXISTS: DomainError = {
  code: 'USERNAME_ALREADY_EXISTS_DOMAIN_ERROR',
  message: 'Username already exists. Please choose a different username.',
};

export const INVALID_INTEREST_LENGTH: DomainError = {
  code: 'INVALID_INTEREST_LENGTH_DOMAIN_ERROR',
  message: `Please provide an interest that consists of ${createAboutRules.interest.MIN_LENGTH} to ${createAboutRules.interest.MAX_LENGTH} characters.`,
};

export const INVALID_NAME_LENGTH: DomainError = {
  code: 'INVALID_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${createUserRules.name.MIN_LENGTH} to ${createUserRules.name.MAX_LENGTH} characters.`,
};

export const INVALID_PASSWORD_LENGTH: DomainError = {
  code: 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR',
  message: `Password must contain a minimum of ${createUserRules.password.MIN_LENGTH} characters.`,
};

export const INVALID_POSITION_LENGTH: DomainError = {
  code: 'INVALID_POSITION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a position that consists of ${createAboutRules.position.MIN_LENGTH} to ${createAboutRules.position.MAX_LENGTH} characters.`,
};

export const INVALID_QUOTE_LENGTH: DomainError = {
  code: 'INVALID_QUOTE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a quote that consists of ${createAboutRules.quote.MIN_LENGTH} to ${createAboutRules.quote.MAX_LENGTH} characters.`,
};

export const INVALID_USERNAME_LENGTH: DomainError = {
  code: 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a quote that consists of ${createUserRules.username.MIN_LENGTH} to ${createUserRules.username.MAX_LENGTH} characters.`,
};

export const USER_CREATION_FAILED: DomainError = {
  code: 'USER_CREATION_FAILED_DOMAIN_ERROR',
  message: 'User creation failed.',
};

export const USER_UPDATE_FAILED: DomainError = {
  code: 'USER_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'User update failed.',
};

export const USER_NOT_FOUND: DomainError = {
  code: 'USER_NOT_FOUND_DOMAIN_ERROR',
  message: 'User not found.',
};

export const SINGLE_USER_ONLY: DomainError = {
  code: 'SINGLE_USER_ONLY_DOMAIN_ERROR',
  message: 'Single user only. Only one user is allowed.',
};

export const PERMISSION_DENIED: DomainError = {
  code: 'PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have permission to access this resource.',
};
