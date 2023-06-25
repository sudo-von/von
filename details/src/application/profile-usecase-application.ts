import {
  InvalidUsernameNameLengthError,
  PermissionDeniedError,
} from '../domain/errors/user-error';
import {
  ProfileNotFoundError,
  SingleProfileOnlyError,
  ProfileUpdateFailedError,
  ProfileCreationFailedError,
  InvalidProfileQuoteLengthError,
  InvalidProfileInterestLengthError,
} from '../domain/errors/profile-error';
import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../domain/entities/profile-entity';
import {
  validateInterest,
  validatePosition,
  validateQuote,
} from '../domain/validations/profile-validations';
import ProfileUsecase from '../domain/usecases/profile-usecase';
import { validateUsername } from '../domain/validations/user-validations';

class ProfileUsecaseApplication extends ProfileUsecase {
  getProfileByUsername = async (username: string): Promise<ProfileEntity> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;
    return profile;
  };

  createProfile = async (
    payload: CreateProfileEntity,
  ): Promise<ProfileEntity> => {
    const isQuoteValid = validateQuote(payload.quote);
    if (!isQuoteValid) throw InvalidProfileQuoteLengthError;

    const isInterestValid = validateInterest(payload.interest);
    if (!isInterestValid) throw InvalidProfileInterestLengthError;

    const isPositionValid = validatePosition(payload.position);
    if (!isPositionValid) throw InvalidProfileQuoteLengthError;

    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameNameLengthError;

    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const createdProfile = await this.profileRepository.createProfile(payload);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };

  updateProfileByUsername = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateProfileEntity,
  ): Promise<ProfileEntity> => {
    if (requestingUsername !== requestedUsername) throw PermissionDeniedError;

    const isQuoteValid = validateQuote(payload.quote);
    if (!isQuoteValid) throw InvalidProfileQuoteLengthError;

    const isInterestValid = validateInterest(payload.interest);
    if (!isInterestValid) throw InvalidProfileInterestLengthError;

    const isPositionValid = validatePosition(payload.position);
    if (!isPositionValid) throw InvalidProfileQuoteLengthError;

    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameNameLengthError;

    const updatedProfile = await this.profileRepository.updateProfileByUsername(
      requestedUsername,
      payload,
    );
    if (!updatedProfile) throw ProfileUpdateFailedError;

    return updatedProfile;
  };
}

export default ProfileUsecaseApplication;
