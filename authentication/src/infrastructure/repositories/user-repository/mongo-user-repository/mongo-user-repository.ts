import UserModel from './mongo-user-repository-model';
import {
  CreateUser,
  DetailedUser,
} from '../../../../domain/entities/user-entity/user-entities';
import userDocumentToUser from './mongo-user-repository-mapper';
import createQuestionRepositoryQuery from './mongo-user-repository-query';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';
import {
  CreateSocialNetwork,
  PartialSocialNetwork,
} from '../../../../domain/entities/social-network-entity/social-network-entities';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

class MongoUserRepository implements IUserRepository {
  getUser = async (
    filters?: UserRepositoryFilters,
  ): Promise<DetailedUser | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const userDocument = await UserModel.findOne(query);
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
  };

  getUsers = async (
    filters?: UserRepositoryFilters,
  ): Promise<DetailedUser[]> => {
    const query = createQuestionRepositoryQuery(filters);
    const userDocuments = await UserModel.find(query);
    const users = userDocuments.map((model) => userDocumentToUser(model));
    return users;
  };

  createUser = async (
    payload: CreateUser,
  ): Promise<DetailedUser> => {
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
    payload: Partial<DetailedUser>,
    filters?: UserRepositoryFilters,
  ): Promise<DetailedUser | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar,
      details: payload.details,
      username: payload.username,
      password: payload.password,
    }, {
      new: true,
    });
    if (!updatedUser) return null;
    const user = userDocumentToUser(updatedUser);
    return user;
  };

  createSocialNetwork = async (
    payload: CreateSocialNetwork,
    filters?: UserRepositoryFilters,
  ): Promise<DetailedUser | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const updatedUser = await UserModel.findOneAndUpdate(query, {
      $push: {
        social_networks: {
          src: payload.src,
          url: payload.url,
          name: payload.name,
        },
      },
    }, {
      new: true,
    });
    if (!updatedUser) return null;
    const user = userDocumentToUser(updatedUser);
    return user;
  };

  updateSocialNetworkById = async (
    id: string,
    payload: PartialSocialNetwork,
  ): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({
      'social_networks.id': id,
    }, {
      $set: {
        'social_networks.$.src': payload.src,
        'social_networks.$.url': payload.url,
        'social_networks.$.name': payload.name,
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
