import UserModel from './mongo-user-schema';
import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../../../../domain/entities/user-entity';
import userModelToUserEntity from './mongo-user-mapper';
import IUserRepository from '../../../../domain/repositories/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (): Promise<UserEntity[]> => {
    const userModels = await UserModel.find();
    const userEntities = userModels.map((model) => userModelToUserEntity(model));
    return userEntities;
  };

  getUserByEmail = async (email: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findOne({ email });
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
  };

  getUserByUsername = async (username: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findOne({ username });
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
  };

  createUser = async (payload: CreateUserEntity): Promise<UserEntity> => {
    const userModel = new UserModel({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePicture: payload.profilePicture,
    });
    const storedUser = await userModel.save();
    const userEntity = userModelToUserEntity(storedUser);
    return userEntity;
  };

  updateUserByUsername = async (
    username: string,
    payload: UpdateUserEntity,
  ): Promise<UserEntity | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({ username }, {
      $set: {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: payload.profilePicture,
      },
    }, {
      new: true,
    });
    if (!updatedUser) return null;
    const userEntity = userModelToUserEntity(updatedUser);
    return userEntity;
  };
}

export default MongoUserRepository;
