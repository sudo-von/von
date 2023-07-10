import {
  Question,
  CreateQuestion,
} from '../../entities/question-entity/question-entities';

abstract class QuestionUsecase {
  abstract createQuestion: (payload: CreateQuestion) => Question;
}

export default QuestionUsecase;
