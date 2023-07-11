import {
  AnswerDeleteFailedError,
  AnswerUpdateFailedError,
  AnswerCreationFailedError,
} from '../../domain/entities/answer-entity/answer-errors';
import {
  CreateAnswer,
  UpdateAnswer,
} from '../../domain/entities/answer-entity/answer-entities';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionAlreadyAnsweredError,
} from '../../domain/entities/question-entity/question-errors';
import {
  Question,
} from '../../domain/entities/question-entity/question-entities';
import AnswerUsecase from '../../domain/usecases/answer-usecase/answer-usecase';
import formatQuestion from '../../domain/entities/question-entity/question-formatters';
import validateAnswerUpdate from '../../domain/entities/answer-entity/answer-validations/update-answer-validations';
import validateAnswerCreation from '../../domain/entities/answer-entity/answer-validations/create-answer-validations';

class AnswerUsecaseApplication extends AnswerUsecase {
  deleteAnswerByQuestionId = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const deletedAnswer = await this.questionRepository.deleteAnswer({ id });
    if (!deletedAnswer) throw AnswerDeleteFailedError;

    const formattedQuestion = formatQuestion(deletedAnswer, { formatAnswer: false });
    return formattedQuestion;
  };

  createAnswerByQuestionId = async (id: string, payload: CreateAnswer): Promise<Question> => {
    validateAnswerCreation(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (question.answer) throw QuestionAlreadyAnsweredError;

    const createdAnswer = await this.questionRepository.updateQuestion({
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
    if (!createdAnswer) throw AnswerCreationFailedError;

    const formattedQuestion = formatQuestion(createdAnswer, { formatAnswer: false });
    return formattedQuestion;
  };

  updateAnswerByQuestionId = async (id: string, payload: UpdateAnswer): Promise<Question> => {
    validateAnswerUpdate(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedAnswer = await this.questionRepository.updateQuestion({
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
    if (!updatedAnswer) throw AnswerUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedAnswer, { formatAnswer: false });
    return formattedQuestion;
  };
}

export default AnswerUsecaseApplication;
