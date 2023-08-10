import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  SocialNetworkRepositoryFilters,
} from '../social-network-repository/social-network-repository-filters';

export type UserRepositoryFilters = Partial<
Pick<DetailedSecureUser, 'id' | 'email' | 'username'> & {
  socialNetworks: SocialNetworkRepositoryFilters;
}>;
