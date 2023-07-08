import {
  AnswerDeleteFailedError,
  AnswerUpdateFailedError,
  AnswerCreationFailedError,
} from '../domain/entities/answer/answer-errors';
import {
  CreateAnswer,
  UpdateAnswer,
} from '../domain/entities/answer/answer-entities';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionAlreadyAnsweredError,
} from '../domain/entities/question/question-errors';
import {
  Question,
} from '../domain/entities/question/question-entities';
import AnswerUsecase from '../domain/usecases/answer-usecase';
import formatQuestion from '../domain/entities/question/question-formatters';
import validateAnswerUpdate from '../domain/entities/answer/validations/update-answer-validations';
import validateAnswerCreation from '../domain/entities/answer/validations/create-answer-validations';

class AnswerUsecaseApplication extends AnswerUsecase {
  deleteAnswerByQuestionId = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const deletedAnswer = await this.questionRepository.deleteAnswer({ id });
    if (!deletedAnswer) throw AnswerDeleteFailedError;

    const formattedQuestion = formatQuestion(deletedAnswer, { answer: false });
    return formattedQuestion;
  };

  createAnswerByQuestionId = async (id: string, payload: CreateAnswer): Promise<Question> => {
    validateAnswerCreation(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (question.answer) throw QuestionAlreadyAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestion({
      views: question.views,
      askedAt: question.askedAt,
      askedBy: question.askedBy,
      username: question.username,
      question: question.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!updatedQuestion) throw AnswerCreationFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion, { answer: false });
    return formattedQuestion;
  };

  updateAnswerByQuestionId = async (id: string, payload: UpdateAnswer): Promise<Question> => {
    validateAnswerUpdate(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestion({
      views: question.views,
      askedAt: question.askedAt,
      askedBy: question.askedBy,
      username: question.username,
      question: question.question,
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!updatedQuestion) throw AnswerUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion, { answer: false });
    return formattedQuestion;
  };
}

export default AnswerUsecaseApplication;
