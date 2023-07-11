import Broker from '../brokers/broker';
import {
  CreateQuestionBroker,
} from '../brokers/dtos/question-dto/question-broker-dtos';
import LoggerService from '../services/logger-service/logger-service';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import ScheduledQuestionService from '../services/scheduled-task-service/scheduled-question-service/scheduled-question-service';

const configureScheduledTasks = async (
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  startersWebScraperService: WebScraperService,
  topicsWebScraperService: WebScraperService,
  generatorWebScraperService: WebScraperService,
  createQuestionBroker: Broker<CreateQuestionBroker>,
) => {
  const morningScheduledQuestion = new ScheduledQuestionService(
    'morning-scheduled-question-starters-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    startersWebScraperService,
  );

  const afternoonScheduledQuestion = new ScheduledQuestionService(
    'afternoon-scheduled-question-topics-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    topicsWebScraperService,
  );

  const eveningScheduledQuestion = new ScheduledQuestionService(
    'evening-scheduled-question-generator-web',
    loggerService,
    questionUsecase,
    createQuestionBroker,
    generatorWebScraperService,
  );

  await morningScheduledQuestion.scheduleTask('*/5 * * * * *');

  await afternoonScheduledQuestion.scheduleTask('*/5 * * * * *');

  await eveningScheduledQuestion.scheduleTask('*/5 * * * * *');
};

export default configureScheduledTasks;
