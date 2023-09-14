import {
  Avatar,
} from '../avatar-entity/avatar-entities';
import {
  UserDetails,
} from '../user-details-entity/user-details-entities';
import {
  SocialNetwork,
} from '../social-network-entity/social-network-entities';

export type User = {
  email: string;
  id: string;
  name: string;
  password: string;
  username: string;
};

export type DetailedUser = User & {
  avatar?: Avatar;
  details?: UserDetails;
  socialNetworks: SocialNetwork[];
};

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Omit<User, 'id'>;

export type UserCredentials = Pick<User, 'email' | 'password'>;

export type CreateDetailedUser = Omit<DetailedUser, 'id'>;

export type PartialDetailedUser = Partial<Omit<DetailedUser, 'id'>>;

export type DetailedSecureUser = Omit<DetailedUser, 'password'>;
