import { type ICreateUserEntity } from '../entities/create-user-entity';
import { type ISmallUserEntity } from '../entities/small-user-entity';

interface IUserRepositoryWriter {
  createUser: (user: ICreateUserEntity) => Promise<ISmallUserEntity>
}

interface IUserRepositoryReader {
  findByID: (id: number) => Promise<ISmallUserEntity | null>
  findByEmail: (email: string) => Promise<ISmallUserEntity | null>
}

export interface IUserRepository extends IUserRepositoryWriter, IUserRepositoryReader {}
