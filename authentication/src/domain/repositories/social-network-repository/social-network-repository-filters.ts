import {
  SocialNetwork,
} from '../../entities/social-network-entity/social-network-entities';

export type SocialNetworkRepositoryFilters = Partial<Pick<SocialNetwork, 'id'>>;
