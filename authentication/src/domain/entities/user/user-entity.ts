import {
  CreateProfilePicture,
  UpdateProfilePicture,
} from '../profile-picture/profile-picture-entity';

export type UserEntity = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureName: string;
}>;

export type UserPayloadEntity = Omit<UserEntity, 'id'>;

export type RestrictedUserEntity = Omit<UserEntity, 'password'>;

export type UserCredentialsEntity = Pick<UserEntity, 'email' | 'password'>;

export type CreateUserEntity = Omit<UserPayloadEntity, 'profilePictureName'> & {
  profilePicture: CreateProfilePicture
};

export type UpdateUserEntity = Omit<UserPayloadEntity, 'profilePictureName'> & {
  profilePicture: UpdateProfilePicture
};
