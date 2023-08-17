import Broker from '../brokers/broker';
import {
  CreateDailyQuestionBroker,
} from '../brokers/entities/question-entity/question-broker-entities';
import LoggerService from '../services/logger-service/logger-service';
import ScraperService from '../services/scraper-service/scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import ScheduledBroadcastQuestionService from '../services/scheduled-task-service/scheduled-broadcast-question-service/scheduled-broadcast-question-service';

const configureScheduledTasks = async (
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  startersWebScraperService: ScraperService,
  topicsWebScraperService: ScraperService,
  generatorWebScraperService: ScraperService,
  createQuestionBroker: Broker<CreateDailyQuestionBroker>,
) => {
  const morningScheduledBroadcastQuestion = new ScheduledBroadcastQuestionService(
    'morning-scheduled-question-starters-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    startersWebScraperService,
  );

  const afternoonScheduledBroadcastQuestion = new ScheduledBroadcastQuestionService(
    'afternoon-scheduled-question-topics-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    topicsWebScraperService,
  );

  const eveningScheduledBroadcastQuestion = new ScheduledBroadcastQuestionService(
    'evening-scheduled-question-generator-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    generatorWebScraperService,
  );

  await morningScheduledBroadcastQuestion.scheduleTask('*/5 * * * * *');

  await afternoonScheduledBroadcastQuestion.scheduleTask('*/5 * * * * *');

  await eveningScheduledBroadcastQuestion.scheduleTask('*/5 * * * * *');
};

export default configureScheduledTasks;
