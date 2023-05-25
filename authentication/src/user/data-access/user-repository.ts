import { type ICreateUserEntity } from '../domain/entities/create-user-entity';
import { type ISmallUserEntity } from '../domain/entities/small-user-entity';
import { type IUserRepository } from '../domain/interfaces/user-repository-interfaces';
import { UserModel } from './models/user-model';

export class UserRepository implements IUserRepository {
  findByID = async (id: number): Promise<ISmallUserEntity | null> => {
    return await UserModel.findByPk(id);
  };

  findByEmail = async (email: string): Promise<ISmallUserEntity | null> => {
    return await UserModel.findOne({
      where: {
        email
      }
    });
  };

  createUser = async (payload: ICreateUserEntity): Promise<ISmallUserEntity> => {
    const user = await UserModel.create(payload);
    return user;
  };
}
