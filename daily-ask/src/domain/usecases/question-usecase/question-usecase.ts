import {
  BroadcastQuestion,
  CreateBroadcastQuestion,
} from '../../entities/question-entity/question-entities';

interface IQuestionUsecaseWriter {
  /**
  * Creates a broadcast question.
  * @param {CreateBroadcastQuestion} payload - The payload for creating a broadcast question.
  * @returns {BroadcastQuestion} The created broadcast question.
  */
  createBroadcastQuestion: (payload: CreateBroadcastQuestion)
  => BroadcastQuestion;
}

interface IQuestionUsecase extends IQuestionUsecaseWriter {}

export default IQuestionUsecase;
