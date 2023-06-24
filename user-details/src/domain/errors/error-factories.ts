import { createDomainErrorFactory } from './error-factory';
import {
  INVALID_PROFILE_NAME_LENGTH,
  INVALID_PROFILE_QUOTE_LENGTH,
  INVALID_PROFILE_POSITION_LENGTH,
  INVALID_PROFILE_INTEREST_LENGTH,
  INVALID_PROFILE_PICTURE_LENGTH,
  PERMISSION_DENIED,
  PROFILE_CREATION_FAILED,
  PROFILE_NOT_FOUND,
  SINGLE_PROFILE_ONLY,
} from './errors';

export const InvalidProfileNameLength = createDomainErrorFactory(
  INVALID_PROFILE_NAME_LENGTH,
);
export const InvalidProfileQuoteLength = createDomainErrorFactory(
  INVALID_PROFILE_QUOTE_LENGTH,
);
export const InvalidProfilePositionLength = createDomainErrorFactory(
  INVALID_PROFILE_POSITION_LENGTH,
);
export const InvalidProfileInterestLength = createDomainErrorFactory(
  INVALID_PROFILE_INTEREST_LENGTH,
);
export const InvalidProfilePictureLength = createDomainErrorFactory(
  INVALID_PROFILE_PICTURE_LENGTH,
);

export const PermissionDeniedError = createDomainErrorFactory(
  PERMISSION_DENIED,
);

export const ProfileCreationFailedError = createDomainErrorFactory(
  PROFILE_CREATION_FAILED,
);
export const ProfileNotFoundError = createDomainErrorFactory(
  PROFILE_NOT_FOUND,
);

export const SingleProfileOnlyError = createDomainErrorFactory(
  SINGLE_PROFILE_ONLY,
);
