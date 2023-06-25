import RabbitMQMessageBroker from '../rabbitmq';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import { UpdateUserEntity } from '../../../../domain/entities/user-entity';
import { MessageBrokerUpdateUserDto } from '../../dtos/message-broker-user-dto';

class RabbitMQUpdateUserConsumer extends RabbitMQMessageBroker<MessageBrokerUpdateUserDto> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(MESSAGE_BROKER_URL);
  }

  onMessage = async (data: MessageBrokerUpdateUserDto): Promise<void> => {
    const payload: UpdateUserEntity = {
      userId: data.user_id,
      username: data.username,
    };
    await this.userUsecase.updateUserByUsername(payload.username, payload);
    this.ackMessage();
  };
}

export default RabbitMQUpdateUserConsumer;
