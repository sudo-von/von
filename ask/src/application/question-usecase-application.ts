import { CreateQuestionEntity, QuestionEntity } from '../domain/entities/question-entity';
import { validateQuestion } from '../domain/entities/validations/question-validations';
import {
  InvalidQuestionLengthError,
  QuestionCreationFailedError,
  ProfileNotFoundError,
  PermissionDeniedError,
} from '../domain/errors/error-factories';
import QuestionUsecase from '../domain/usecases/question-usecase';

class QuestionUsecaseApplication extends QuestionUsecase {
  getUnansweredQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const detailedQuestions = await this.questionRepository.getUnansweredQuestionsByUser(
      requestedUser,
    );

    const unansweredQuestions: QuestionEntity[] = detailedQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
    }));

    return unansweredQuestions;
  };

  getAllQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const detailedQuestions = await this.questionRepository.getAllQuestionsByUser(
      requestedUser,
    );

    const questions: QuestionEntity[] = detailedQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
      answer: q.answer,
    }));

    return questions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion(payload);
    if (!createdQuestion) throw QuestionCreationFailedError;

    const unansweredQuestions: QuestionEntity = {
      id: createdQuestion.id,
      question: createdQuestion.question,
      username: createdQuestion.username,
      askedAt: createdQuestion.askedAt,
    };

    return unansweredQuestions;
  };
}

export default QuestionUsecaseApplication;
