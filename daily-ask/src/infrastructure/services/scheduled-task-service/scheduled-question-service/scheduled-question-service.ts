import {
  schedule,
} from 'node-cron';
import Broker from '../../../brokers/broker';
import ScheduledTaskService from '../scheduled-task-service';
import LoggerService from '../../logger-service/logger-service';
import {
  CreateQuestionBroker,
} from '../../../brokers/dtos/question/question-broker-dtos';
import ScheduledTaskServiceFailedToProcess from '../scheduled-task-errors';
import WebScraperService from '../../web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class ScheduledQuestionService extends ScheduledTaskService {
  constructor(
    protected loggerService: LoggerService,
    protected questionUsecase: QuestionUsecase,
    private webScrapperService: WebScraperService,
    protected createQuestionProducer: Broker<CreateQuestionBroker>,
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

        this.createQuestionProducer.produce('Question:CreateQuestion', {
          asked_by: question.askedBy,
          question: question.question,
        });
      } catch (e) {
        this.loggerService.error(ScheduledTaskServiceFailedToProcess.message, e as Error);
      }
    });
  };
}

export default ScheduledQuestionService;
