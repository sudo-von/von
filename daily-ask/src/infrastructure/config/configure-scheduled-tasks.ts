import Broker from '../brokers/broker';
import {
  CreateBroadcastQuestionBroker,
} from '../brokers/dtos/question-dto/question-broker-dtos';
import LoggerService from '../services/logger-service/logger-service';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import ScheduledBroadcastQuestionService from '../services/scheduled-task-service/scheduled-broadcast-question-service/scheduled-broadcast-question-service';

const configureScheduledTasks = async (
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  startersWebScraperService: WebScraperService,
  topicsWebScraperService: WebScraperService,
  generatorWebScraperService: WebScraperService,
  createQuestionBroker: Broker<CreateBroadcastQuestionBroker>,
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

  await morningScheduledBroadcastQuestion.scheduleTask('*/50 * * * * *');

  await afternoonScheduledBroadcastQuestion.scheduleTask('*/50 * * * * *');

  await eveningScheduledBroadcastQuestion.scheduleTask('*/50 * * * * *');
};

export default configureScheduledTasks;
