export type BrokerEnvironmentVariables = {
  MESSAGE_BROKER_URL: string;
};

const configureBrokerEnvironmentVariables = (): BrokerEnvironmentVariables => {
  const {
    MESSAGE_BROKER_HOST,
    MESSAGE_BROKER_PORT,
  } = process.env;

  if (!MESSAGE_BROKER_HOST) throw new Error('MESSAGE_BROKER_HOST is not defined.');

  if (!MESSAGE_BROKER_PORT) throw new Error('MESSAGE_BROKER_PORT is not defined.');

  const MESSAGE_BROKER_URL = `${MESSAGE_BROKER_HOST}:${MESSAGE_BROKER_PORT}`;

  return {
    MESSAGE_BROKER_URL,
  };
};

export default configureBrokerEnvironmentVariables;
