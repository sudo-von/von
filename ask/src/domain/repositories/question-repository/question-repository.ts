import {
  QuestionRepositoryFilters,
} from './question-repository-filters';
import {
  IAnswerWriter,
} from '../answer-repository/answer-repository';
import {
  DetailedQuestion,
  CreateDetailedQuestion,
  PartialDetailedQuestion,
} from '../../entities/question-entity/question-entities';

/**
 * Represents a reader interface for accessing question data in a repository.
 * @interface
 */
interface IQuestionReader {
  /**
   * Retrieves a detailed question based on the provided filters.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for retrieving the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the detailed question if found.
   */
  getQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
  * Retrieves multiple detailed questions based on the provided filters.
  * @param {QuestionRepositoryFilters} [filters] - Optional filters for retrieving the questions.
  * @returns {Promise<DetailedQuestion[]>} A promise with an array of retrieved detailed questions.
  */
  getQuestions: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion[]>;
}

/**
 * Represents a writer interface for managing question data in a repository.
 * @interface
 */
interface IQuestionWriter {
  /**
   * Creates a detailed question with the provided payload.
   * @param {CreateDetailedQuestion} payload - The payload for creating the detailed question.
   * @returns {Promise<DetailedQuestion>} A promise with the created detailed question.
   */
  createQuestion: (payload: CreateDetailedQuestion)
  => Promise<DetailedQuestion>;

  /**
   * Deletes a detailed question based on the provided filters.
   *
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for deleting the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the detailed question if found.
   */
  deleteQuestion: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
   * Updates a detailed question with the provided payload and filters.
   *
   * @param {PartialDetailedQuestion} payload - The partial payload for updating the question.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for updating the question.
   * @returns {Promise<DetailedQuestion | null>} A promise with the detailed question if found.
   */
  updateQuestion: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;

  /**
   * Updates multiple detailed questions with the provided payload and filters.
   *
   * @param {PartialDetailedQuestion} payload - The partial payload for updating the questions.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for updating the questions.
   * @returns {Promise<void>} A promise that resolves when the questions are updated.
   */
  updateQuestions: (payload: PartialDetailedQuestion, filters?: QuestionRepositoryFilters)
  => Promise<void>;
}

/**
 * Represents a combined question repository interface,
 * combining both reader and writer capabilities.
 * @interface
 * @extends {IAnswerWriter}
 * @extends {IQuestionReader}
 * @extends {IQuestionWriter}
 */
interface IQuestion extends
  IAnswerWriter,
  IQuestionReader,
  IQuestionWriter {}

export default IQuestion;
