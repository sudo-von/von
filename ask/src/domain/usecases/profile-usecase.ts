import IProfileRepository from '../repositories/profile-repository';
import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';

interface IProfileUsecaseReader {}

interface IProfileUsecaseWriter {
  createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity>;
}

interface IProfileUsecase extends IProfileUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(protected profileRepository: IProfileRepository) {}

  abstract createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity>;
}

export default ProfileUsecase;
