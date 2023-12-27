const configureAWSEnvironmentVariables = () => {
  const {
    AWS_S3_BUCKET,
    AWS_S3_REGION,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY,
  } = process.env;

  if (!AWS_S3_BUCKET) throw new Error('AWS_S3_BUCKET is not defined.');

  if (!AWS_S3_REGION) throw new Error('AWS_S3_REGION is not defined.');

  if (!AWS_S3_ACCESS_KEY_ID) throw new Error('AWS_S3_ACCESS_KEY_ID is not defined.');

  if (!AWS_S3_SECRET_ACCESS_KEY) throw new Error('AWS_S3_SECRET_ACCESS_KEY is not defined.');

  return {
    AWS_S3_BUCKET,
    AWS_S3_REGION,
    AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY,
  };
};

export default configureAWSEnvironmentVariables;
