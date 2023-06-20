import RabbitMQMessageBroker from '../rabbitmq-message-broker';
import { CreateProfileEntityDto } from '../../dtos/profille-dto';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import { CreateProfileEntity } from '../../../../domain/entities/profile-entity';

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
        userId: data.user_id,
        username: data.username,
        about: {
          interest: data.about.interest,
          position: data.about.position,
          quote: data.about.quote,
        },
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
