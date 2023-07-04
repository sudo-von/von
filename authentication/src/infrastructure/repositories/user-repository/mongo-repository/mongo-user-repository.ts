import UserModel from './mongo-user-model';
import {
  UserEntity,
  UserPayloadEntity,
} from '../../../../domain/entities/user/user-entity';
import userModelToUserEntity from './mongo-user-mapper';
import IUserRepository from '../../../../domain/repositories/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (): Promise<UserEntity[]> => {
    const userModels = await UserModel.find();
    const userEntities = userModels.map((model) => userModelToUserEntity(model));
    return userEntities;
  };

  getUserById = async (id: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findById(id);
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
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

  createUser = async (payload: UserPayloadEntity): Promise<UserEntity> => {
    const userModel = new UserModel({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePictureName: payload.profilePictureName,
    });
    const storedUser = await userModel.save();
    const userEntity = userModelToUserEntity(storedUser);
    return userEntity;
  };

  updateUserByUsername = async (
    username: string,
    payload: UserPayloadEntity,
  ): Promise<UserEntity | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({ username }, {
      $set: {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePictureName: payload.profilePictureName,
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
