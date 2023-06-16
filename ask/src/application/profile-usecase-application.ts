import ProfileUsecase from '../domain/usecases/profile-usecase';
import { CreateProfileEntity, ProfileEntity, UpdateProfileEntity } from '../domain/entities/profile-entity';
import { SingleProfileOnlyError, ProfileCreationFailedError, ProfileNotFoundError } from '../domain/errors/error-factories';

class ProfileUsecaseApplication extends ProfileUsecase {
  getProfileByUsername = async (username: string): Promise<ProfileEntity> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    return profile;
  };

  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const createdProfile = await this.profileRepository.createProfile(payload);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };

  increaseTotalViewsByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileEntity = {
      userId: profile.userId,
      username: profile.username,
      statistics: {
        total_answers: profile.statistics.total_answers,
        total_questions: profile.statistics.total_questions,
        total_views: profile.statistics.total_views + 1,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };

  increaseTotalAnswersByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileEntity = {
      userId: profile.userId,
      username: profile.username,
      statistics: {
        total_answers: profile.statistics.total_answers + 1,
        total_questions: profile.statistics.total_questions,
        total_views: profile.statistics.total_views,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };

  increaseTotalQuestionsByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileEntity = {
      userId: profile.userId,
      username: profile.username,
      statistics: {
        total_answers: profile.statistics.total_answers,
        total_questions: profile.statistics.total_questions + 1,
        total_views: profile.statistics.total_views,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };
}

export default ProfileUsecaseApplication;
