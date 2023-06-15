import IQuestionRepository from '../repositories/question-repository';
import { IProfileRepositoryReader } from '../repositories/profile-repository';
import { QuestionEntity } from '../entities/question-entity';

interface IAnswerUsecaseReader {
  getAnsweredQuestionsByUsername: (username: string) => Promise<QuestionEntity[]>;
}

interface IAnswerUsecaseWriter {}

interface IAnswerUsecase extends IAnswerUsecaseReader, IAnswerUsecaseWriter {}

abstract class AnswerUsecase implements IAnswerUsecase {
  constructor(
    protected profileRepository: IProfileRepositoryReader,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract getAnsweredQuestionsByUsername: (username: string) => Promise<QuestionEntity[]>;
}

export default AnswerUsecase;
