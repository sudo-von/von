import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';
import {
  QuestionRepositoryFilters,
} from '../question-repository/question-repository-filters';

/**
 * Represents a reader interface for accessing answer data in a repository.
 * @interface
 */
export interface IAnswerWriter {
  /**
   * Deletes an answer based on the provided filters.
   * @param {QuestionRepositoryFilters} [filters] - Optional filters for deleting the answer.
   * @returns {Promise<DetailedQuestion | null>} A promise with the detailed question if found.
   */
  deleteAnswer: (filters?: QuestionRepositoryFilters)
  => Promise<DetailedQuestion | null>;
}
