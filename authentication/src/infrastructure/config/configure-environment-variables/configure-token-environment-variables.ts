export type TokenEnvironmentVariables = {
  SECRET_KEY: string;
};

const configureTokenEnvironmentVariables = (): TokenEnvironmentVariables => {
  const {
    SECRET_KEY,
  } = process.env;

  if (!SECRET_KEY) throw new Error('SECRET_KEY is not defined.');

  return {
    SECRET_KEY,
  };
};

export default configureTokenEnvironmentVariables;
