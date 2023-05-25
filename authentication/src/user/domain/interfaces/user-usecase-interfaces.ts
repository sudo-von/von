import { type ICreateUserEntity } from '../entities/create-user-entity';
import { type ISmallUserEntity } from '../entities/small-user-entity';
import { type IUserRepository } from '../repository/user-repository';

interface ISignupUsecaseWriter {
  signup: (user: ICreateUserEntity) => Promise<ISmallUserEntity>
}

export interface ISignupUsecase extends ISignupUsecaseWriter {
  userRepository: IUserRepository
}
