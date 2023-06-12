import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';

interface IProfileReaderRepository {
  getProfiles: () => Promise<ProfileEntity[]>
  getProfileByUsername: (username: string) => Promise<ProfileEntity | null>;
}

interface IProfileWriterRepository {
  createProfile: (userPayload: CreateProfileEntity) => Promise<ProfileEntity | null>;
}

interface IProfileRepository extends IProfileReaderRepository, IProfileWriterRepository {}

export default IProfileRepository;
