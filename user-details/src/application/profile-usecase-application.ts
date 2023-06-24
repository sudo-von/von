import { CreateProfileEntity, ProfileEntity } from '../domain/entities/profile-entity';
import { ProfileNotFoundError, SingleProfileOnlyError } from '../domain/errors/error-factories';
import ProfileUsecase from '../domain/usecases/profile-usecase';

class ProfileUsecaseApplication extends ProfileUsecase {
  getProfileByUsername = async (username: string): Promise<ProfileEntity> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;
    return profile;
  };

  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const profile = await this.profileRepository.getProf(payload.userId);

    const createdProfile = await this.profileRepository.createProfile(payload);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };
}

export default ProfileUsecaseApplication;
