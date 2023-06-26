import mongoose from 'mongoose';
import MongoUserRepository from './user-repository/mongo-repository/mongo-user-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  try {
    await mongoose.connect(DATABASE_URL, {
      user: DATABASE_USERNAME,
      pass: DATABASE_PASSWORD,
    });

    const userRepository = new MongoUserRepository();

    return { userRepository };
  } catch (e) {
    throw new Error(`An error occurred with the database: ${(e as Error).message}.`);
  }
};

export default configureRepositories;
