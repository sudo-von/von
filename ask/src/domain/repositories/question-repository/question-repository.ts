import {
  QuestionRepositoryFilters,
} from './question-repository-filters';
import {
  DetailedQuestion,
  CreateDetailedQuestion,
  PartialDetailedQuestion,
} from '../../entities/question-entity/question-entities';

interface IAnswerWriter {
  /**
  * Deletes a detailed answer based on the provided filters.
  * @param {QuestionRepositoryFilters} [filters] - Optional filters for deleting the answer.
  * @returns {Promise<DetailedQuestion | null>} A promise with the question or null if not found.
  */
  deleteDetailedAnswer: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;
}

interface IQuestionReader {
  /**
   * Retrieves a detailed question based on the provided filters.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for retrieving the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the question or null if not found.
   */
  getDetailedQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
  * Retrieves multiple detailed questions based on the provided filters.
  * @param {QuestionRepositoryFilters} [filters] - Optional filters for retrieving the questions.
  * @returns {Promise<DetailedQuestion[]>} A promise with an array of retrieved detailed questions.
  */
  getDetailedQuestions: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion[]>;
}

interface IQuestionWriter {
  /**
   * Creates a detailed question with the provided payload.
   * @param {CreateDetailedQuestion} payload - The payload for creating the detailed question.
   * @returns {Promise<DetailedQuestion>} A promise with the created detailed question.
   */
  createDetailedQuestion: (payload: CreateDetailedQuestion)
  => Promise<DetailedQuestion>;

  /**
   * Deletes a detailed question based on the provided filters.
   *
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for deleting the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the question or null if not found.
   */
  deleteDetailedQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
   * Updates a detailed question with the provided payload and filters.
   *
   * @param {PartialDetailedQuestion} payload - The partial payload for updating the question.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for updating the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the question or null if not found.
   */
  updateDetailedQuestion: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
   * Updates multiple detailed questions with the provided payload and filters.
   *
   * @param {PartialDetailedQuestion} payload - The partial payload for updating the questions.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for updating the questions.
   * @returns {Promise<void>} A promise that resolves when the questions are updated.
   */
  updateDetailedQuestions: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<void>;
}

interface IQuestion extends IAnswerWriter, IQuestionReader, IQuestionWriter {}

export default IQuestion;
