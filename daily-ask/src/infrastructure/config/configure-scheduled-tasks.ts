import MessageBroker from '../message-brokers/message-broker';
import LoggerService from '../services/logger-service/logger-service';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import CreateScheduledQuestionService from '../services/scheduled-task-service/create-scheduled-question-service/create-question-scheduled-service';

const configureScheduledTasks = async (
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
  createQuestionProducer: MessageBroker,
  conversationStartersWebScrapper: WebScraperService,
  eslconversationWebScrapperService: WebScraperService,
  questionsgeneratorWebScrapperService: WebScraperService,
) => {
  const conversationStartersScheduledService = new CreateScheduledQuestionService(
    loggerService,
    createQuestionProducer,
    questionUsecase,
    conversationStartersWebScrapper,
  );

  const eslStartersScheduledService = new CreateScheduledQuestionService(
    loggerService,
    createQuestionProducer,
    questionUsecase,
    eslconversationWebScrapperService,
  );

  const questionsScheduledService = new CreateScheduledQuestionService(
    loggerService,
    createQuestionProducer,
    questionUsecase,
    questionsgeneratorWebScrapperService,
  );

  await conversationStartersScheduledService.scheduleTask('conversationstarters', '* 10 * * *');

  await eslStartersScheduledService.scheduleTask('eslconversation', '* 15 * * * *');

  await questionsScheduledService.scheduleTask('questionsgenerator', '* 20 * * * *');
};

export default configureScheduledTasks;
