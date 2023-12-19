import AWSS3Service from '../services/file-service/aws-s3-service/aws-s3-service';

const configureFileServices = (
  AWS_S3_REGION: string,
  AWS_S3_BUCKET: string,
  AWS_S3_ACCESS_KEY_ID: string,
  AWS_S3_SECRET_ACCESS_KEY: string,
) => {
  const avatarDirectory = 'avatars';
  const socialNetworkDirectory = 'social-networks';

  const avatarFileService = new AWSS3Service(
    avatarDirectory,
    AWS_S3_BUCKET,
    AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_REGION
  );
  const socialNetworksFileService = new AWSS3Service(
    socialNetworkDirectory,
    AWS_S3_BUCKET,
    AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_REGION
  );

  return {
    avatarFileService,
    socialNetworksFileService,
  };
};

export default configureFileServices;
