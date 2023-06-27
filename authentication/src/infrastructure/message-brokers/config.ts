import RabbitMQCreateUserProducer from './rabbitmq/producers/rabbitmq-create-user-producer';
import RabbitMQUpdateUserProducer from './rabbitmq/producers/rabbitmq-update-user-producer';

const configureMessageBrokers = async (MESSAGE_BROKER_URL: string) => {
  const createUserProducer = new RabbitMQCreateUserProducer(MESSAGE_BROKER_URL);
  const updateUserProducer = new RabbitMQUpdateUserProducer(MESSAGE_BROKER_URL);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  console.log('📦 Message brokers have been configured.');

  return { createUserProducer, updateUserProducer };
};

export default configureMessageBrokers;
