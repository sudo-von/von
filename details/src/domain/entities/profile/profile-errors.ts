import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import profileRules from './profile-rules';

export const InvalidProfileQuoteLengthError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_QUOTE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a quote that consists of ${profileRules.quote.MIN_LENGTH} to ${profileRules.quote.MAX_LENGTH} characters.`,
});

export const InvalidProfilPositionLengthError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_POSITION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a position that consists of ${profileRules.position.MIN_LENGTH} to ${profileRules.position.MAX_LENGTH} characters.`,
});

export const InvalidProfileInterestLengthError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_INTEREST_LENGTH_DOMAIN_ERROR',
  message: `Please provide an interest that consists of ${profileRules.interest.MIN_LENGTH} to ${profileRules.interest.MAX_LENGTH} characters.`,
});

export const ProfileCreationFailedError = createDomainErrorFactory({
  code: 'PROFILE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Profile creation failed.',
});

export const ProfileNotFoundError = createDomainErrorFactory({
  code: 'PROFILE_NOT_FOUND_DOMAIN_ERROR',
  message: 'Profile not found.',
});

export const ProfileUpdateFailedError = createDomainErrorFactory({
  code: 'PROFILE_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Profile update failed.',
});

export const SingleProfileOnlyError = createDomainErrorFactory({
  code: 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR',
  message: 'Only one profile is allowed.',
});
