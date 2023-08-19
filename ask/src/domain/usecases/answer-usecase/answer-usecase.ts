import {
  CreateDetailedAnswer,
  UpdateDetailedAnswer,
} from '../../entities/answer-entity/answer-entities';
import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import IQuestionRepository from '../../repositories/question-repository/question-repository';

/**
 * Abstract class representing an answer use case.
 * @abstract
 */
abstract class AnswerUsecase {
  /**
   * Creates an instance of AnswerUsecase.
   * @param {IQuestionRepository} questionRepository - The question repository.
   */
  constructor(protected readonly questionRepository: IQuestionRepository) {}

  /**
   * Deletes an answer by question ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the question.
   * @returns {Promise<DetailedQuestion>} A promise with the detailed question.
   */
  abstract deleteAnswerByQuestionId: (id: string)
  => Promise<DetailedQuestion>;

  /**
   * Creates an answer for a question by question ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the question.
   * @param {CreateDetailedAnswer} payload - The payload for creating the answer.
   * @returns {Promise<DetailedQuestion>} A promise with the detailed question.
   */
  abstract createAnswerByQuestionId: (id: string, payload: CreateDetailedAnswer)
  => Promise<DetailedQuestion>;

  /**
   * Updates an answer for a question by question ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the question.
   * @param {UpdateDetailedAnswer} payload - The payload for updating the answer.
   * @returns {Promise<DetailedQuestion>} A promise with the detailed question.
   */
  abstract updateAnswerByQuestionId: (id: string, payload: UpdateDetailedAnswer)
  => Promise<DetailedQuestion>;
}

export default AnswerUsecase;
