import Broker from '../brokers/broker';
import LoggerService from '../services/logger-service/logger-service';
import {
  BrokerEnvironmentVariables,
} from './configure-environment-variables/configure-broker-environment-variables';
import AMQPCreateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-user-producer';
import AMQPUpdateUserProducer from '../brokers/amqp-broker/amqp-producers/amqp-update-user-producer';

export type ConfigureBrokers = {
  loggerService: LoggerService;
  BROKER_ENVIRONMENT_VARIABLES: BrokerEnvironmentVariables;
};

/* TO-DO: Use a better type instead of any. Refactor required. */
export type Brokers = {
  createUserProducer: Broker<any>;
  updateUserProducer: Broker<any>;
};

const configureBrokers = async ({
  loggerService,
  BROKER_ENVIRONMENT_VARIABLES,
}: ConfigureBrokers): Promise<Brokers> => {
  try {
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
  } catch (e) {
    throw new Error(`An error occurred while configuring the brokers. ${(e as Error).message}`);
  }
};

export default configureBrokers;
