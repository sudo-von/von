import {
  schedule,
} from 'node-cron';
import ScheduledTaskService from '../scheduled-task-service';
import LoggerService from '../../logger-service/logger-service';
import {
  CreateQuestionMessageBroker,
} from '../../../message-brokers/dtos/question-message-broker-dtos';
import MessageBroker from '../../../message-brokers/message-broker';
import WebScraperService from '../../web-scraper-service/web-scraper-service';
import ScheduledTaskServiceFailedToProcessTask from '../scheduled-task-errors';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class ScheduledQuestionService extends ScheduledTaskService {
  constructor(
    protected loggerService: LoggerService,
    protected messageBroker: MessageBroker,
    protected questionUsecase: QuestionUsecase,
    private webScrapperService: WebScraperService,
  ) {
    super(loggerService);
  }

  scheduleTask = async (identifier: string, expression: string): Promise<void> => {
    schedule(expression, async () => {
      try {
        await this.webScrapperService.connect();

        const scrappedQuestion = await this.webScrapperService.scrape();

        const question = this.questionUsecase.createQuestion({
          askedBy: identifier,
          question: scrappedQuestion,
        });

        await this.webScrapperService.close();

        const payload: CreateQuestionMessageBroker = {
          asked_by: question.askedBy,
          question: question.question,
        };

        const buffer = Buffer.from(JSON.stringify(payload));

        this.messageBroker.produceMessage('Question:CreateQuestion', buffer);
      } catch (e) {
        this.loggerService.error(ScheduledTaskServiceFailedToProcessTask.message, e as Error);
      }
    });
  };
}

export default ScheduledQuestionService;
