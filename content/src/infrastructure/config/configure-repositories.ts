import mongoose from 'mongoose';
import MongoUserRepository from '../repositories/user-repository/mongo-user-repository/mongo-user-repository';
import MongoContentRepository from '../repositories/content-repository/mongo-content-repository/mongo-content-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_NAME: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  await mongoose.connect(DATABASE_URL, {
    dbName: DATABASE_NAME,
    user: DATABASE_USERNAME,
    pass: DATABASE_PASSWORD,
  });

  const userRepository = new MongoUserRepository();

  const contentRepository = new MongoContentRepository();

  return {
    userRepository,
    contentRepository,
  };
};

export default configureRepositories;
