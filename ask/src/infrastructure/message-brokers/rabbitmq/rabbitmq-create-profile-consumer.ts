import RabbitMQMessageBroker from './rabbitmq-message-broker';
import ProfileUsecase from '../../../domain/usecases/profile-usecase';
import { CreateProfileEntity } from '../../../domain/entities/profile-entity';
import { MessageBrokerChannelIsClosedError, MessageBrokerNoMessageAvailableError } from '../errors/message-broker-error-factories';

type CreateProfileEntityDto = {
  userId: string;
  username: string;
};

class RabbitMQCreateProfileConsumer extends RabbitMQMessageBroker<CreateProfileEntityDto> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected profileUsecase: ProfileUsecase,
  ) {
    super(MESSAGE_BROKER_URL);
  }

  onMessage = async (data: CreateProfileEntityDto): Promise<void> => {
    if (!this.channel) throw MessageBrokerChannelIsClosedError;
    if (!this.message) throw MessageBrokerNoMessageAvailableError;

    const createProfileEntity: CreateProfileEntity = {
      userId: data.userId,
      username: data.username,
      statistics: {
        total_answers: 0,
        total_questions: 0,
        total_views: 0,
      },
    };

    await this.profileUsecase.createProfile(createProfileEntity);

    this.channel.ack(this.message);
    this.message = undefined;
  };
}

export default RabbitMQCreateProfileConsumer;
