import dotenv from 'dotenv';
import configureAWSEnvironmentVariables from './configure-aws-environment-variables';
import configureBrokerEnvironmentVariables from './configure-broker-environment-variables';
import configureServerEnvironmentVariables from './configure-server-environment-variables';
import configureDatabaseEnvironmentVariables from './configure-database-environment-variables';

const configureEnvironmentVariables = () => {
  try {
    dotenv.config();

    const {
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    } = configureAWSEnvironmentVariables();

    const {
      MESSAGE_BROKER_URL,
    } = configureBrokerEnvironmentVariables();

    const {
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
    } = configureDatabaseEnvironmentVariables();

    const {
      SECRET_KEY,
      SERVER_PORT,
    } = configureServerEnvironmentVariables();

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
