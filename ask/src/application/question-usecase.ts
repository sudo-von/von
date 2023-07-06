import {
  UserNotFoundError,
  UserPermissionDeniedError,
} from '../domain/entities/user/user-errors';
import {
  QuestionNotFoundError,
  QuestionUpdateFailedError,
} from '../domain/entities/question/question-errors';
import {
  Question,
  CreateQuestion,
} from '../domain/entities/question/question-entities';
import QuestionUsecase from '../domain/usecases/question-usecase';
import formatQuestion from '../domain/entities/question/question-mappers';
import validateQuestionCreation from '../domain/entities/question/validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<Question> => {
    const answeredQuestion = await this.questionRepository.getAnsweredQuestionById(id);
    if (!answeredQuestion) throw QuestionNotFoundError;

    const increasedViewsQuestion = await this.questionRepository.updateQuestionById(id, {
      views: answeredQuestion.views + 1,
      askedAt: answeredQuestion.askedAt,
      askedBy: answeredQuestion.askedBy,
      username: answeredQuestion.username,
      question: answeredQuestion.question,
      answer: answeredQuestion.answer,
    });
    if (!increasedViewsQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(increasedViewsQuestion);
    return formattedQuestion;
  };

  createQuestion = async (payload: CreateQuestion): Promise<Question> => {
    validateQuestionCreation(payload);

    const userFoundByUsername = await this.userRepository.getUserByUsername(payload.username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion({
      views: 0,
      askedAt: new Date(),
      askedBy: payload.askedBy,
      username: payload.username,
      question: payload.question,
    });

    const formattedQuestion = formatQuestion(createdQuestion);
    return formattedQuestion;
  };

  getQuestionsByUsername = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<Question[]> => {
    if (requestingUser !== requestedUser) throw UserPermissionDeniedError;

    const userFoundByUsername = await this.userRepository.getUserByUsername(requestedUser);
    if (!userFoundByUsername) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestionsByUsername(
      requestedUser,
    );

    return questions;
  };

  getUnansweredQuestionsByUsername = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<Question[]> => {
    if (requestingUser !== requestedUser) throw UserPermissionDeniedError;

    const userFoundByUsername = await this.userRepository.getUserByUsername(requestedUser);
    if (!userFoundByUsername) throw UserNotFoundError;

    const unansweredQuestions = await this.questionRepository.getUnansweredQuestionsByUsername(
      requestedUser,
    );

    return unansweredQuestions;
  };

  getAnsweredQuestionsByUsername = async (
    username: string,
  ): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const answeredQuestions = await this.questionRepository.getAnsweredQuestionsByUsername(
      username,
    );

    return answeredQuestions;
  };
}

export default QuestionUsecaseApplication;
