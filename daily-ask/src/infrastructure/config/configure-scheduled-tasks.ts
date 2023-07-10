import MessageBroker from '../message-brokers/message-broker';
import LoggerService from '../services/logger-service/logger-service';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import ScheduledQuestionService from '../services/scheduled-task-service/scheduled-question-service/scheduled-question-service';

const configureScheduledTasks = async (
  messageBroker: MessageBroker,
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  topicsWebScraperService: WebScraperService,
  startersWebScraperService: WebScraperService,
  generatorWebScrapperService: WebScraperService,
) => {
  const morningScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    messageBroker,
    questionUsecase,
    topicsWebScraperService,
  );

  const afternoonScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    messageBroker,
    questionUsecase,
    startersWebScraperService,
  );

  const eveningScheduledQuestion = new ScheduledQuestionService(
    loggerService,
    messageBroker,
    questionUsecase,
    generatorWebScrapperService,
  );

  await morningScheduledQuestion.scheduleTask('conversationstarters', '* 10 * * *');

  await afternoonScheduledQuestion.scheduleTask('eslconversation', '* 15 * * * *');

  await eveningScheduledQuestion.scheduleTask('questionsgenerator', '* 20 * * * *');
};

export default configureScheduledTasks;
