import UserModel from './mongo-user-model';
import userModelToUser from './mongo-user-mapper';
import {
  User,
  UserPayload,
} from '../../../../domain/entities/user/user-entities';
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

  getUserByUsername = async (username: string): Promise<User | null> => {
    const userModel = await UserModel.findOne({ username });
    if (!userModel) return null;
    const user = userModelToUser(userModel);
    return user;
  };

  createUser = async (payload: UserPayload): Promise<User> => {
    const userModel = new UserModel({
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalViews: payload.metrics.totalViews,
        totalAnswers: payload.metrics.totalAnswers,
        totalQuestions: payload.metrics.totalQuestions,
      },
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
        userId: payload.userId,
        username: payload.username,
        metrics: {
          totalViews: payload.metrics.totalViews,
          totalAnswers: payload.metrics.totalAnswers,
          totalQuestions: payload.metrics.totalQuestions,
        },
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
