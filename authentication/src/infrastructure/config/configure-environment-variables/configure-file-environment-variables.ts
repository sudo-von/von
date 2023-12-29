export type FileEnvironmentVariables = {
  AVATAR_DIRECTORY: string;
  SOCIAL_NETWORK_DIRECTORY: string;
};

const configureFileEnvironmentVariables = (): FileEnvironmentVariables => {
  const {
    AVATAR_DIRECTORY,
    SOCIAL_NETWORK_DIRECTORY,
  } = process.env;

  if (!AVATAR_DIRECTORY) throw new Error('AVATAR_DIRECTORY is not defined.');

  if (!SOCIAL_NETWORK_DIRECTORY) throw new Error('SOCIAL_NETWORK_DIRECTORY is not defined.');

  return {
    AVATAR_DIRECTORY,
    SOCIAL_NETWORK_DIRECTORY,
  };
};

export default configureFileEnvironmentVariables;
