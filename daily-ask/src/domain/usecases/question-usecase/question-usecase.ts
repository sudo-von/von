import {
  Question,
  CreateQuestion,
} from '../../entities/question-entity/question-entities';
import QuestionGenerator from '../../services/question-generator/question-generator';

abstract class QuestionUsecase {
  constructor(protected readonly questionGenerator: QuestionGenerator) {}

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;
}

export default QuestionUsecase;
