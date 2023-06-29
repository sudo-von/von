import UserModel from './mongo-user-model';
import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../../../../domain/entities/user/user-entity';
import userModelToUserEntity from './mongo-user-mapper';
import IUserRepository from '../../../../domain/repositories/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (): Promise<UserEntity[]> => {
    const userModels = await UserModel.find();
    const userEntities = userModels.map((model) => userModelToUserEntity(model));
    return userEntities;
  };

  getUserByUserId = async (userId: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findOne({ userId });
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
      userId: payload.userId,
      username: payload.username,
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
        userId: payload.userId,
        username: payload.username,
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
