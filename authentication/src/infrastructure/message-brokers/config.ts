import RabbitMQCreateProfileProducer from './rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';
import RabbitMQUpdateProfileProducer from './rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';

const configureMessageBrokers = (MESSAGE_BROKER_URL: string) => {
  const createProfileProducer = new RabbitMQCreateProfileProducer(MESSAGE_BROKER_URL);
  const updateProfileProducer = new RabbitMQUpdateProfileProducer(MESSAGE_BROKER_URL);

  return { createProfileProducer, updateProfileProducer };
};

export default configureMessageBrokers;
