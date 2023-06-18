import IQuestionRepository from '../repositories/question-repository';
import { IProfileRepositoryReader } from '../repositories/profile-repository';
import { CreateQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionUsecaseReader {
  getAllQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  getUnansweredQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  getAnsweredQuestionById: (id: string) => Promise<QuestionEntity>;

  getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
}

interface IQuestionUsecaseWriter {
  createQuestion: (payload: CreateQuestionEntity) => Promise<QuestionEntity>;
  increaseQuestionViews: (payload: QuestionEntity) => Promise<QuestionEntity>;
}

interface IQuestionUsecase extends IQuestionUsecaseReader, IQuestionUsecaseWriter {}

abstract class QuestionUsecase implements IQuestionUsecase {
  constructor(
    protected profileRepository: IProfileRepositoryReader,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (payload: CreateQuestionEntity) => Promise<QuestionEntity>;

  abstract increaseQuestionViews: (payload: QuestionEntity) => Promise<QuestionEntity>;

  abstract getAllQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  abstract getUnansweredQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  abstract getAnsweredQuestionById: (id: string) => Promise<QuestionEntity>;

  abstract getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
}

export default QuestionUsecase;
