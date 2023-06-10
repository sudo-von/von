import { UserEntity } from '../../../domain/entities/user-entity';

export type UserCredentials = Pick<UserEntity, 'email' | 'password'>;
