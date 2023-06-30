import {
  DomainError,
} from './error-codes';
import {
  createDomainErrorFactory,
} from './error-factory';
import profileRules from '../entities/profile/validations/profile-rules';

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

export const PROFILE_CREATION_FAILED: DomainError = {
  code: 'PROFILE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Profile creation failed.',
};

export const PROFILE_NOT_FOUND: DomainError = {
  code: 'PROFILE_NOT_FOUND_DOMAIN_ERROR',
  message: 'Profile not found.',
};

export const PROFILE_UPDATE_FAILED: DomainError = {
  code: 'PROFILE_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Profile update failed.',
};

export const SINGLE_PROFILE_ONLY: DomainError = {
  code: 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR',
  message: 'Only one profile is allowed.',
};

export const InvalidProfileQuoteLengthError = createDomainErrorFactory(
  INVALID_PROFILE_QUOTE_LENGTH,
);

export const InvalidProfilPositionLengthError = createDomainErrorFactory(
  INVALID_PROFILE_POSITION_LENGTH,
);

export const InvalidProfileInterestLengthError = createDomainErrorFactory(
  INVALID_PROFILE_INTEREST_LENGTH,
);

export const ProfileCreationFailedError = createDomainErrorFactory(
  PROFILE_CREATION_FAILED,
);

export const ProfileNotFoundError = createDomainErrorFactory(
  PROFILE_NOT_FOUND,
);

export const ProfileUpdateFailedError = createDomainErrorFactory(
  PROFILE_UPDATE_FAILED,
);

export const SingleProfileOnlyError = createDomainErrorFactory(
  SINGLE_PROFILE_ONLY,
);
