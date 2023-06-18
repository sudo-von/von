import {
  CreateQuestionEntity, QuestionEntity, UpdateQuestionEntity, handleAskedBy,
} from '../domain/entities/question-entity';
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
  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const question = await this.questionRepository.createQuestion(payload);
    if (!question) throw QuestionCreationFailedError;

    const formatedQuestion = {
      id: question.id,
      views: question.views,
      answer: question.answer,
      askedAt: question.askedAt,
      askedBy: handleAskedBy(question.askedBy),
      question: question.question,
      username: question.username,
    };

    return formatedQuestion;
  };

  increaseQuestionViews = async (payload: QuestionEntity): Promise<QuestionEntity> => {
    const increasedViewsQuestion: UpdateQuestionEntity = {
      answer: payload.answer,
      askedBy: payload.askedBy,
      askedAt: payload.askedAt,
      question: payload.question,
      username: payload.username,
      views: payload.views + 1,
    };

    await this.questionRepository.updateQuestionById(payload.id, increasedViewsQuestion);

    const question: QuestionEntity = {
      id: payload.id,
      views: payload.views,
      answer: payload.answer,
      askedAt: payload.askedAt,
      askedBy: payload.askedBy,
      question: payload.question,
      username: payload.username,
    };

    return question;
  };

  getAnsweredQuestionById = async (id: string): Promise<QuestionEntity> => {
    const answeredQuestion = await this.questionRepository.getAnsweredQuestionById(id);
    if (!answeredQuestion) throw AnswerNotFoundError;

    const question = await this.increaseQuestionViews(answeredQuestion);

    const formatedQuestion = {
      id: question.id,
      views: question.views,
      answer: question.answer,
      askedAt: question.askedAt,
      question: question.question,
      username: question.username,
      askedBy: handleAskedBy(question.askedBy),
    };

    return formatedQuestion;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const answeredQuestions = await this.questionRepository.getAnsweredQuestionsByUser(username);

    const formatedQuestions = answeredQuestions.map((q) => ({
      id: q.id,
      views: q.views,
      answer: q.answer,
      askedAt: q.askedAt,
      question: q.question,
      username: q.username,
      askedBy: handleAskedBy(q.askedBy),
    }));

    return formatedQuestions;
  };

  getAllQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const profile = await this.profileRepository.getProfileByUsername(requestedUser);
    if (!profile) throw ProfileNotFoundError;

    const allQuestions = await this.questionRepository.getAllQuestionsByUser(requestedUser);

    return allQuestions;
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
}

export default QuestionUsecaseApplication;
