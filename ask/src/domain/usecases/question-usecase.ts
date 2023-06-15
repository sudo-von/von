import IQuestionRepository from '../repositories/question-repository';
import { IProfileRepositoryReader } from '../repositories/profile-repository';
import { CreateQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionUsecaseReader {
  getUnansweredQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  getAllQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;

  getAnsweredQuestionById: (id: string) => Promise<QuestionEntity>;
}

interface IQuestionUsecaseWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity>;
}

interface IQuestionUsecase extends IQuestionUsecaseReader, IQuestionUsecaseWriter {}

abstract class QuestionUsecase implements IQuestionUsecase {
  constructor(
    protected profileRepository: IProfileRepositoryReader,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (
    questionPayload: CreateQuestionEntity
  ) => Promise<QuestionEntity>;

  abstract getUnansweredQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  abstract getAllQuestionsByUser: (
    requestingUser: string,
    requestedUser: string,
  ) => Promise<QuestionEntity[]>;

  abstract getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;

  abstract getAnsweredQuestionById: (id: string) => Promise<QuestionEntity>;
}

export default QuestionUsecase;
