import Broker from '../brokers/broker';
import {
  CreateDailyQuestionBroker,
} from '../brokers/entities/question-entity/question-broker-entities';
import LoggerService from '../services/logger-service/logger-service';
import ScraperService from '../services/scraper-service/scraper-service';
import DailyQuestionUsecase from '../../domain/usecases/daily-question-usecase/daily-question-usecase';
import NodeCronSchedulerService from '../services/scheduler-service/node-cron-scheduler-service/node-cron-scheduler-service';

const configureSchedulerService = async (
  loggerService: LoggerService,
  questionUsecase: DailyQuestionUsecase,
  startersWebScraperService: ScraperService,
  topicsWebScraperService: ScraperService,
  generatorWebScraperService: ScraperService,
  createQuestionBroker: Broker<CreateDailyQuestionBroker>,
) => {
  const schedulerService = new NodeCronSchedulerService();

  const afternoonScheduledBroadcastQuestion = new NodeCronSchedulerService(
    'afternoon-scheduled-question-topics-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    topicsWebScraperService,
  );

  const eveningScheduledBroadcastQuestion = new NodeCronSchedulerService(
    'evening-scheduled-question-generator-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    generatorWebScraperService,
  );

  await morningScheduledBroadcastQuestion.schedule('*/5 * * * * *');

  await afternoonScheduledBroadcastQuestion.scheduleTask('*/5 * * * * *');

  await eveningScheduledBroadcastQuestion.scheduleTask('*/5 * * * * *');
};

export default configureSchedulerService;
