import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';

export interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>;
  getProfileByUserId: (userId: string) => Promise<ProfileEntity | null>;
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity | null>;
}

interface IProfileRepository extends IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
