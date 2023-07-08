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

  getUserByUserId = async (userId: string): Promise<User | null> => {
    const userModel = await UserModel.findOne({ user_id: userId });
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
      user_id: payload.userId,
      username: payload.username,
      metrics: {
        total_views: payload.metrics.totalViews,
        total_answers: payload.metrics.totalAnswers,
        total_questions: payload.metrics.totalQuestions,
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
        user_id: payload.userId,
        username: payload.username,
        metrics: {
          total_views: payload.metrics.totalViews,
          total_answers: payload.metrics.totalAnswers,
          total_questions: payload.metrics.totalQuestions,
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
