import {
  BroadcastQuestion,
  CreateBroadcastQuestion,
} from '../../domain/entities/question-entity/question-entities';
import IQuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import validateBroadcastQuestionCreation from '../../domain/entities/question-entity/question-validations/create-broadcast-question-validations';

class QuestionUsecaseApplication implements IQuestionUsecase {
  createBroadcastQuestion = (payload: CreateBroadcastQuestion): BroadcastQuestion => {
    validateBroadcastQuestionCreation(payload);

    const question: BroadcastQuestion = {
      askedBy: payload.askedBy,
      question: payload.question,
    };

    return question;
  };
}

export default QuestionUsecaseApplication;
