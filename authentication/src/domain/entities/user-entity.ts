import { AboutEntity, CreateAboutEntity } from './about-entity';

export type UserEntity = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profile_picture: string;
  about: AboutEntity;
}>;

export type SmallUserEntity = Omit<UserEntity, 'about' | 'password' >;

export type MediumUserEntity = Omit<UserEntity, 'password' >;

export type CreateUserEntity = Readonly<
Omit<UserEntity, 'id'> & {
  about: CreateAboutEntity;
}>;
