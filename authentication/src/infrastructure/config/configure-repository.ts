import mongoose from 'mongoose';
import {
  RepositoryEnvironmentVariables,
} from './configure-environment-variables/configure-repository-environment-variables';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import MongoUserRepository from '../repositories/user-repository/mongo-user-repository/mongo-user-repository';

const configureRepository = async (
  REPOSITORY_ENVIRONMENT_VARIABLES: RepositoryEnvironmentVariables,
): Promise<IUserRepository> => {
  try {
    const {
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    } = REPOSITORY_ENVIRONMENT_VARIABLES;

    await mongoose.connect(DATABASE_URL, {
      dbName: DATABASE_NAME,
      user: DATABASE_USERNAME,
      pass: DATABASE_PASSWORD,
    });

    const userRepository = new MongoUserRepository();

    return userRepository;
  } catch (e) {
    throw new Error(`An error occurred while configuring the repository. ${(e as Error).message}`);
  }
};

export default configureRepository;
