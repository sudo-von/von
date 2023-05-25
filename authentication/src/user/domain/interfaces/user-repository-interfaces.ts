import { type ICreateUserEntity } from '../entities/create-user-entity';
import { type ISmallUserEntity } from '../entities/small-user-entity';

interface IUserRepositoryWriter {
  createUser: (user: ICreateUserEntity) => Promise<ISmallUserEntity>
}

interface IUserRepositoryReader {
  findByID: (id: number) => Promise<ISmallUserEntity>
  findByEmail: (email: string) => Promise<ISmallUserEntity>
}

export interface IUserRepository extends IUserRepositoryWriter, IUserRepositoryReader {}
