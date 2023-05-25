import { type ICreateUserEntity, type ISmallUserEntity } from '../domain/user-model';
import { type IUserRepository } from '../domain/user-repository';
import { UserModel } from './models/user-model';

export class UserRepository implements IUserRepository {
  async findByID (id: number): Promise<ISmallUserEntity> {
    const user = await UserModel.findByPk(id);
    if (!user) throw new Error('user not found');
    return user;
  }

  async findByEmail (email: string): Promise<ISmallUserEntity> {
    const user = await UserModel.findOne({
      where: {
        email
      }
    });
    if (!user) throw new Error('user not found');
    return user;
  }

  async createUser (payload: ICreateUserEntity): Promise<ISmallUserEntity> {
    const user = await UserModel.create(payload);

    return user;
  };
}
