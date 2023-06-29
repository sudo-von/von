import mongoose from 'mongoose';
import MongoUserRepository from './user-repository/mongo-repository/mongo-user-repository';
import MongoProfileRepository from './profile-repository/mongo-repository/profile-mongo-repository';

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
    const profileRepository = new MongoProfileRepository();

    console.log('💽 Repositories have been configured.');

    return { userRepository, profileRepository };
  } catch (e) {
    throw new Error(`An error occurred with the database: ${(e as Error).message}.`);
  }
};

export default configureRepositories;
