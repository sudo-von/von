import {
  AvatarRepositorySchema,
} from '../avatar-repository/avatar-repository-schema';
import {
  PartialUserDetailsRepositorySchema,
} from '../user-details-repository/user-details-repository-schema';
import {
  SocialNetworkRepositorySchema,
} from '../social-network-repository/social-network-repository-schema';

export type UserRepositorySchema = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  avatar?: AvatarRepositorySchema;
  details?: PartialUserDetailsRepositorySchema;
  social_networks: SocialNetworkRepositorySchema[];
};
