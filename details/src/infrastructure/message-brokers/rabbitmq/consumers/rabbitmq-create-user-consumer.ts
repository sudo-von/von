import RabbitMQMessageBroker from '../rabbitmq';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import { CreateUserEntity } from '../../../../domain/entities/user-entity';
import { MessageBrokerCreateUserDto } from '../../dtos/message-broker-user-dto';

class RabbitMQCreateUserConsumer extends RabbitMQMessageBroker<MessageBrokerCreateUserDto> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(MESSAGE_BROKER_URL);
  }

  onMessage = async (data: MessageBrokerCreateUserDto): Promise<void> => {
    const payload: CreateUserEntity = {
      userId: data.user_id,
      username: data.username,
    };
    await this.userUsecase.createUser(payload);
    this.ackMessage();
  };
}

export default RabbitMQCreateUserConsumer;
