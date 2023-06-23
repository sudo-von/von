import mongoose from 'mongoose';
import MongoUserRepository from './user-repository/mongo-repository/mongo-user-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  await mongoose.connect(DATABASE_URL, {
    user: DATABASE_USERNAME,
    pass: DATABASE_PASSWORD,
  });

  const userRepository = new MongoUserRepository();

  return { userRepository };
};

export default configureRepositories;
