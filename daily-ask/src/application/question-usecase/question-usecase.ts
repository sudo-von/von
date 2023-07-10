import {
  Question,
  CreateQuestion,
} from '../../domain/entities/question-entity/question-entities';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import validateQuestionCreation from '../../domain/entities/question-entity/question-validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  createQuestion = (payload: CreateQuestion): Question => {
    validateQuestionCreation(payload);

    const question: Question = {
      askedBy: payload.askedBy,
      question: payload.question,
    };

    return question;
  };
}

export default QuestionUsecaseApplication;
