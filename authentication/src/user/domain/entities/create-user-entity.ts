import { type IUserEntity } from './user-entity';

export interface ICreateUserEntity extends Omit<IUserEntity, 'id'> {
};
