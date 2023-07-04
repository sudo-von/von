import UserModel from './mongo-user-model';
import {
  User,
  UserPayload,
} from '../../../../domain/entities/user/user-entities';
import userModelToUser from './mongo-user-mapper';
import IUserRepository from '../../../../domain/repositories/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (): Promise<User[]> => {
    const userModels = await UserModel.find();
    const users = userModels.map((model) => userModelToUser(model));
    return users;
  };

  getUserById = async (id: string): Promise<User | null> => {
    const userModel = await UserModel.findById(id);
    if (!userModel) return null;
    const user = userModelToUser(userModel);
    return user;
  };

  getUserByEmail = async (email: string): Promise<User | null> => {
    const userModel = await UserModel.findOne({ email });
    if (!userModel) return null;
    const user = userModelToUser(userModel);
    return user;
  };

  getUserByUsername = async (username: string): Promise<User | null> => {
    const userModel = await UserModel.findOne({ username });
    if (!userModel) return null;
    const user = userModelToUser(userModel);
    return user;
  };

  createUser = async (payload: UserPayload): Promise<User> => {
    const userModel = new UserModel({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePictureName: payload.profilePictureName,
    });
    const storedUser = await userModel.save();
    const user = userModelToUser(storedUser);
    return user;
  };

  updateUserByUsername = async (
    username: string,
    payload: UserPayload,
  ): Promise<User | null> => {
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
    const user = userModelToUser(updatedUser);
    return user;
  };
}

export default MongoUserRepository;
