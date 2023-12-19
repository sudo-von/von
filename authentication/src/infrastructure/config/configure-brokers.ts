import LoggerService from '../services/logger-service/logger-service';
import AMQPCreateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-user-producer';
import AMQPUpdateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-update-user-producer';

const configureBrokers = async (
  url: string,
  loggerService: LoggerService,
) => {

  const host = `amqp://${url}`;

  const createUserProducer = new AMQPCreateUserProducer(host, loggerService);
  const updateUserProducer = new AMQPUpdateUserProducer(host, loggerService);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  return {
    createUserProducer,
    updateUserProducer,
  };
};

export default configureBrokers;
