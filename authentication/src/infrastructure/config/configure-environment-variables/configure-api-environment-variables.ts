export type APIEnvironmentVariables = {
  API_PORT: number;
};

const configureAPIEnvironmentVariables = (): APIEnvironmentVariables => {
  const {
    PORT,
  } = process.env;

  if (!PORT) throw new Error('PORT is not defined.');

  const BASE_RADIX = 10;
  const API_PORT = parseInt(PORT, BASE_RADIX);

  return {
    API_PORT,
  };
};

export default configureAPIEnvironmentVariables;
