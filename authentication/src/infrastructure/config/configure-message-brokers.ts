import LoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateUserProducer from '../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';
import RabbitMQUpdateUserProducer from '../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  loggerService: LoggerService,
) => {
  const createUserProducer = new RabbitMQCreateUserProducer(MESSAGE_BROKER_URL, loggerService);
  const updateUserProducer = new RabbitMQUpdateUserProducer(MESSAGE_BROKER_URL, loggerService);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  return { createUserProducer, updateUserProducer };
};

export default configureMessageBrokers;
