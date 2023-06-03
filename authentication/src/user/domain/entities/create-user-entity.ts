import { UserEntity } from './user-entity';

export type CreateUserEntity = Readonly<Omit<UserEntity, 'id'>>;
