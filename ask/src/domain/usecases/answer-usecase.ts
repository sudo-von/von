import IQuestionRepository from '../repositories/question-repository';
import { IProfileRepositoryReader } from '../repositories/profile-repository';
import { MediumQuestionEntity } from '../entities/question-entity';

interface IAnswerUsecaseReader {
  getAnswersByUsername: (username: string) => Promise<MediumQuestionEntity[]>;
}

interface IAnswerUsecaseWriter {}

interface IAnswerUsecase extends IAnswerUsecaseReader, IAnswerUsecaseWriter {}

abstract class AnswerUsecase implements IAnswerUsecase {
  constructor(
    protected profileRepository: IProfileRepositoryReader,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract getAnswersByUsername: (username: string) => Promise<MediumQuestionEntity[]>;
}

export default AnswerUsecase;
