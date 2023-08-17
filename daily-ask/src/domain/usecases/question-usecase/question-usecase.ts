import {
  DailyQuestion,
  CreateDailyQuestion,
} from '../../entities/question-entity/question-entities';

/**
 * Interface for a question use case with write operations.
 * @interface
 */
interface IQuestionUsecaseWriter {
  /**
   * Creates a daily question.
   * @param {CreateDailyQuestion} payload - The payload for creating a daily question.
   * @returns {DailyQuestion} The created daily question.
   */
  createDailyQuestion: (payload: CreateDailyQuestion)
  => DailyQuestion;
}

/**
 * An interface for a question use case that extends the writing capabilities.
 * @interface
 * @extends {IQuestionUsecaseWriter}
 */
interface IQuestionUsecase extends IQuestionUsecaseWriter {}

export default IQuestionUsecase;
