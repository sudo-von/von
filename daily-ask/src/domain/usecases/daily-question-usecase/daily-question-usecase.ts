import {
  DailyQuestion,
  CreateDailyQuestion,
} from '../../entities/daily-question-entity/daily-question-entities';

/**
 * Interface for a daily question use case with write operations.
 * @interface
 */
interface IDailyQuestionUsecaseWriter {
  /**
   * Creates a daily question.
   * @param {CreateDailyQuestion} payload - The payload for creating a daily question.
   * @returns {DailyQuestion} The created daily question.
   */
  createDailyQuestion: (payload: CreateDailyQuestion)
  => DailyQuestion;
}

/**
 * Interface for a daily question use case that extends the writing capabilities.
 * @interface
 * @extends {IDailyQuestionUsecaseWriter}
 */
interface IDailyQuestionUsecase extends IDailyQuestionUsecaseWriter {}

export default IDailyQuestionUsecase;
