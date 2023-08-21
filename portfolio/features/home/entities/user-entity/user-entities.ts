import { Avatar } from "../avatar-entity/avatar-entities";
import { UserDetails } from "../user-details-entity/user-details-entities";
import { SocialNetwork } from "../social-network-entity/social-network-entities";

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: Avatar;
  details?: UserDetails;
  socialNetworks: SocialNetwork[];
};