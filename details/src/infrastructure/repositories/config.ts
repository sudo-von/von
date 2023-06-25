import mongoose from 'mongoose';
import UserMongoRepository from './user-repository/mongo-repository/user-mongo-repository';
import ProfileMongoRepository from './profile-repository/mongo-repository/profile-mongo-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  await mongoose.connect(DATABASE_URL, {
    user: DATABASE_USERNAME,
    pass: DATABASE_PASSWORD,
  });

  const userRepository = new UserMongoRepository();
  const profileRepository = new ProfileMongoRepository();

  return { userRepository, profileRepository };
};

export default configureRepositories;
