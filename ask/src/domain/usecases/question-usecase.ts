import IProfileRepository from '../repositories/profile-repository';
import IQuestionRepository from '../repositories/question-repository';
import { CreateQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionUsecaseReader {}

interface IProfileUsecaseWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity>;
}

interface IQuestionUsecase extends IQuestionUsecaseReader, IProfileUsecaseWriter {}

abstract class QuestionUsecase implements IQuestionUsecase {
  constructor(
    protected profileRepository: IProfileRepository,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity>;
}

export default QuestionUsecase;
