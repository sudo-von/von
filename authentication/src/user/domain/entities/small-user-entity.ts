import { type IUserEntity } from './user-entity';

export interface ISmallUserEntity extends Omit<IUserEntity, 'password' | 'confirm_password'> {
}
