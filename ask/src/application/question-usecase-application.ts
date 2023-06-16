import { CreateQuestionEntity, QuestionEntity, UpdateQuestionEntity } from '../domain/entities/question-entity';
import { validateQuestion } from '../domain/entities/validations/question-validations';
import {
  InvalidQuestionLengthError,
  QuestionCreationFailedError,
  ProfileNotFoundError,
  PermissionDeniedError,
  AnswerNotFoundError,
} from '../domain/errors/error-factories';
import QuestionUsecase from '../domain/usecases/question-usecase';

class QuestionUsecaseApplication extends QuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<QuestionEntity> => {
    const answeredQuestion = await this.questionRepository.getAnsweredQuestionById(id);
    if (!answeredQuestion) throw AnswerNotFoundError;

    const increasedViewsQuestion: UpdateQuestionEntity = {
      ...answeredQuestion,
      views: answeredQuestion.views + 1,
    };

    await this.questionRepository.updateQuestionById(id, increasedViewsQuestion);

    const question: QuestionEntity = {
      ...answeredQuestion,
      views: increasedViewsQuestion.views,
    };

    return question;
  };

  getAllQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const profile = await this.profileRepository.getProfileByUsername(requestedUser);
    if (!profile) throw ProfileNotFoundError;

    const allQuestions = await this.questionRepository.getAllQuestionsByUser(
      requestedUser,
    );

    return allQuestions;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const answeredQuestions = await this.questionRepository.getAnsweredQuestionsByUser(username);

    return answeredQuestions;
  };

  getUnansweredQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const profile = await this.profileRepository.getProfileByUsername(requestedUser);
    if (!profile) throw ProfileNotFoundError;

    const unansweredQuestions = await this.questionRepository.getUnansweredQuestionsByUser(
      requestedUser,
    );

    return unansweredQuestions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const unansweredQuestion = await this.questionRepository.createQuestion(payload);
    if (!unansweredQuestion) throw QuestionCreationFailedError;

    return unansweredQuestion;
  };
}

export default QuestionUsecaseApplication;
