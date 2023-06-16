import { CreateProfileEntity, ProfileEntity, UpdateProfileEntity } from '../entities/profile-entity';

export interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>;
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity | null>;
  updateProfileById: (id: string, profilePayload: UpdateProfileEntity) => Promise<void>;
}

interface IProfileRepository extends IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
