import {
  BrokerFailedToProcessMessageError,
} from '../../errors/broker-errors';
import AMQPBroker from '../amqp-broker';
import {
  CreateDailyQuestionBroker,
} from '../../entities/question-entity/question-broker-entities';
import LoggerService from '../../../services/logger-service/logger-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class AMQPCreateDailyQuestionConsumer extends AMQPBroker<CreateDailyQuestionBroker> {
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
    protected readonly questionUsecase: QuestionUsecase,
  ) {
    super(url, loggerService);
  }

  onMessage = async (data: CreateDailyQuestionBroker): Promise<void> => {
    try {
      await this.questionUsecase.createDailyQuestion({
        askedBy: data.asked_by,
        question: data.question,
      });
      this.acknowledge();
    } catch (e) {
      this.loggerService.error(BrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default AMQPCreateDailyQuestionConsumer;
