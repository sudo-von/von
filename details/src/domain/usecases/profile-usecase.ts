import IProfileRepository from '../repositories/profile-repository';
import { ProfileEntity, CreateProfileEntity } from '../entities/profile-entity';

interface IProfileUsecaseReader {
  getProfileByUsername: (username: string) => Promise<ProfileEntity>;
}

interface IProfileUsecaseWriter {
  createProfile: (payload: CreateProfileEntity) => Promise<ProfileEntity>;
}

interface IProfileUsecase extends IProfileUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(protected profileRepository: IProfileRepository) {}

  abstract getProfileByUsername: (username: string) => Promise<ProfileEntity>;

  abstract createProfile: (payload: CreateProfileEntity) => Promise<ProfileEntity>;
}

export default ProfileUsecase;
