import UserModel from './mongo-user-repository-model';
import userDocumentToUser from './mongo-user-repository-mapper';
import {
  User,
  UserPayload,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';
import createUserRepositoryQuery from './mongo-user-repository-query';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

class MongoUserRepository implements IUserRepository {
  getUsers = async (filters?: UserRepositoryFilters): Promise<User[]> => {
    const query = createUserRepositoryQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((document) => userDocumentToUser(document));
    return users;
  };

  getUser = async (filters?: UserRepositoryFilters): Promise<User | null> => {
    const query = createUserRepositoryQuery(filters);
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

  updateUser = async (
    payload: UserPayload,
    filters?: UserRepositoryFilters,
  ): Promise<User | null> => {
    const query = createUserRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
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
