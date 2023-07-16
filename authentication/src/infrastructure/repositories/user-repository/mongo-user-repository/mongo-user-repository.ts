import UserModel from './mongo-user-repository-model';
import {
  User,
  CreateUser,
} from '../../../../domain/entities/user-entity/user-entities';
import userDocumentToUser from './mongo-user-repository-mapper';
import createQuestionRepositoryQuery from './mongo-user-repository-query';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

class MongoUserRepository implements IUserRepository {
  getUser = async (
    filters?: UserRepositoryFilters,
  ): Promise<User | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const userDocument = await UserModel.findOne(query);
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
  };

  getUsers = async (
    filters?: UserRepositoryFilters,
  ): Promise<User[]> => {
    const query = createQuestionRepositoryQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((model) => userDocumentToUser(model));
    return users;
  };

  createUser = async (
    payload: CreateUser,
  ): Promise<User> => {
    const userDocument = new UserModel({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
    });
    const storedUser = await userDocument.save();
    const user = userDocumentToUser(storedUser);
    return user;
  };

  updateUser = async (
    payload: Partial<User>,
    filters?: UserRepositoryFilters,
  ): Promise<User | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar,
      username: payload.username,
      password: payload.password,
    }, {
      new: true,
    });
    if (!updatedUser) return null;
    const user = userDocumentToUser(updatedUser);
    return user;
  };
}

export default MongoUserRepository;
