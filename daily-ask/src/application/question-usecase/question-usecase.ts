import {
  DailyQuestion,
  CreateDailyQuestion,
} from '../../domain/entities/question-entity/question-entities';
import IQuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import validateDailyQuestionCreation from '../../domain/entities/question-entity/question-validations/create-daily-question-validations';

class QuestionUsecaseApplication implements IQuestionUsecase {
  createDailyQuestion = (
    payload: CreateDailyQuestion,
  ): DailyQuestion => {
    validateDailyQuestionCreation(payload);

    const question: DailyQuestion = {
      askedBy: payload.askedBy,
      question: payload.question,
    };

    return question;
  };
}

export default QuestionUsecaseApplication;
