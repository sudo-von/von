import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../entities/profile/profile-entity';

interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>;
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (
    payload: CreateProfileEntity
  ) => Promise<ProfileEntity>;

  updateProfileByUsername: (
    username: string,
    payload: UpdateProfileEntity
  ) => Promise<ProfileEntity | null>;
}

interface IProfileRepository extends
  IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
