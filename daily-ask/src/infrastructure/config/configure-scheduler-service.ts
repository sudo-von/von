import Broker from '../brokers/broker';
import LoggerService from '../services/logger-service/logger-service';
import {
  CreateDailyQuestionBroker,
} from '../brokers/entities/daily-question-entity/daily-question-broker-entities';
import DailyQuestionUsecase from '../../domain/usecases/daily-question-usecase/daily-question-usecase';
import CronSchedulerService from '../services/scheduler-service/cron-scheduler-service/cron-scheduler-service';

const configureSchedulerService = async (
  loggerService: LoggerService,
  questionUsecase: DailyQuestionUsecase,
  createDailyQuestionBroker: Broker<CreateDailyQuestionBroker>,
) => {
  const schedulerService = new CronSchedulerService();

  schedulerService.schedule('*/10 * * * * *', async () => {
    try {
      const dailyQuestion = await questionUsecase.createDailyQuestion('daily-question-microservice');
      console.log('🚀 ~ file: configure-scheduler-service.ts:19 ~ schedulerService.schedule ~ dailyQuestion:', dailyQuestion);

      await createDailyQuestionBroker.produce('DailyQuestion:CreateDailyQuestion', {
        asked_by: dailyQuestion.askedBy,
        question: dailyQuestion.question,
      });
    } catch (e) {
      loggerService.error('There was a scheduler error.', e as Error);
    }
  });
};

export default configureSchedulerService;
