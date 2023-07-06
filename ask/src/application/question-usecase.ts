import {
  UserNotFoundError,
} from '../domain/entities/user/user-errors';
import {
  AnswerNotFoundError,
} from '../domain/entities/answer/answer-errors';
import {
  CreateAnswer,
  UpdateAnswer,
} from '../domain/entities/answer/answer-entities';
import {
  QuestionAlreadyAnsweredError,
  QuestionNotAnsweredError,
  QuestionNotFoundError,
  QuestionUpdateFailedError,
} from '../domain/entities/question/question-errors';
import {
  Question,
  CreateQuestion,
} from '../domain/entities/question/question-entities';
import QuestionUsecase from '../domain/usecases/question-usecase';
import formatQuestion from '../domain/entities/question/question-mappers';
import validateAnswerUpdate from '../domain/entities/answer/validations/update-answer-validations';
import validateAnswerCreation from '../domain/entities/answer/validations/create-answer-validations';
import validateQuestionCreation from '../domain/entities/question/validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<Question> => {
    const answeredQuestion = await this.questionRepository.getQuestionById(id, {
      status: 'answered',
    });
    if (!answeredQuestion) throw AnswerNotFoundError;

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

  getQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestionsByUsername(username, {
      status: 'both',
    });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  getAnsweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const answeredQuestions = await this.questionRepository.getQuestionsByUsername(username, {
      status: 'answered',
    });

    const formattedQuestions = answeredQuestions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  getUnansweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const unansweredQuestions = await this.questionRepository.getQuestionsByUsername(username, {
      status: 'unanswered',
    });

    const formattedQuestions = unansweredQuestions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  createAnswerByQuestionId = async (id: string, payload: CreateAnswer): Promise<Question> => {
    validateAnswerCreation(payload);

    const questionFoundById = await this.questionRepository.getQuestionById(id, { status: 'both' });
    if (!questionFoundById) throw QuestionNotFoundError;

    if (questionFoundById.answer) throw QuestionAlreadyAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestionById(id, {
      views: questionFoundById.views,
      askedAt: questionFoundById.askedAt,
      askedBy: questionFoundById.askedBy,
      username: questionFoundById.username,
      question: questionFoundById.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    });
    if (!updatedQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion);
    return formattedQuestion;
  };

  updateAnswerByQuestionId = async (id: string, payload: UpdateAnswer): Promise<Question> => {
    validateAnswerUpdate(payload);

    const questionFoundById = await this.questionRepository.getQuestionById(id, { status: 'both' });
    if (!questionFoundById) throw QuestionNotFoundError;

    if (!questionFoundById.answer) throw QuestionNotAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestionById(id, {
      views: questionFoundById.views,
      askedAt: questionFoundById.askedAt,
      askedBy: questionFoundById.askedBy,
      username: questionFoundById.username,
      question: questionFoundById.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    });
    if (!updatedQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion);
    return formattedQuestion;
  };
}

export default QuestionUsecaseApplication;
