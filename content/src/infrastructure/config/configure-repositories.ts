import mongoose from 'mongoose';
import MongoUserRepository from '../repositories/user-repository/mongo-user-repository/mongo-user-repository';
import MongoVideoRepository from '../repositories/video-repository/mongo-video-repository/mongo-video-repository';

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

  const videoRepository = new MongoVideoRepository();

  return {
    userRepository,
    videoRepository,
  };
};

export default configureRepositories;
