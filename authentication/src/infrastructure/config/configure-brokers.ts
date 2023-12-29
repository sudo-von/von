import LoggerService from '../services/logger-service/logger-service';
import {
  BrokerEnvironmentVariables,
} from './configure-environment-variables/configure-broker-environment-variables';
import AMQPCreateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-user-producer';
import AMQPUpdateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-update-user-producer';

const configureBrokers = async (
  BROKER_ENVIRONMENT_VARIABLES: BrokerEnvironmentVariables,
  loggerService: LoggerService,
) => {
  const {
    MESSAGE_BROKER_URL,
  } = BROKER_ENVIRONMENT_VARIABLES;

  const createUserProducer = new AMQPCreateUserProducer(MESSAGE_BROKER_URL, loggerService);
  const updateUserProducer = new AMQPUpdateUserProducer(MESSAGE_BROKER_URL, loggerService);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  return {
    createUserProducer,
    updateUserProducer,
  };
};

export default configureBrokers;
