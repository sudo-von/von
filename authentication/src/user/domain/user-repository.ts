import { type ICreateUserEntity, type ISmallUserEntity } from './user-model';

interface IUserRepositoryWriter {
  createUser: (user: ICreateUserEntity) => Promise<ISmallUserEntity>
}

interface IUserRepositoryReader {
  findByID: (id: number) => Promise<ISmallUserEntity>
  findByEmail: (email: string) => Promise<ISmallUserEntity>
}

export interface IUserRepository extends IUserRepositoryWriter, IUserRepositoryReader {}
