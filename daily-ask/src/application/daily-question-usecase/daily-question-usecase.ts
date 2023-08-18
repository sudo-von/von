import {
  DailyQuestion,
  CreateDailyQuestion,
} from '../../domain/entities/daily-question-entity/daily-question-entities';
import IDailyQuestionUsecase from '../../domain/usecases/daily-question-usecase/daily-question-usecase';
import validateDailyQuestionCreation from '../../domain/entities/daily-question-entity/daily-question-validations/create-daily-question-validations';

class DailyQuestionUsecaseApplication implements IDailyQuestionUsecase {
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

export default DailyQuestionUsecaseApplication;
