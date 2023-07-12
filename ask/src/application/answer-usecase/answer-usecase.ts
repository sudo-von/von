import {
  AnswerDeleteFailedError,
  AnswerUpdateFailedError,
  AnswerCreationFailedError,
} from '@entities/answer-entity/answer-errors';
import {
  CreateAnswer,
  UpdateAnswer,
} from '@entities/answer-entity/answer-entities';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionAlreadyAnsweredError,
} from '@entities/question-entity/question-errors';
import {
  Question,
} from '@entities/question-entity/question-entities';
import AnswerUsecase from '@usecases/answer-usecase/answer-usecase';
import formatQuestion from '@entities/question-entity/question-formatters';
import validateAnswerUpdate from '@entities/answer-entity/answer-validations/update-answer-validations';
import validateAnswerCreation from '@entities/answer-entity/answer-validations/create-answer-validations';

class AnswerUsecaseApplication extends AnswerUsecase {
  deleteAnswerByQuestionId = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const deletedAnswer = await this.questionRepository.deleteAnswer({ id });
    if (!deletedAnswer) throw AnswerDeleteFailedError;

    const formattedQuestion = formatQuestion(deletedAnswer);
    return formattedQuestion;
  };

  createAnswerByQuestionId = async (id: string, payload: CreateAnswer): Promise<Question> => {
    validateAnswerCreation(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (question.answer) throw QuestionAlreadyAnsweredError;

    const createdAnswer = await this.questionRepository.createAnswer({
      answer: payload.answer,
      answeredAt: new Date(),
    }, { id });
    if (!createdAnswer) throw AnswerCreationFailedError;

    const formattedQuestion = formatQuestion(createdAnswer);
    return formattedQuestion;
  };

  updateAnswerByQuestionId = async (id: string, payload: UpdateAnswer): Promise<Question> => {
    validateAnswerUpdate(payload);

    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedAnswer = await this.questionRepository.updateAnswer({
      answer: payload.answer,
      answeredAt: new Date(),
    }, { id });
    if (!updatedAnswer) throw AnswerUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedAnswer);
    return formattedQuestion;
  };
}

export default AnswerUsecaseApplication;
