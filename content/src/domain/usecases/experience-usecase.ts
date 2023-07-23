import {
  ExperienceEntity,
  CreateExperienceEntity,
  UpdateExperienceEntity,
} from '../entities/experience/experience-entity';
import IUserRepository from '../repositories/user-repository';
import IExperienceRepository from '../repositories/experience-repository';

interface IExperienceUsecaseReader {
  getExperienceByUsername: (username: string) => Promise<ExperienceEntity>;
}

interface IExperienceUsecaseWriter {
  createExperience: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateExperienceEntity
  ) => Promise<ExperienceEntity>;

  updateExperienceByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateExperienceEntity
  ) => Promise<ExperienceEntity>;
}

interface IExperienceUsecase extends IExperienceUsecaseReader, IExperienceUsecaseWriter {}

abstract class ExperienceUsecase implements IExperienceUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected experienceRepository: IExperienceRepository,
  ) {}

  abstract getExperienceByUsername: (username: string) => Promise<ExperienceEntity>;

  abstract createExperience: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateExperienceEntity
  ) => Promise<ExperienceEntity>;

  abstract updateExperienceByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateExperienceEntity
  ) => Promise<ExperienceEntity>;
}

export default ExperienceUsecase;
