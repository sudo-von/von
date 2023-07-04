import {
  CreateProfilePicture,
  UpdateProfilePicture,
} from '../profile-picture/profile-picture-entities';

export type User = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureName: string;
}>;

export type UserPayload = Omit<User, 'id'>;

export type RestrictedUser = Omit<User, 'password'>;

export type UserCredentials = Pick<User, 'email' | 'password'>;

export type CreateUser = Omit<UserPayload, 'profilePictureName'> & {
  profilePicture: CreateProfilePicture
};

export type UpdateUser = Omit<UserPayload, 'profilePictureName'> & {
  profilePicture: UpdateProfilePicture
};
