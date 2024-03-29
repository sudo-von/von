import UserModel from './mongo-user-repository-model';
import {
  BasicUser,
  CreateBasicUser,
  PartialBasicUser,
} from '../../../../domain/entities/user-entity/user-entities';
import userDocumentToUser from './mongo-user-repository-mapper';
import createUserRepositoryQuery from './mongo-user-repository-query';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

class MongoUserRepository implements IUserRepository {
  getUser = async (
    filters?: UserRepositoryFilters,
  ): Promise<BasicUser | null> => {
    const query = createUserRepositoryQuery(filters);
    const userDocument = await UserModel.findOne(query);
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
  };

  getUsers = async (
    filters?: UserRepositoryFilters,
  ): Promise<BasicUser[]> => {
    const query = createUserRepositoryQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((document) => userDocumentToUser(document));
    return users;
  };

  createUser = async (
    payload: CreateBasicUser,
  ): Promise<BasicUser> => {
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
    payload: PartialBasicUser,
    filters?: UserRepositoryFilters,
  ): Promise<BasicUser | null> => {
    const query = createUserRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
      user_id: payload.userId,
      username: payload.username,
      metrics: payload.metrics && {
        total_views: payload.metrics.totalViews,
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
