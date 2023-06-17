import { CreateProfileWithMetricsEntity, ProfileEntity, UpdateProfileEntity } from '../entities/profile-entity';

export interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>;
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (payload: CreateProfileWithMetricsEntity) => Promise<ProfileEntity | null>;
  updateProfileById: (id: string, payload: UpdateProfileEntity) => Promise<void>;
}

interface IProfileRepository extends IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
