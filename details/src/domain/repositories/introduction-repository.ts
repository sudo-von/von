import {
  IntroductionEntity,
  CreateIntroductionEntity,
  UpdateIntroductionEntity,
} from '../entities/introduction/introduction-entity';

export interface IIntroductionRepositoryReader {
  find: () => Promise<IntroductionEntity[]>;
  findByUsername: (username: string) => Promise<IntroductionEntity | null>;
}

interface IIntroductionRepositoryWriter {
  create: (
    payload: CreateIntroductionEntity
  ) => Promise<IntroductionEntity>;

  updateByUsername: (
    username: string,
    payload: UpdateIntroductionEntity
  ) => Promise<IntroductionEntity | null>;
}

interface IIntroductionRepository extends
  IIntroductionRepositoryReader, IIntroductionRepositoryWriter {}

export default IIntroductionRepository;
