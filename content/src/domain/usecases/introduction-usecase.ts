import {
  IntroductionEntity,
  CreateIntroductionEntity,
  UpdateIntroductionEntity,
} from '../entities/introduction/introduction-entity';
import IUserRepository from '../repositories/user-repository';
import IIntroductionRepository from '../repositories/introduction-repository';

interface IIntroductionUsecaseReader {
  getIntroductionByUsername: (username: string) => Promise<IntroductionEntity>;
}

interface IIntroductionUsecaseWriter {
  createIntroduction: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateIntroductionEntity
  ) => Promise<IntroductionEntity>;

  updateIntroductionByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateIntroductionEntity
  ) => Promise<IntroductionEntity>;
}

interface IIntroductionUsecase extends IIntroductionUsecaseReader, IIntroductionUsecaseWriter {}

abstract class IntroductionUsecase implements IIntroductionUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected introductionRepository: IIntroductionRepository,
  ) {}

  abstract getIntroductionByUsername: (username: string) => Promise<IntroductionEntity>;

  abstract createIntroduction: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateIntroductionEntity
  ) => Promise<IntroductionEntity>;

  abstract updateIntroductionByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateIntroductionEntity
  ) => Promise<IntroductionEntity>;
}

export default IntroductionUsecase;
