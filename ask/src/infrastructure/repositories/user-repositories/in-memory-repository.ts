import crypto from 'crypto';
import { CreateProfileEntity, ProfileEntity } from '../../../domain/entities/profile-entity';
import IProfileRepository from '../../../domain/repositories/profile-repository';

class InMemoryProfileRepository implements IProfileRepository {
  private profilesInMemory: ProfileEntity[] = [];

  getProfiles = async (): Promise<ProfileEntity[]> => this.profilesInMemory;

  getProfileByUsername = async (username: string): Promise<ProfileEntity | null> => {
    const profile = this.profilesInMemory.find((p) => p.username === username) || null;
    return profile;
  };

  createProfile = async (profilePayload: CreateProfileEntity): Promise<ProfileEntity | null> => {
    const profile: ProfileEntity = {
      ...profilePayload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.profilesInMemory.push(profile);
    return profile;
  };
}

export default InMemoryProfileRepository;
