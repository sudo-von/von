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
  CreateDailyQuestionBroker,
} from '../../../brokers/entities/question-entity/question-broker-entities';
import ScraperService from '../../scraper-service/scraper-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class ScheduledBroadcastQuestionService extends ScheduledTaskService {
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
    protected questionUsecase: QuestionUsecase,
    protected createQuestionProducer: Broker<CreateDailyQuestionBroker>,
    protected questionWebScraperService: ScraperService,
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

      const question = this.questionUsecase.createDailyQuestion({
        askedBy: this.taskId,
        question: extractedQuestion,
      });
      console.log(question);

      await this.questionWebScraperService.close();

      this.createQuestionProducer.produce('Question:CreateDailyQuestion', {
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
