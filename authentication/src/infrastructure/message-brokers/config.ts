import RabbitMQCreateProfileProducer from './rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';

const configureMessageBrokers = (MESSAGE_BROKER_URL: string) => {
  const createProfileProducer = new RabbitMQCreateProfileProducer(MESSAGE_BROKER_URL);

  return { createProfileProducer };
};

export default configureMessageBrokers;
