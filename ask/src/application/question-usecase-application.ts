import { CreateQuestionEntity, QuestionEntity } from '../domain/entities/question-entity';
import { validateQuestion } from '../domain/entities/validations/question-validations';
import { InvalidQuestionLengthError, ProfileCreationFailedError, ProfileNotFoundError } from '../domain/errors/error-factories';
import QuestionUsecase from '../domain/usecases/question-usecase';

class QuestionUsecaseApplication extends QuestionUsecase {
  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUserId(payload.userId);
    if (!profile) throw ProfileNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion(payload);
    if (!createdQuestion) throw ProfileCreationFailedError;

    return createdQuestion;
  };
}

export default QuestionUsecaseApplication;
