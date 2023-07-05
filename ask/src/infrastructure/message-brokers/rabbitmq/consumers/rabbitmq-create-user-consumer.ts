import RabbitMQ from '../rabbitmq';
import {
  MessageBrokerFailedToProcessMessageError,
} from '../../message-broker-errors';
import {
  CreateUserMessageBroker,
} from '../../dtos/user-message-broker-dtos';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import LoggerService from '../../../services/logger-service/logger-service';

class RabbitMQCreateUserConsumer extends RabbitMQ<CreateUserMessageBroker> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(MESSAGE_BROKER_URL, loggerService);
  }

  onMessage = async (data: CreateUserMessageBroker): Promise<void> => {
    console.log('🚀 ~ file: rabbitmq-create-user-consumer.ts:21 ~ RabbitMQCreateUserConsumer ~ onMessage= ~ data:', data);
    try {
      const result = await this.userUsecase.createUser({
        userId: data.user_id,
        username: data.username,
      });
      console.log('🚀 ~ file: rabbitmq-create-user-consumer.ts:26 ~ RabbitMQCreateUserConsumer ~ onMessage= ~ result:', result);
      this.ackMessage();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToProcessMessageError.message, e as Error);
      throw MessageBrokerFailedToProcessMessageError;
    }
  };
}

export default RabbitMQCreateUserConsumer;
