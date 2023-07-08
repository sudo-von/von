import UserModel from './mongo-user-model';
import userDocumentToUser from './mongo-user-mapper';
import {
  User,
  UserPayload,
} from '../../../../domain/entities/user/user-entities';
import {
  UserFilters,
} from '../../../../domain/repositories/user/user-filters';
import createQuestionDocumentQuery from './mongo-user-filters';
import IUserRepository from '../../../../domain/repositories/user/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (filters?: UserFilters): Promise<User[]> => {
    const query = createQuestionDocumentQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((document) => userDocumentToUser(document));
    return users;
  };

  getUser = async (filters?: UserFilters): Promise<User | null> => {
    const query = createQuestionDocumentQuery(filters);
    const userDocument = await UserModel.findOne(query);
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
  };

  createUser = async (payload: UserPayload): Promise<User> => {
    const userDocument = new UserModel({
      user_id: payload.userId,
      username: payload.username,
      metrics: {
        total_views: payload.metrics.totalViews,
        total_answers: payload.metrics.totalAnswers,
        total_questions: payload.metrics.totalQuestions,
      },
    });
    const storedUser = await userDocument.save();
    const user = userDocumentToUser(storedUser);
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
    const user = userDocumentToUser(updatedUser);
    return user;
  };
}

export default MongoUserRepository;
