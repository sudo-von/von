import dotenv from 'dotenv';

const configureEnvironmentVariables = () => {
  dotenv.config({ path: `${__dirname}/../../.env` });
  const { SECRET_KEY } = process.env;
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }
  return { SECRET_KEY };
};

export default configureEnvironmentVariables;
