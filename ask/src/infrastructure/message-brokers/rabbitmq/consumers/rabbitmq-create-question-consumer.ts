import RabbitMQ from '../rabbitmq';
import {
  MessageBrokerFailedToProcessMessageError,
} from '../../message-broker-errors';
import {
  CreateQuestionMessageBroker,
} from '../../dtos/question-message-broker-dtos';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import LoggerService from '../../../services/logger-service/logger-service';

class RabbitMQCreateQuestionConsumer extends RabbitMQ<CreateQuestionMessageBroker> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
    protected readonly questionUsecase: QuestionUsecase,
  ) {
    super(MESSAGE_BROKER_URL, loggerService);
  }

  onMessage = async (data: CreateQuestionMessageBroker): Promise<void> => {
    try {
      await this.questionUsecase.createQuestion({
        askedBy: data.asked_by,
        question: data.question,
        username: data.username,
      });
      this.ackMessage();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToProcessMessageError.message, e as Error);
      throw MessageBrokerFailedToProcessMessageError;
    }
  };
}

export default RabbitMQCreateQuestionConsumer;
