import {
  BasicUser,
  CreateBasicUser,
  UpdateBasicUser,
} from '@entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from '@repositories/user-repository/user-repository-filters';
import IUserRepository from '@repositories/user-repository/user-repository';
import UserModel from './mongo-user-repository-model';
import userDocumentToUser from './mongo-user-repository-mapper';
import createUserRepositoryQuery from './mongo-user-repository-query';

class MongoUserRepository implements IUserRepository {
  getUsers = async (filters?: UserRepositoryFilters): Promise<BasicUser[]> => {
    const query = createUserRepositoryQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((document) => userDocumentToUser(document));
    return users;
  };

  getUser = async (filters?: UserRepositoryFilters): Promise<BasicUser | null> => {
    const query = createUserRepositoryQuery(filters);
    const userDocument = await UserModel.findOne(query);
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
  };

  createUser = async (payload: CreateBasicUser): Promise<BasicUser> => {
    const userDocument = new UserModel({
      user_id: payload.userId,
      username: payload.username,
      metrics: {
        total_views: payload.metrics.totalViews,
      },
    });
    const storedUser = await userDocument.save();
    const user = userDocumentToUser(storedUser);
    return user;
  };

  updateUser = async (
    payload: Partial<UpdateBasicUser>,
    filters?: UserRepositoryFilters,
  ): Promise<BasicUser | null> => {
    const query = createUserRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
      $set: {
        user_id: payload.userId,
        username: payload.username,
        metrics: payload.metrics && {
          total_views: payload.metrics.totalViews,
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
