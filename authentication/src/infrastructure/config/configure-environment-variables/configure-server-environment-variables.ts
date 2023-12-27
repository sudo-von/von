const configureServerEnvironmentVariables = () => {
  const {
    PORT,
    SECRET_KEY,
  } = process.env;

  if (!PORT) throw new Error('PORT is not defined.');

  if (!SECRET_KEY) throw new Error('SECRET_KEY is not defined.');

  const BASE_RADIX = 10;
  const SERVER_PORT = parseInt(PORT, BASE_RADIX);

  return {
    SECRET_KEY,
    SERVER_PORT,
  };
};

export default configureServerEnvironmentVariables;
