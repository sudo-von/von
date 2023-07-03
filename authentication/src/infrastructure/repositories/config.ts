import mongoose from 'mongoose';
import ILoggerService from '../services/logger-service/logger-service';
import MongoUserRepository from './user-repository/mongo-repository/mongo-user-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_NAME: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
  loggerService: ILoggerService,
) => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: DATABASE_NAME,
      user: DATABASE_USERNAME,
      pass: DATABASE_PASSWORD,
    });

    const userRepository = new MongoUserRepository();

    loggerService.info('Repositories have been configured.');

    return { userRepository };
  } catch (e) {
    throw new Error(`An error occurred with the database: ${(e as Error).message}.`);
  }
};

export default configureRepositories;
