import { UserEntity } from './user-entity';

export type SmallUserEntity = Pick<UserEntity, 'id' | 'name' | 'username' | 'email' | 'profile_picture' | 'about'>;
