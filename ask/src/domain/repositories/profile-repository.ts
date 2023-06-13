import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';

interface IProfileRepositoryReader {
  getProfiles: () => Promise<ProfileEntity[]>
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileRepositoryWriter {
  createProfile: (userPayload: CreateProfileEntity) => Promise<ProfileEntity | null>;
}

interface IProfileRepository extends IProfileRepositoryReader, IProfileRepositoryWriter {}

export default IProfileRepository;
