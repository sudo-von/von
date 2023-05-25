import { type ISmallUserEntity, type ICreateUserEntity } from './user-model';
import { type IUserRepository } from './user-repository';

interface IUserUsecaseWriter {
  createUser: (user: ICreateUserEntity) => Promise<ISmallUserEntity>
}

export interface IUserUsecase extends IUserUsecaseWriter {
  repository: IUserRepository
}

export class UserUsecase implements IUserUsecase {
  constructor (public repository: IUserRepository) {}

  async createUser (user: ICreateUserEntity): Promise<ISmallUserEntity> {
    if (user.password !== user.confirm_password) throw new Error('There was an error... passwords dont match');

    const existingUser = await this.repository.findByEmail(user.email);
    if (existingUser) throw new Error('User already exists');

    const createdUser = await this.repository.createUser(user);
    if (!user) throw new Error('huh');

    return createdUser;
  }
}
