import {
  CreateAnswer,
  UpdateAnswer,
} from '../../entities/answer-entity/answer-entities';
import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

abstract class AnswerUsecase {
  /**
  * Creates an instance of AnswerUsecase.
  * @param {IQuestionRepository} questionRepository - The question repository.
  */
  constructor(protected readonly questionRepository: IQuestionRepository) {}

  /**
  * Deletes an answer by question ID.
  * @param {string} id - The ID of the question.
  * @returns {Promise<DetailedQuestion>} A promise that resolves with the updated detailed question.
  */
  abstract deleteAnswerByQuestionId: (id: string)
  => Promise<DetailedQuestion>;

  /**
  * Creates an answer for a question by question ID.
  * @param {string} id - The ID of the question.
  * @param {CreateAnswer} payload - The payload for creating the answer.
  * @returns {Promise<DetailedQuestion>} A promise that resolves with the updated detailed question.
  */
  abstract createAnswerByQuestionId: (id: string, payload: CreateAnswer)
  => Promise<DetailedQuestion>;

  /**
  * Updates an answer for a question by question ID.
  * @param {string} id - The ID of the question.
  * @param {UpdateAnswer} payload - The payload for updating the answer.
  * @returns {Promise<DetailedQuestion>} A promise that resolves with the updated detailed question.
  */
  abstract updateAnswerByQuestionId: (id: string, payload: UpdateAnswer)
  => Promise<DetailedQuestion>;
}

export default AnswerUsecase;
