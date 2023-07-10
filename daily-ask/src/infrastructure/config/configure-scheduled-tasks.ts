import Broker from '../brokers/broker';
import {
  CreateQuestionBroker,
} from '../brokers/dtos/question/question-broker-dtos';
import LoggerService from '../services/logger-service/logger-service';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import ScheduledQuestionService from '../services/scheduled-task-service/scheduled-question-service/scheduled-question-service';

const configureScheduledTasks = async (
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  morningWebScraperService: WebScraperService,
  afternoonWebScraperService: WebScraperService,
  eveningWebScraperService: WebScraperService,
  createQuestionBroker: Broker<CreateQuestionBroker>,
) => {
  const morningScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    questionUsecase,
    morningWebScraperService,
    createQuestionBroker,
  );

  const afternoonScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    questionUsecase,
    afternoonWebScraperService,
    createQuestionBroker,
  );

  const eveningScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    questionUsecase,
    eveningWebScraperService,
    createQuestionBroker,
  );

  await morningScheduledQuestion.scheduleTask('conversationstarters', '* 10 * * *');

  await afternoonScheduledQuestion.scheduleTask('eslconversation', '* 15 * * * *');

  await eveningScheduledQuestion.scheduleTask('questionsgenerator', '* 20 * * * *');
};

export default configureScheduledTasks;
