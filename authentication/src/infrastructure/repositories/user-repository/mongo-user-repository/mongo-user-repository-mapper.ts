import {
  DetailedUser,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import userDetailskDocumentToUserDetails from '../../user-details-repository/mongo-user-details-repository/mongo-user-details-repository-mapper';
import socialNetworkDocumentToSocialNetwork from '../../social-network-repository/mongo-social-network-repository/mongo-social-network-repository-mapper';

const userDocumentToUser = (document: UserRepositorySchema): DetailedUser => ({
  id: document.id,
  name: document.name,
  email: document.email,
  avatar: document.avatar,
  username: document.username,
  password: document.password,
  details: document.details && userDetailskDocumentToUserDetails(document.details),
  socialNetworks: document.social_networks.map((sn) => socialNetworkDocumentToSocialNetwork(sn)),
});

export default userDocumentToUser;
