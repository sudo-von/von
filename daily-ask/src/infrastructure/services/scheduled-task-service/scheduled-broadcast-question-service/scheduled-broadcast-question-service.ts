import {
  validate,
  schedule,
} from 'node-cron';
import {
  ScheduledTaskServiceInvalidPatternError,
  ScheduledTaskServiceFailedToProcessError,
} from '../scheduled-task-errors';
import Broker from '../../../brokers/broker';
import ScheduledTaskService from '../scheduled-task-service';
import LoggerService from '../../logger-service/logger-service';
import {
  CreateBroadcastQuestionBroker,
} from '../../../brokers/dtos/question-dto/question-broker-dtos';
import WebScraperService from '../../web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class ScheduledBroadcastQuestionService extends ScheduledTaskService {
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
    protected questionUsecase: QuestionUsecase,
    protected createQuestionProducer: Broker<CreateBroadcastQuestionBroker>,
    protected questionWebScraperService: WebScraperService,
  ) {
    super(taskId, loggerService);
  }

  validatePattern = (pattern: string): boolean => {
    const isPatternValid = validate(pattern);
    return isPatternValid;
  };

  scheduleTask = async (pattern: string): Promise<void> => {
    const isPatternValid = this.validatePattern(pattern);
    if (!isPatternValid) throw ScheduledTaskServiceInvalidPatternError(pattern);

    schedule(pattern, async () => {
      await this.processTask();
    });
  };

  processTask = async (): Promise<void> => {
    try {
      await this.questionWebScraperService.connect();

      const extractedQuestion = await this.questionWebScraperService.scrape();

      const question = this.questionUsecase.createBroadcastQuestion({
        askedBy: this.taskId,
        question: extractedQuestion,
      });

      await this.questionWebScraperService.close();

      this.createQuestionProducer.produce('Question:CreateBroadcastQuestion', {
        asked_by: question.askedBy,
        question: question.question,
      });
    } catch (e) {
      this.loggerService.error(
        ScheduledTaskServiceFailedToProcessError(this.taskId).message,
        e as Error,
      );
    }
  };
}

export default ScheduledBroadcastQuestionService;
