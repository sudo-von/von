import RabbitMQ from '../rabbitmq';
import {
  MessageBrokerFailedToProcessMessageError,
} from '../../message-broker-errors';
import {
  UpdateUserMessageBroker,
} from '../../dtos/user-message-broker-dtos';
import UserUsecase from '../../../../domain/usecases/user-usecase/user-usecase';
import LoggerService from '../../../services/logger-service/logger-service';

class RabbitMQUpdateUserConsumer extends RabbitMQ {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(MESSAGE_BROKER_URL, loggerService);
  }

  onMessage = async (data: Buffer): Promise<void> => {
    try {
      const payload = JSON.parse(data.toString()) as UpdateUserMessageBroker;
      await this.userUsecase.updateUserByUserId(payload.user_id, {
        username: payload.username,
      });
      this.ackMessage();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default RabbitMQUpdateUserConsumer;
