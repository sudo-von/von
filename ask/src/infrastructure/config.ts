import dotenv from 'dotenv';

const configureEnvironmentVariables = () => {
  dotenv.config({ path: `${__dirname}/../../.env` });
  const {
    PORT,
    SECRET_KEY,
    MESSAGE_BROKER_HOST,
    MESSAGE_BROKER_PORT,
  } = process.env;
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }
  if (!PORT) {
    throw new Error('PORT is not defined');
  }
  if (!MESSAGE_BROKER_HOST) {
    throw new Error('MESSAGE_BROKER_HOST is not defined');
  }
  if (!MESSAGE_BROKER_PORT) {
    throw new Error('MESSAGE_BROKER_PORT is not defined');
  }
  const SERVER_PORT = parseInt(PORT, 10);
  return {
    SECRET_KEY, SERVER_PORT, MESSAGE_BROKER_HOST, MESSAGE_BROKER_PORT,
  };
};

export default configureEnvironmentVariables;
