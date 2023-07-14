import {
  Avatar,
  CreateAvatar,
  UpdateAvatar,
} from '../profile-picture-entity/profile-picture-entities';

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
};

export type SecureUser = Omit<User, 'password'>;

export type UserCredentials = Pick<User, 'email' | 'password'>;

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Partial<Omit<User, 'id'>>;

export type UserWithFile = Readonly<Omit<User, 'id' | 'avatar'> & {
  avatar: Avatar
}>;

export type CreateUserWithFile = Readonly<Omit<UserWithFile, 'avatarFile'> & {
  avatar: CreateAvatar;
}>;

export type UpdateUserWithFileOptionalFields = Partial<Omit<UserWithFile, 'password' | 'avatar'>>;

export type UpdateUserWithFileRequiredFields = Pick<UserCredentials, 'password'>;

export type UpdateUserWithFile = Readonly<UpdateUserWithFileOptionalFields & Partial<{
  avatar: UpdateAvatar;
}> & UpdateUserWithFileRequiredFields>;
