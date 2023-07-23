import {
  UserNotFoundError,
  UserPermissionDeniedError,
} from '../domain/entities/user/user-errors';
import {
  ProfileNotFoundError,
  SingleProfileOnlyError,
  ProfileUpdateFailedError,
} from '../domain/entities/profile/profile-errors';
import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../domain/entities/profile/profile-entity';
import ProfileUsecase from '../domain/usecases/profile-usecase';
import validateProfileUpdate from '../domain/entities/profile/validations/update-profile-validations';
import validateProfileCreation from '../domain/entities/profile/validations/create-profile-validations';

class ProfileUsecaseApplication extends ProfileUsecase {
  getProfileByUsername = async (username: string): Promise<ProfileEntity> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;
    return profile;
  };

  createProfile = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateProfileEntity,
  ): Promise<ProfileEntity> => {
    if (requestingUsername !== requestedUsername) throw UserPermissionDeniedError;

    validateProfileCreation(payload);

    const userFound = await this.userRepository.getUserByUsername(payload.username);
    if (!userFound) throw UserNotFoundError;

    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const createdProfile = await this.profileRepository.createProfile(payload);
    return createdProfile;
  };

  updateProfileByUsername = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateProfileEntity,
  ): Promise<ProfileEntity> => {
    if (requestingUsername !== requestedUsername) throw UserPermissionDeniedError;

    validateProfileUpdate(payload);

    const updatedProfile = await this.profileRepository.updateProfileByUsername(
      requestedUsername,
      payload,
    );
    if (!updatedProfile) throw ProfileUpdateFailedError;

    return updatedProfile;
  };
}

export default ProfileUsecaseApplication;
