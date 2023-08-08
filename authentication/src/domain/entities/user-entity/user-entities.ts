import {
  Avatar,
} from '../avatar-entity/avatar-entities';
import {
  UserDetails,
} from '../user-details-entity/user-details-entities';

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
};

export type DetailedUser = User & {
  avatar?: Avatar;
  details?: UserDetails;
};

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Omit<User, 'id'>;

export type CreateDetailedUser = Omit<DetailedUser, 'id'>;

export type PartialDetailedUser = Partial<Omit<DetailedUser, 'id'>>;

export type UserCredentials = Pick<User, 'email' | 'password'>;

export type DetailedSecureUser = Omit<DetailedUser, 'password'>;
