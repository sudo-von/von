import RabbitMQ from '../rabbitmq';
import {
  MessageBrokerFailedToProcessMessageError,
} from '../../message-broker-errors';
import {
  CreateUserMessageBroker,
} from '../../dtos/user-message-broker-dtos';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import LoggerService from '../../../services/logger-service/logger-service';

class RabbitMQUpdateUserConsumer extends RabbitMQ<CreateUserMessageBroker> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(MESSAGE_BROKER_URL, loggerService);
  }

  onMessage = async (data: CreateUserMessageBroker): Promise<void> => {
    try {
      await this.userUsecase.updateUserByUsername(data.username, {
        userId: data.user_id,
        username: data.username,
      });
      this.ackMessage();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToProcessMessageError.message, e as Error);
      throw MessageBrokerFailedToProcessMessageError;
    }
  };
}

export default RabbitMQUpdateUserConsumer;
