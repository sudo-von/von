import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../entities/user-entity';
import IUserRepository from '../repositories/user-repository';

interface IUserUsecaseReader {}

interface IUserUsecaseWriter {
  createUser: (
    payload: CreateUserEntity
  ) => Promise<UserEntity>;

  updateUserByUsername: (
    username: string,
    payload: CreateUserEntity
  ) => Promise<UserEntity>;
}

interface IUserUsecase extends IUserUsecaseReader, IUserUsecaseWriter {}

abstract class UserUsecase implements IUserUsecase {
  constructor(protected userRepository: IUserRepository) {}

  abstract createUser: (
    payload: CreateUserEntity
  ) => Promise<UserEntity>;

  abstract updateUserByUsername: (
    username: string,
    payload: UpdateUserEntity
  ) => Promise<UserEntity>;
}

export default UserUsecase;
