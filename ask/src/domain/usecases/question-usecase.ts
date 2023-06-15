import IQuestionRepository from '../repositories/question-repository';
import { IProfileRepositoryReader } from '../repositories/profile-repository';
import { CreateQuestionEntity, DetailedQuestionEntity } from '../entities/question-entity';

interface IQuestionUsecaseReader {}

interface IQuestionUsecaseWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<DetailedQuestionEntity>;
}

interface IQuestionUsecase extends IQuestionUsecaseReader, IQuestionUsecaseWriter {}

abstract class QuestionUsecase implements IQuestionUsecase {
  constructor(
    protected profileRepository: IProfileRepositoryReader,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (questionPayload: CreateQuestionEntity) => Promise<DetailedQuestionEntity>;
}

export default QuestionUsecase;
