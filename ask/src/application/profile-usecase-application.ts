import ProfileUsecase from '../domain/usecases/profile-usecase';
import {
  ProfileEntity,
  CreateProfileEntity,
  CreateProfileWithMetricsEntity,
  UpdateProfileWithMetricsEntity,
} from '../domain/entities/profile-entity';
import { SingleProfileOnlyError, ProfileCreationFailedError, ProfileNotFoundError } from '../domain/errors/error-factories';

class ProfileUsecaseApplication extends ProfileUsecase {
  getProfileByUsername = async (username: string): Promise<ProfileEntity> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const questions = await this.questionRepository.getUnansweredQuestionsByUser(username);
    const answeredQuestions = await this.questionRepository.getAnsweredQuestionsByUser(username);

    profile.metrics.totalAnswers = answeredQuestions.length;
    profile.metrics.totalQuestions = answeredQuestions.length + questions.length;

    return profile;
  };

  increaseTotalViewsByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileWithMetricsEntity = {
      userId: profile.userId,
      username: profile.username,
      metrics: {
        totalAnswers: profile.metrics.totalAnswers,
        totalQuestions: profile.metrics.totalQuestions,
        totalViews: profile.metrics.totalViews + 1,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };

  increaseTotalAnswersByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileWithMetricsEntity = {
      userId: profile.userId,
      username: profile.username,
      metrics: {
        totalAnswers: profile.metrics.totalAnswers + 1,
        totalQuestions: profile.metrics.totalQuestions,
        totalViews: profile.metrics.totalViews,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };

  increaseTotalQuestionsByUsername = async (username: string): Promise<void> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const payload: UpdateProfileWithMetricsEntity = {
      userId: profile.userId,
      username: profile.username,
      metrics: {
        totalAnswers: profile.metrics.totalAnswers,
        totalQuestions: profile.metrics.totalQuestions + 1,
        totalViews: profile.metrics.totalViews,
      },
    };

    await this.profileRepository.updateProfileById(profile.id, payload);
  };

  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    const profiles = await this.profileRepository.getProfiles();
    if (profiles.length) throw SingleProfileOnlyError;

    const profileWithMetrics: CreateProfileWithMetricsEntity = {
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalAnswers: 0,
        totalQuestions: 0,
        totalViews: 0,
      },
    };

    const createdProfile = await this.profileRepository.createProfile(profileWithMetrics);
    if (!createdProfile) throw ProfileCreationFailedError;

    return createdProfile;
  };
}

export default ProfileUsecaseApplication;
