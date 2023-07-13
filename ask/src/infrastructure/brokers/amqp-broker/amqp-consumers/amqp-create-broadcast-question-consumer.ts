import {
  BrokerFailedToProcessMessageError,
} from '../../errors/broker-errors';
import AMQPBRoker from '../amqp-broker';
import {
  CreateBroadcastQuestionBroker,
} from '../../dtos/question-dto/question-broker-dtos';
import LoggerService from '../../../services/logger-service/logger-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase/question-usecase';

class AMQPCreateBroadcastQuestionConsumer extends AMQPBRoker<CreateBroadcastQuestionBroker> {
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
    protected readonly questionUsecase: QuestionUsecase,
  ) {
    super(url, loggerService);
  }

  onMessage = async (data: CreateBroadcastQuestionBroker): Promise<void> => {
    try {
      await this.questionUsecase.CreateBroadcastQuestion({
        askedBy: data.asked_by,
        question: data.question,
      });
      this.acknowledge();
    } catch (e) {
      this.loggerService.error(BrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default AMQPCreateBroadcastQuestionConsumer;
