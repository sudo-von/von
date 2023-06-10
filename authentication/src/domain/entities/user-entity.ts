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

export type SmallUserEntity = Pick<UserEntity, 'id' | 'name' | 'username' | 'email' | 'profile_picture' | 'about'>;

export type CreateUserEntity = Readonly<
Omit<UserEntity, 'id'> & {
  about: CreateAboutEntity;
}>;
