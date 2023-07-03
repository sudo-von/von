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
  profilePictureUrl: string;
}>;

export type UserPayload = Omit<UserEntity, 'id'>;

export type CreateUserEntity = Omit<UserPayload, 'profilePictureUrl'> & {
  profilePicture: CreateProfilePicture
};

export type UpdateUserEntity = Omit<UserPayload, 'profilePictureUrl'> & {
  profilePicture: UpdateProfilePicture
};

export type RestrictedUserEntity = Omit<UserEntity, 'password'>;
