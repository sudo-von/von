import ProfileUsecase from '../../domain/usecases/profile-usecase';
import RabbitMQCreateProfileConsumer from './rabbitmq/consumers/rabbitmq-create-profile-consumer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  profileUsecase: ProfileUsecase,
) => {
  const createProfileConsumer = new RabbitMQCreateProfileConsumer(
    MESSAGE_BROKER_URL,
    profileUsecase,
  );

  await createProfileConsumer.connect();
  await createProfileConsumer.consumeMessage('Profile:CreateProfile');

  return { createProfileConsumer };
};

export default configureMessageBrokers;
