import {
  IntroductionEntity,
  CreateIntroductionEntity,
  UpdateIntroductionEntity,
} from '../entities/introduction/introduction-entity';

export interface IIntroductionRepositoryReader {
  getIntroductions: () => Promise<IntroductionEntity[]>;
  getIntroductionByUsername: (username: string) => Promise<IntroductionEntity | null>;
}

interface IIntroductionRepositoryWriter {
  createIntroduction: (
    payload: CreateIntroductionEntity
  ) => Promise<IntroductionEntity>;

  updateIntroductionByUsername: (
    username: string,
    payload: UpdateIntroductionEntity
  ) => Promise<IntroductionEntity | null>;
}

interface IIntroductionRepository extends
  IIntroductionRepositoryReader, IIntroductionRepositoryWriter {}

export default IIntroductionRepository;
