import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../entities/profile-entity';

export interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>;
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (payload: CreateProfileEntity) => Promise<ProfileEntity | null>;
  updateProfileById: (id: string, payload: UpdateProfileEntity) => Promise<ProfileEntity | null>;
}

interface IProfileRepository extends IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
