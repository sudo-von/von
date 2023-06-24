import { profileRules } from '../entities/validations/profile-validations';

export type DomainErrorCode =
  | 'INVALID_PROFILE_NAME_LENGTH_DOMAIN_ERROR'
  | 'INVALID_PROFILE_QUOTE_LENGTH_DOMAIN_ERROR'
  | 'INVALID_PROFILE_POSITION_LENGTH_DOMAIN_ERROR'
  | 'INVALID_PROFILE_INTEREST_LENGTH_DOMAIN_ERROR'
  | 'INVALID_PROFILE_PICTURE_LENGTH_DOMAIN_ERROR'
  | 'PERMISSION_DENIED_DOMAIN_ERROR'
  | 'PROFILE_CREATION_FAILED_DOMAIN_ERROR'
  | 'PROFILE_NOT_FOUND_DOMAIN_ERROR'
  | 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR';

export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export const INVALID_PROFILE_NAME_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${profileRules.name.MIN_LENGTH} to ${profileRules.name.MAX_LENGTH} characters.`,
};

export const INVALID_PROFILE_QUOTE_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_QUOTE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a quote that consists of ${profileRules.quote.MIN_LENGTH} to ${profileRules.quote.MAX_LENGTH} characters.`,
};

export const INVALID_PROFILE_POSITION_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_POSITION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a position that consists of ${profileRules.position.MIN_LENGTH} to ${profileRules.position.MAX_LENGTH} characters.`,
};

export const INVALID_PROFILE_INTEREST_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_INTEREST_LENGTH_DOMAIN_ERROR',
  message: `Please provide an interest that consists of ${profileRules.interest.MIN_LENGTH} to ${profileRules.interest.MAX_LENGTH} characters.`,
};

export const INVALID_PROFILE_PICTURE_LENGTH: DomainError = {
  code: 'INVALID_PROFILE_PICTURE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a profile picture url that consists of ${profileRules.profilePicture.MIN_LENGTH} to ${profileRules.profilePicture.MAX_LENGTH} characters.`,
};

export const PERMISSION_DENIED: DomainError = {
  code: 'PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have permission to access this resource.',
};

export const PROFILE_CREATION_FAILED: DomainError = {
  code: 'PROFILE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Profile creation failed.',
};

export const PROFILE_NOT_FOUND: DomainError = {
  code: 'PROFILE_NOT_FOUND_DOMAIN_ERROR',
  message: 'Profile not found.',
};

export const SINGLE_PROFILE_ONLY: DomainError = {
  code: 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR',
  message: 'Only one profile is allowed.',
};
