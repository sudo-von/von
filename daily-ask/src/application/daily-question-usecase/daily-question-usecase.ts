import {
  CreateDailyQuestion,
} from '../../domain/entities/daily-question-entity/daily-question-entities';
import IDailyQuestionUsecase from '../../domain/usecases/daily-question-usecase/daily-question-usecase';
import validateDailyQuestionCreation from '../../domain/entities/daily-question-entity/daily-question-validations/create-daily-question-validations';

class DailyQuestionUsecaseApplication extends IDailyQuestionUsecase {
  createDailyQuestion = async (
    askedBy: string,
  ): Promise<CreateDailyQuestion> => {
    try {
      await this.scraperService.connect();

      const question = await this.scraperService.scrape();

      const createdDailyQuestion: CreateDailyQuestion = {
        askedBy,
        question,
      };

      validateDailyQuestionCreation(createdDailyQuestion);

      return createdDailyQuestion;
    } finally {
      await this.scraperService.close();
    }
  };
}

export default DailyQuestionUsecaseApplication;
