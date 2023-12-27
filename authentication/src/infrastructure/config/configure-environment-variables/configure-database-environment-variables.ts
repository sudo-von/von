const configureDatabaseEnvironmentVariables = () => {
  const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,
  } = process.env;

  if (!DATABASE_HOST) throw new Error('DATABASE_HOST is not defined.');

  if (!DATABASE_NAME) throw new Error('DATABASE_NAME is not defined.');

  if (!DATABASE_PORT) throw new Error('DATABASE_PORT is not defined.');

  if (!DATABASE_PASSWORD) throw new Error('DATABASE_PASSWORD is not defined.');

  if (!DATABASE_USERNAME) throw new Error('DATABASE_USERNAME is not defined.');

  const DATABASE_URL = `${DATABASE_HOST}:${DATABASE_PORT}`;

  return {
    DATABASE_URL,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,
  };
};

export default configureDatabaseEnvironmentVariables;
