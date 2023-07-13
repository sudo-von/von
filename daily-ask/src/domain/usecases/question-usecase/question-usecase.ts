import {
  BroadcastQuestion,
  CreateBroadcastQuestion,
} from '../../entities/question-entity/question-entities';

abstract class QuestionUsecase {
  abstract createBroadcastQuestion: (payload: CreateBroadcastQuestion) => BroadcastQuestion;
}

export default QuestionUsecase;
