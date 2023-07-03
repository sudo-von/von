import ILoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateUserProducer from './rabbitmq/producers/rabbitmq-create-user-producer';
import RabbitMQUpdateUserProducer from './rabbitmq/producers/rabbitmq-update-user-producer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  loggerService: ILoggerService,
) => {
  const createUserProducer = new RabbitMQCreateUserProducer(MESSAGE_BROKER_URL);
  const updateUserProducer = new RabbitMQUpdateUserProducer(MESSAGE_BROKER_URL);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  loggerService.info('Message brokers have been configured.');

  return { createUserProducer, updateUserProducer };
};

export default configureMessageBrokers;
