import { CreateProfileEntity, ProfileEntity } from '../domain/entities/profile-entity';
import ProfileUsecase from '../domain/usecases/profile-usecase';
import { SingleProfileOnlyError, ProfileCreationFailedError } from '../domain/errors/error-factories';

class ProfileUsecaseApplication extends ProfileUsecase {
  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const createdProfile = await this.profileRepository.createProfile(payload);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };
}

export default ProfileUsecaseApplication;
