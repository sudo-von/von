import mongoose from 'mongoose';
import MongoUserRepository from '../repositories/user-repository/mongo-user-repository/mongo-user-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_NAME: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: DATABASE_NAME,
      user: DATABASE_USERNAME,
      pass: DATABASE_PASSWORD,
    });

    const userRepository = new MongoUserRepository();

    return { userRepository };
  } catch (e) {
    throw new Error(`There was a database error: ${(e as Error).message}.`);
  }
};

export default configureRepositories;
