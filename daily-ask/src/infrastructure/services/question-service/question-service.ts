import LoggerService from '../logger-service/logger-service';
import MessageBroker from '../../message-brokers/message-broker';
import QuestionServiceFailedToProcessError from './question-service-errors';
import WebScraperService from '../web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../../domain/usecases/question-usecase/question-usecase';

class QuestionService {
  constructor(
    protected readonly loggerService: LoggerService,
    protected readonly messageBroker: MessageBroker,
    protected readonly questionUsecase: QuestionUsecase,
    protected readonly webScraperService: WebScraperService,
  ) {}

  processQuestion = async () => {
    try {
      const payload = await this.webScraperService.scrape();
      console.log('🚀 ~ file: question-service.ts:18 ~ QuestionService ~ processQuestion= ~ payload:', payload);

      const question = this.questionUsecase.createQuestion(payload);
      console.log('🚀 ~ file: question-service.ts:20 ~ QuestionService ~ processQuestion= ~ question:', question);

      const buffer = Buffer.from(JSON.stringify(question));
      console.log('🚀 ~ file: question-service.ts:22 ~ QuestionService ~ processQuestion= ~ buffer:', buffer);

      // await this.messageBroker.produceMessage('Question:CreateQuestion', buffer);
    } catch (e) {
      this.loggerService.error(QuestionServiceFailedToProcessError.message, e as Error);
    }
  };
}
export default QuestionService;
