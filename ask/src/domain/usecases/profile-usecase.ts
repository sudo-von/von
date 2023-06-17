import { CreateProfileEntity, ProfileEntity } from '../entities/profile-entity';
import IProfileRepository from '../repositories/profile-repository';
import IQuestionRepository from '../repositories/question-repository';

interface IProfileUsecaseReader {
  getProfileByUsername: (username: string) => Promise<ProfileEntity>
}

interface IProfileUsecaseWriter {
  increaseTotalViewsByUsername: (username: string) => Promise<void>;
  increaseTotalAnswersByUsername: (username: string) => Promise<void>;
  increaseTotalQuestionsByUsername: (username: string) => Promise<void>;
  createProfile: (profilePayload: CreateProfileEntity) => Promise<ProfileEntity>;
}

interface IProfileUsecase extends IProfileUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(
    protected profileRepository: IProfileRepository,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract getProfileByUsername: (username: string) => Promise<ProfileEntity>;

  abstract increaseTotalViewsByUsername: (username: string) => Promise<void>;

  abstract increaseTotalAnswersByUsername: (username: string) => Promise<void>;

  abstract increaseTotalQuestionsByUsername: (username: string) => Promise<void>;

  abstract createProfile: (payload: CreateProfileEntity) => Promise<ProfileEntity>;
}

export default ProfileUsecase;
