import { CreateQuestionEntity, DetailedQuestionEntity, QuestionEntity } from '../domain/entities/question-entity';
import { validateQuestion } from '../domain/entities/validations/question-validations';
import { InvalidQuestionLengthError, QuestionCreationFailedError, ProfileNotFoundError } from '../domain/errors/error-factories';
import QuestionUsecase from '../domain/usecases/question-usecase';

class QuestionUsecaseApplication extends QuestionUsecase {
  getUnansweredQuestionsByUser = async (
    requestedUser: string,
    ownerUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestedUser !== ownerUser) throw new Error('you dont have enough permissions');

    const detailedQuestions = await this.questionRepository.getUnansweredQuestionsByUser(
      requestedUser,
    );

    const questions: QuestionEntity[] = detailedQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
    }));

    return questions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<DetailedQuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion(payload);
    if (!createdQuestion) throw QuestionCreationFailedError;

    return createdQuestion;
  };
}

export default QuestionUsecaseApplication;
