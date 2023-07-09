import {
  Question,
} from '../../entities/question-entity/question-entities';

abstract class QuestionGenerator {
  abstract createRandomQuestion: () => Promise<Question>;
}

export default QuestionGenerator;
