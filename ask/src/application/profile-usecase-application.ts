import { CreateProfileEntity, ProfileEntity } from '../domain/entities/profile-entity';
import ProfileUsecase from '../domain/usecases/profile-usecase';
import { SingleProfileOnlyError, ProfileCreationFailedError } from '../domain/errors/error-factories';

class ProfileUsecaseApplication extends ProfileUsecase {
  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    console.log('🚀 ~ file: profile-usecase-application.ts:7 ~ ProfileUsecaseApplication ~ createProfile= ~ payload:', payload);
    const profiles = await this.profileRepository.getProfiles();
    console.log('🚀 ~ file: profile-usecase-application.ts:9 ~ ProfileUsecaseApplication ~ createProfile= ~ profiles:', profiles);
    if (profiles) throw SingleProfileOnlyError;

    const createdProfile = await this.profileRepository.createProfile(payload);
    console.log('🚀 ~ file: profile-usecase-application.ts:12 ~ ProfileUsecaseApplication ~ createProfile= ~ createdProfile:', createdProfile);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };
}

export default ProfileUsecaseApplication;
