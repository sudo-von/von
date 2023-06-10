import { CreateAboutEntity } from './create-about-entity';
import { UserEntity } from './user-entity';

export type CreateUserEntity = Readonly<
Omit<UserEntity, 'id'> & {
  about: CreateAboutEntity;
}>;
