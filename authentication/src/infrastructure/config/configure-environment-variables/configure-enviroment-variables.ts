import dotenv from 'dotenv';
import configureAPIEnvironmentVariables, {
  APIEnvironmentVariables,
} from './configure-api-environment-variables';
import configureAWSEnvironmentVariables, {
  AWSEnvironmentVariables,
} from './configure-aws-environment-variables';
import configureFileEnvironmentVariables, {
  FileEnvironmentVariables,
} from './configure-file-environment-variables';
import configureTokenEnvironmentVariables, {
  TokenEnvironmentVariables,
} from './configure-token-environment-variables';
import configureBrokerEnvironmentVariables, {
  BrokerEnvironmentVariables,
} from './configure-broker-environment-variables';
import configureRepositoryEnvironmentVariables, {
  RepositoryEnvironmentVariables,
} from './configure-repository-environment-variables';

export type EnvironmentVariables = {
  API_ENVIRONMENT_VARIABLES: APIEnvironmentVariables;
  AWS_ENVIRONMENT_VARIABLES: AWSEnvironmentVariables;
  FILE_ENVIRONMENT_VARIABLES: FileEnvironmentVariables;
  TOKEN_ENVIRONMENT_VARIABLES: TokenEnvironmentVariables;
  BROKER_ENVIRONMENT_VARIABLES: BrokerEnvironmentVariables;
  REPOSITORY_ENVIRONMENT_VARIABLES: RepositoryEnvironmentVariables;
};

const configureEnvironmentVariables = (): EnvironmentVariables => {
  try {
    dotenv.config();

    const apiEnvironmentVariables = configureAPIEnvironmentVariables();

    const awsEnvironmentVariables = configureAWSEnvironmentVariables();

    const fileEnvironmentVariables = configureFileEnvironmentVariables();

    const tokenEnvironmentVariables = configureTokenEnvironmentVariables();

    const brokerEnvironmentVariables = configureBrokerEnvironmentVariables();

    const repositoryEnvironmentVariables = configureRepositoryEnvironmentVariables();

    return {
      API_ENVIRONMENT_VARIABLES: apiEnvironmentVariables,
      AWS_ENVIRONMENT_VARIABLES: awsEnvironmentVariables,
      FILE_ENVIRONMENT_VARIABLES: fileEnvironmentVariables,
      TOKEN_ENVIRONMENT_VARIABLES: tokenEnvironmentVariables,
      BROKER_ENVIRONMENT_VARIABLES: brokerEnvironmentVariables,
      REPOSITORY_ENVIRONMENT_VARIABLES: repositoryEnvironmentVariables,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring environment variables. ${(e as Error).message}`);
  }
};

export default configureEnvironmentVariables;
