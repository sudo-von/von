import dotenv from 'dotenv';

const configureEnvironmentVariables = () => {
  try {
    dotenv.config();

    const {
      PORT,
      SECRET_KEY,
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      DATABASE_HOST,
      DATABASE_NAME,
      DATABASE_PORT,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
      MESSAGE_BROKER_HOST,
      MESSAGE_BROKER_PORT,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    } = process.env;

    if (!PORT) throw new Error('PORT is not defined.');

    if (!SECRET_KEY) throw new Error('SECRET_KEY is not defined.');

    if (!AWS_S3_BUCKET) throw new Error('AWS_S3_BUCKET is not defined.');

    if (!AWS_S3_REGION) throw new Error('AWS_S3_REGION is not defined.');

    if (!DATABASE_HOST) throw new Error('DATABASE_HOST is not defined.');

    if (!DATABASE_NAME) throw new Error('DATABASE_NAME is not defined.');

    if (!DATABASE_PORT) throw new Error('DATABASE_PORT is not defined.');

    if (!DATABASE_PASSWORD) throw new Error('DATABASE_PASSWORD is not defined.');

    if (!DATABASE_USERNAME) throw new Error('DATABASE_USERNAME is not defined.');

    if (!MESSAGE_BROKER_HOST) throw new Error('MESSAGE_BROKER_HOST is not defined.');

    if (!MESSAGE_BROKER_PORT) throw new Error('MESSAGE_BROKER_PORT is not defined.');

    if (!AWS_S3_ACCESS_KEY_ID) throw new Error('AWS_S3_ACCESS_KEY_ID is not defined.');

    if (!AWS_S3_SECRET_ACCESS_KEY) throw new Error('AWS_S3_SECRET_ACCESS_KEY is not defined.');

    const BASE_RADIX = 10;
    const SERVER_PORT = parseInt(PORT, BASE_RADIX);
    const DATABASE_URL = `${DATABASE_HOST}:${DATABASE_PORT}`;
    const MESSAGE_BROKER_URL = `${MESSAGE_BROKER_HOST}:${MESSAGE_BROKER_PORT}`;

    return {
      SECRET_KEY,
      SERVER_PORT,
      DATABASE_URL,
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      DATABASE_NAME,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
      MESSAGE_BROKER_URL,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring environment variables. ${(e as Error).message}`);
  }
};

export default configureEnvironmentVariables;
