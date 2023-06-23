import dotenv from 'dotenv';

const configureEnvironmentVariables = () => {
  const BASE_PATH = `${__dirname}/../../.env`;
  dotenv.config({ path: BASE_PATH });

  const {
    PORT,
    SECRET_KEY,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    MESSAGE_BROKER_HOST,
    MESSAGE_BROKER_PORT,
  } = process.env;

  if (!PORT) {
    throw new Error('🚫 PORT is not defined.');
  }
  if (!SECRET_KEY) {
    throw new Error('🚫 SECRET_KEY is not defined.');
  }
  if (!DATABASE_HOST) {
    throw new Error('🚫 DATABASE_HOST is not defined.');
  }
  if (!DATABASE_PORT) {
    throw new Error('🚫 DATABASE_PORT is not defined.');
  }
  if (!DATABASE_USERNAME) {
    throw new Error('🚫 DATABASE_USERNAME is not defined.');
  }
  if (!DATABASE_PASSWORD) {
    throw new Error('🚫 DATABASE_PASSWORD is not defined.');
  }
  if (!MESSAGE_BROKER_HOST) {
    throw new Error('🚫 MESSAGE_BROKER_HOST is not defined.');
  }
  if (!MESSAGE_BROKER_PORT) {
    throw new Error('🚫 MESSAGE_BROKER_PORT is not defined.');
  }

  const BASE_RADIX = 10;
  const SERVER_PORT = parseInt(PORT, BASE_RADIX);
  const MESSAGE_BROKER_URL = `${MESSAGE_BROKER_HOST}:${MESSAGE_BROKER_PORT}`;
  const DATABASE_URL = `${DATABASE_HOST}:${DATABASE_PORT}`;

  return {
    SECRET_KEY,
    SERVER_PORT,
    DATABASE_URL,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    MESSAGE_BROKER_URL,
  };
};

export default configureEnvironmentVariables;
