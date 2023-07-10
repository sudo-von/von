import {
  Question,
} from '../../entities/question-entity/question-entities';

abstract class QuestionUsecase {
  abstract createQuestion: (payload: Question) => Question;
}

export default QuestionUsecase;
