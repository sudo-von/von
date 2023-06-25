import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../entities/profile-entity';
import IProfileRepository from '../repositories/profile-repository';

interface IProfileUsecaseReader {
  getProfileByUsername: (username: string) => Promise<ProfileEntity>;
}

interface IProfileUsecaseWriter {
  createProfile: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateProfileEntity
  ) => Promise<ProfileEntity>;

  updateProfileByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateProfileEntity
  ) => Promise<ProfileEntity>;
}

interface IProfileUsecase extends IProfileUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(protected profileRepository: IProfileRepository) {}

  abstract getProfileByUsername: (username: string) => Promise<ProfileEntity>;

  abstract createProfile: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateProfileEntity
  ) => Promise<ProfileEntity>;

  abstract updateProfileByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateProfileEntity
  ) => Promise<ProfileEntity>;
}

export default ProfileUsecase;
