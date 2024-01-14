import UserModel from './mongo-user-repository-model';
import {
  CreateUser,
  DetailedUser,
} from '../../../../domain/entities/user-entity/user-entities';
import userDocumentToUser from './mongo-user-repository-mapper';
import {
  DetailedSocialNetwork,
  CreateSocialNetwork,
  PartialDetailedSocialNetwork,
} from '../../../../domain/entities/social-network-entity/social-network-entities';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

class MongoUserRepository implements IUserRepository {
  getUser = async (): Promise<DetailedUser | null> => {
    const userDocument = await UserModel.findOne();
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user;
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
  ): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({}, {
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

  getSocialNetworkById = async (
    id: string,
  ): Promise<DetailedSocialNetwork | null> => {
    const userDocument = await UserModel.findOne({
      'social_networks._id': id,
    });
    if (!userDocument) return null;
    const user = userDocumentToUser(userDocument);
    return user.socialNetworks.find((sn) => sn.id === id) || null;
  };

  createSocialNetwork = async (
    payload: CreateSocialNetwork,
  ): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({}, {
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
    payload: PartialDetailedSocialNetwork,
  ): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({
      'social_networks._id': id,
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

  deleteSocialNetworkById = async (
    id: string,
  ): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({
      'social_networks._id': id,
    }, {
      $unset: {
        social_networks: 1,
      },
    }, {
      new: true,
    });
    if (!updatedUser) return null;
    const user = userDocumentToUser(updatedUser);
    return user;
  };

  deleteAvatar = async (): Promise<DetailedUser | null> => {
    const updatedUser = await UserModel.findOneAndUpdate({}, {
      $unset: {
        avatar: 1,
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
