import { CreateProfileEntity } from '../../../domain/entities/profile-entity';
import ProfileUsecase from '../../../domain/usecases/profile-usecase';
import { MessageBrokerChannelIsClosedError, MessageBrokerNoMessageAvailableError } from '../errors/message-broker-error-factories';
import RabbitMQMessageBroker from './rabbitmq-message-broker';

class RabbitMQProfileConsumer extends RabbitMQMessageBroker<CreateProfileEntity> {
  constructor(
    protected readonly BROKER_URL: string,
    protected profileUsecase: ProfileUsecase,
  ) {
    super(BROKER_URL);
  }

  onMessage = async (data: CreateProfileEntity): Promise<void> => {
    if (!this.channel) throw MessageBrokerChannelIsClosedError;
    if (!this.message) throw MessageBrokerNoMessageAvailableError;
    await this.profileUsecase.createProfile(data);
  };
}

export default RabbitMQProfileConsumer;
