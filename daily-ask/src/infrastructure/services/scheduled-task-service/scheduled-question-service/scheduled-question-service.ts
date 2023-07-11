import {
  validate,
  schedule,
} from 'node-cron';
import {
  ScheduledTaskServiceFailedToProcess,
  ScheduledTaskServiceInvalidExpression,
} from '../scheduled-task-errors';
import Broker from '../../../brokers/broker';
import ScheduledTaskService from '../scheduled-task-service';
import LoggerService from '../../logger-service/logger-service';
import {
  CreateQuestionBroker,
} from '../../../brokers/dtos/question-dto/question-broker-dtos';
import WebScraperService from '../../web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class ScheduledQuestionService extends ScheduledTaskService {
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
    protected questionUsecase: QuestionUsecase,
    protected createQuestionProducer: Broker<CreateQuestionBroker>,
    private questionWebScraperService: WebScraperService,
  ) {
    super(taskId, loggerService);
  }

  validateExpression = (expression: string): boolean => {
    const isExpressionValid = validate(expression);
    return isExpressionValid;
  };

  scheduleTask = async (expression: string): Promise<void> => {
    const isExpressionValid = this.validateExpression(expression);
    if (!isExpressionValid) throw ScheduledTaskServiceInvalidExpression;

    schedule(expression, async () => {
      await this.processTask();
    });
  };

  processTask = async (): Promise<void> => {
    try {
      await this.questionWebScraperService.connect();

      const extractedQuestion = await this.questionWebScraperService.scrape();

      const question = this.questionUsecase.createQuestion({
        askedBy: this.taskId,
        question: extractedQuestion,
      });

      await this.questionWebScraperService.close();

      this.createQuestionProducer.produce('Question:CreateQuestion', {
        asked_by: question.askedBy,
        question: question.question,
      });
    } catch (e) {
      this.loggerService.error(ScheduledTaskServiceFailedToProcess.message, e as Error);
    }
  };
}

export default ScheduledQuestionService;
