import {
  ExperienceEntity,
  CreateExperienceEntity,
  UpdateExperienceEntity,
} from '../entities/experience/experience-entity';

export interface IExperienceRepositoryReader {
  getExperiences: () => Promise<ExperienceEntity[]>;
  getExperienceByUsername: (username: string) => Promise<ExperienceEntity | null>;
}

interface IExperienceRepositoryWriter {
  createExperience: (
    payload: CreateExperienceEntity
  ) => Promise<ExperienceEntity>;

  updateExperienceByUsername: (
    username: string,
    payload: UpdateExperienceEntity
  ) => Promise<ExperienceEntity | null>;
}

interface IExperienceRepository extends IExperienceRepositoryReader, IExperienceRepositoryWriter {}

export default IExperienceRepository;
