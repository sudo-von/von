import {
  AvatarResponse,
} from '../avatar-entity/avatar-response-entities';
import {
  UserDetailsResponse,
} from '../user-details-entity/user-details-response-entities';
import {
  SocialNetworkResponse,
} from '../social-network-entity/social-networks-response-entities';

export type SecureUserResponse = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: AvatarResponse;
  details?: UserDetailsResponse;
  social_networks: SocialNetworkResponse[];
};
