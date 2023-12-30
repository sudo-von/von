import FileService from '../../domain/services/file-service/file-service';
import {
  AWSEnvironmentVariables,
} from './configure-environment-variables/configure-aws-environment-variables';
import {
  FileEnvironmentVariables,
} from './configure-environment-variables/configure-file-environment-variables';
import AWSS3Service from '../services/file-service/aws-s3-service/aws-s3-service';

export type FileServices = {
  avatarFileService: FileService;
  socialNetworkFileService: FileService;
};

const configureFileServices = (
  AWS_ENVIRONMENT_VARIABLES: AWSEnvironmentVariables,
  FILE_ENVIRONMENT_VARIABLES: FileEnvironmentVariables,
): FileServices => {
  try {
    const {
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    } = AWS_ENVIRONMENT_VARIABLES;

    const {
      AVATAR_DIRECTORY,
      SOCIAL_NETWORK_DIRECTORY,
    } = FILE_ENVIRONMENT_VARIABLES;

    const avatarFileService = new AWSS3Service(
      AVATAR_DIRECTORY,
      AWS_S3_BUCKET,
      AWS_S3_SECRET_ACCESS_KEY,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_REGION,
    );

    const socialNetworkFileService = new AWSS3Service(
      SOCIAL_NETWORK_DIRECTORY,
      AWS_S3_BUCKET,
      AWS_S3_SECRET_ACCESS_KEY,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_REGION,
    );

    return {
      avatarFileService,
      socialNetworkFileService,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring the file services. ${(e as Error).message}`);
  }
};

export default configureFileServices;
