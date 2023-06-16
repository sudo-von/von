import RabbitMQMessageBroker from './rabbitmq-message-broker';
import ProfileUsecase from '../../../domain/usecases/profile-usecase';
import { CreateProfileEntity } from '../../../domain/entities/profile-entity';
import { MessageBrokerChannelIsClosedError, MessageBrokerNoMessageAvailableError } from '../errors/message-broker-error-factories';

class RabbitMQCreateProfileConsumer extends RabbitMQMessageBroker<CreateProfileEntity> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected profileUsecase: ProfileUsecase,
  ) {
    super(MESSAGE_BROKER_URL);
  }

  onMessage = async (data: CreateProfileEntity): Promise<void> => {
    if (!this.channel) throw MessageBrokerChannelIsClosedError;
    if (!this.message) throw MessageBrokerNoMessageAvailableError;
    await this.profileUsecase.createProfile(data);
    this.channel.ack(this.message);
    this.message = undefined;
  };
}

export default RabbitMQCreateProfileConsumer;
