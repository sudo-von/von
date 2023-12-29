import {
  AWSEnvironmentVariables,
} from './configure-environment-variables/configure-aws-environment-variables';
import AWSS3Service from '../services/file-service/aws-s3-service/aws-s3-service';

const configureFileServices = (AWS_ENVIRONMENT_VARIABLES: AWSEnvironmentVariables) => {
  const {
    AWS_S3_BUCKET,
    AWS_S3_REGION,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY,
  } = AWS_ENVIRONMENT_VARIABLES;

  const avatarDirectory = 'public/avatars';
  const socialNetworkDirectory = 'public/social-networks';

  const avatarFileService = new AWSS3Service(
    avatarDirectory,
    AWS_S3_BUCKET,
    AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_REGION,
  );

  const socialNetworksFileService = new AWSS3Service(
    socialNetworkDirectory,
    AWS_S3_BUCKET,
    AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_REGION,
  );

  return {
    avatarFileService,
    socialNetworksFileService,
  };
};

export default configureFileServices;
