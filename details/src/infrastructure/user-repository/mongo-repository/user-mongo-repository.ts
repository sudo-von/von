import {
  UserModel,
  userModelToUserEntity,
} from './user-mongo-schema';
import {
  CreateUserEntity,
  UpdateUserEntity,
  UserEntity,
} from '../../../domain/entities/user-entity';
import IUserRepository from '../../../domain/repositories/user-repository';

class UserMongoRepository implements IUserRepository {
  getUsers = async (): Promise<UserEntity[]> => {
    const userModels = await UserModel.find();
    const userEntities = userModels.map((model) => userModelToUserEntity(model));
    return userEntities;
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
    });
    if (!updatedUser) return null;
    const userEntity = userModelToUserEntity(updatedUser);
    return userEntity;
  };
}

export default UserMongoRepository;
