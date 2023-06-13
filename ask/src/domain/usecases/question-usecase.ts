import IProfileRepository from '../repositories/profile-repository';
import IQuestionRepository from '../repositories/question-repository';
import { CreateQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionUsecaseReader {}

interface IProfileUsecaseWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity>;
}

interface IProfileUsecase extends IQuestionUsecaseReader, IProfileUsecaseWriter {}

abstract class ProfileUsecase implements IProfileUsecase {
  constructor(
    protected profileRepository: IProfileRepository,
    protected questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity>;
}

export default ProfileUsecase;
