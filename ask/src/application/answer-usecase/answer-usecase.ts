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
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import AnswerUsecase from '../../domain/usecases/answer-usecase/answer-usecase';
import validateAnswerUpdate from '../../domain/entities/answer-entity/answer-validations/update-answer-validations';
import validateAnswerCreation from '../../domain/entities/answer-entity/answer-validations/create-answer-validations';

class AnswerUsecaseApplication extends AnswerUsecase {
  deleteAnswerByQuestionId = async (
    id: string,
  ): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getDetailedQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const deletedAnswer = await this.questionRepository.deleteDetailedAnswer({ id });
    if (!deletedAnswer) throw AnswerDeleteFailedError;

    return deletedAnswer;
  };

  createAnswerByQuestionId = async (
    id: string,
    payload: CreateAnswer,
  ): Promise<DetailedQuestion> => {
    validateAnswerCreation(payload);

    const question = await this.questionRepository.getDetailedQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (question.answer) throw QuestionAlreadyAnsweredError;

    const createdAnswer = await this.questionRepository.updateDetailedQuestion({
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!createdAnswer) throw AnswerCreationFailedError;

    return createdAnswer;
  };

  updateAnswerByQuestionId = async (
    id: string,
    payload: UpdateAnswer,
  ): Promise<DetailedQuestion> => {
    validateAnswerUpdate(payload);

    const question = await this.questionRepository.getDetailedQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedAnswer = await this.questionRepository.updateDetailedQuestion({
      answer: {
        answer: payload.answer,
        answeredAt: new Date(),
      },
    }, { id });
    if (!updatedAnswer) throw AnswerUpdateFailedError;

    return updatedAnswer;
  };
}

export default AnswerUsecaseApplication;
