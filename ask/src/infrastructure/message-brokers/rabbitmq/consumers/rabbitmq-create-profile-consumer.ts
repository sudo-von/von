import RabbitMQMessageBroker from '../rabbitmq-message-broker';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import { CreateProfileEntity } from '../../../../domain/entities/profile-entity';

type CreateProfileEntityDto = Readonly<Omit<CreateProfileEntity, 'statistics'>>;

class RabbitMQCreateProfileConsumer extends RabbitMQMessageBroker<CreateProfileEntityDto> {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected profileUsecase: ProfileUsecase,
  ) {
    super(MESSAGE_BROKER_URL);
  }

  onMessage = async (data: CreateProfileEntityDto): Promise<void> => {
    try {
      const createProfileEntity: CreateProfileEntity = {
        userId: data.userId,
        username: data.username,
      };
      await this.profileUsecase.createProfile(createProfileEntity);
    } catch (e) {
      console.log(e);
    } finally {
      this.ackMessage();
    }
  };
}

export default RabbitMQCreateProfileConsumer;
