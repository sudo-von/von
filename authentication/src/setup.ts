import dotenv from 'dotenv';

const configureEnvironmentVariables = () => {
  dotenv.config({ path: `${__dirname}/../.env` });
  const { SECRET_KEY, PORT } = process.env;
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }
  if (!PORT) {
    throw new Error('PORT is not defined');
  }
  const SERVER_PORT = parseInt(PORT, 10);
  return { SECRET_KEY, SERVER_PORT };
};

export default configureEnvironmentVariables;
