import crypto from 'crypto';
import {
  CreateProfileWithMetricsEntity,
  ProfileEntity,
  UpdateProfileEntity,
} from '../../../domain/entities/profile-entity';
import IProfileRepository from '../../../domain/repositories/profile-repository';

class InMemoryProfileRepository implements IProfileRepository {
  private profilesInMemory: ProfileEntity[] = [];

  getProfiles = async (): Promise<ProfileEntity[]> => this.profilesInMemory;

  getProfileByUsername = async (username: string): Promise<ProfileEntity | null> => {
    const profile = this.profilesInMemory.find((p) => p.username === username) || null;
    return profile;
  };

  createProfile = async (
    profilePayload: CreateProfileWithMetricsEntity,
  ): Promise<ProfileEntity | null> => {
    const profile: ProfileEntity = {
      ...profilePayload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.profilesInMemory.push(profile);
    return profile;
  };

  updateProfileById = async (
    id: string,
    profilePayload: UpdateProfileEntity,
  ): Promise<void> => {
    this.profilesInMemory = this.profilesInMemory.map((profile) => {
      if (profile.id !== id) return profile;
      return {
        ...profilePayload,
        id,
      };
    });
  };
}

export default InMemoryProfileRepository;
