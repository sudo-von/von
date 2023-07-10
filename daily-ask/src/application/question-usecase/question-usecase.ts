import {
  Question,
} from '../../domain/entities/question-entity/question-entities';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import validateQuestionCreation from '../../domain/entities/question-entity/question-validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  createQuestion = (question: Question): Question => {
    validateQuestionCreation(question);
    return question;
  };
}

export default QuestionUsecaseApplication;
