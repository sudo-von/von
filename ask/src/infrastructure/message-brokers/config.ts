import ProfileUsecase from '../../domain/usecases/profile-usecase';
import RabbitMQCreateProfileConsumer from './rabbitmq/rabbitmq-create-profile-consumer';

const configureMessageBrokers = (
  MESSAGE_BROKER_HOST: string,
  MESSAGE_BROKER_PORT: string,
  profileUsecase: ProfileUsecase,
) => {
  const MESSAGE_BROKER_URL = `${MESSAGE_BROKER_HOST}:${MESSAGE_BROKER_PORT}`;
  const createProfileConsumer = new RabbitMQCreateProfileConsumer(
    MESSAGE_BROKER_URL,
    profileUsecase,
  );
  return { createProfileConsumer };
};

export default configureMessageBrokers;
