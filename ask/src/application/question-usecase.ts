import {
  UserNotFoundError,
} from '../domain/entities/user/user-errors';
import {
  AnswerDeleteFailedError,
  AnswerNotFoundError,
} from '../domain/entities/answer/answer-errors';
import {
  CreateAnswer,
  UpdateAnswer,
} from '../domain/entities/answer/answer-entities';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionDeleteFailedError,
  QuestionUpdateFailedError,
  QuestionAlreadyAnsweredError,
} from '../domain/entities/question/question-errors';
import {
  Question,
  CreateQuestion,
} from '../domain/entities/question/question-entities';
import QuestionUsecase from '../domain/usecases/question-usecase';
import formatQuestion from '../domain/entities/question/question-formatters';
import validateAnswerUpdate from '../domain/entities/answer/validations/update-answer-validations';
import validateAnswerCreation from '../domain/entities/answer/validations/create-answer-validations';
import validateQuestionCreation from '../domain/entities/question/validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  deleteQuestionById = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({
      id,
      status: 'both',
    });
    if (!question) throw QuestionNotFoundError;

    const deletedQuestion = await this.questionRepository.deleteQuestion({ id });
    if (!deletedQuestion) throw QuestionDeleteFailedError;

    return deletedQuestion;
  };

  getAnsweredQuestionById = async (id: string): Promise<Question> => {
    const answeredQuestion = await this.questionRepository.getQuestion({
      id,
      status: 'answered',
    });
    if (!answeredQuestion) throw AnswerNotFoundError;

    const increasedViewsQuestion = await this.questionRepository.updateQuestion({
      views: answeredQuestion.views + 1,
      askedAt: answeredQuestion.askedAt,
      askedBy: answeredQuestion.askedBy,
      username: answeredQuestion.username,
      question: answeredQuestion.question,
      answer: answeredQuestion.answer,
    }, { id });
    if (!increasedViewsQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(increasedViewsQuestion, { answer: false });
    return formattedQuestion;
  };

  deleteAnswerByQuestionId = async (id: string): Promise<Question> => {
    const answeredQuestion = await this.questionRepository.getQuestion({
      id,
      status: 'answered',
    });
    if (!answeredQuestion) throw AnswerNotFoundError;

    const deletedAnswer = await this.questionRepository.deleteAnswer({ id });
    if (!deletedAnswer) throw AnswerDeleteFailedError;

    return deletedAnswer;
  };

  createQuestion = async (payload: CreateQuestion): Promise<Question> => {
    validateQuestionCreation(payload);

    const userFoundByUsername = await this.userRepository.getUser({ username: payload.username });
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
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({
      username,
      status: 'both',
    });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  getAnsweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const answeredQuestions = await this.questionRepository.getQuestions({
      username,
      status: 'answered',
    });

    const formattedQuestions = answeredQuestions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  getUnansweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const unansweredQuestions = await this.questionRepository.getQuestions({
      username,
      status: 'unanswered',
    });

    const formattedQuestions = unansweredQuestions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  createAnswerByQuestionId = async (id: string, payload: CreateAnswer): Promise<Question> => {
    validateAnswerCreation(payload);

    const questionFoundById = await this.questionRepository.getQuestion({
      id,
      status: 'both',
    });
    if (!questionFoundById) throw QuestionNotFoundError;

    if (questionFoundById.answer) throw QuestionAlreadyAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestion({
      views: questionFoundById.views,
      askedAt: questionFoundById.askedAt,
      askedBy: questionFoundById.askedBy,
      username: questionFoundById.username,
      question: questionFoundById.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!updatedQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion);
    return formattedQuestion;
  };

  updateAnswerByQuestionId = async (id: string, payload: UpdateAnswer): Promise<Question> => {
    validateAnswerUpdate(payload);

    const questionFoundById = await this.questionRepository.getQuestion({
      id,
      status: 'both',
    });
    if (!questionFoundById) throw QuestionNotFoundError;

    if (!questionFoundById.answer) throw QuestionNotAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestion({
      views: questionFoundById.views,
      askedAt: questionFoundById.askedAt,
      askedBy: questionFoundById.askedBy,
      username: questionFoundById.username,
      question: questionFoundById.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!updatedQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion);
    return formattedQuestion;
  };
}

export default QuestionUsecaseApplication;
