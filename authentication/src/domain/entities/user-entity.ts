import { AboutEntity, CreateAboutEntity, UpdateAboutEntity } from './about-entity';

export type UserEntity = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePicture: string;
  about: AboutEntity;
}>;

export type EssentialUserEntity = Omit<UserEntity, 'about' | 'password' >;

export type RestrictedUserEntity = Omit<UserEntity, 'password' >;

export type CreateUserEntity = Readonly<
Omit<UserEntity, 'id'> & {
  about: CreateAboutEntity;
}>;

export type UpdateUserEntity = Readonly<
Omit<UserEntity, 'id'> & {
  about: UpdateAboutEntity;
}>;
