import IProfileRepository from '../repositories/profile-repository';
import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';

interface IProfileUsecaseReader {}

interface IProfileUsecaseWriter {
  createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity>;
  increaseProfileViewsByUsername: (username: string) => Promise<void>;
}

interface IProfileUsecase extends IProfileUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(protected profileRepository: IProfileRepository) {}

  abstract createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity>;

  abstract increaseProfileViewsByUsername: (username: string) => Promise<void>;
}

export default ProfileUsecase;
