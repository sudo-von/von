export type DomainErrorCode =
  | 'PROFILE_CREATION_FAILED_DOMAIN_ERROR'
  | 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR'
  | 'PROFILE_NOT_FOUND_DOMAIN_ERROR';

export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export const PROFILE_CREATION_FAILED: DomainError = {
  code: 'PROFILE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Profile creation failed.',
};

export const SINGLE_PROFILE_ONLY: DomainError = {
  code: 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR',
  message: 'Only one profile is allowed.',
};

export const PROFILE_NOT_FOUND: DomainError = {
  code: 'PROFILE_NOT_FOUND_DOMAIN_ERROR',
  message: 'PROFILE not found.',
};
