import RabbitMQ from '../rabbitmq';
import {
  MessageBrokerFailedToProcessMessageError,
} from '../../message-broker-errors';
import {
  CreateQuestionMessageBroker,
} from '../../dtos/question-message-broker-dtos';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import LoggerService from '../../../services/logger-service/logger-service';

class RabbitMQCreateQuestionConsumer extends RabbitMQ {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
    protected readonly questionUsecase: QuestionUsecase,
  ) {
    super(MESSAGE_BROKER_URL, loggerService);
  }

  onMessage = async (data: Buffer): Promise<void> => {
    try {
      const payload = JSON.parse(data.toString()) as CreateQuestionMessageBroker;
      await this.questionUsecase.createQuestion({
        askedBy: payload.asked_by,
        question: payload.question,
        username: payload.username,
      });
      this.ackMessage();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default RabbitMQCreateQuestionConsumer;
