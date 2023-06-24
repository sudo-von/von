import IUserRepository from '../repositories/user-repository';
import { CreateUserEntity, UserEntity } from '../entities/user-entity';

interface IUserUsecaseReader {
  getUserByUsername: (username: string) => Promise<UserEntity>;
}

interface IUserUsecaseWriter {
  createUser: (
    payload: CreateUserEntity
  ) => Promise<UserEntity>;

  updateProfileByUsername: (
    username: string,
    payload: CreateUserEntity
  ) => Promise<UserEntity>;
}

interface IUserUsecase extends IUserUsecaseReader, IUserUsecaseWriter {}

abstract class UserUsecase implements IUserUsecase {
  constructor(protected userRepository: IUserRepository) {}

  abstract getUserByUsername: (username: string) => Promise<UserEntity>;

  abstract createUser: (
    payload: CreateUserEntity
  ) => Promise<UserEntity>;

  abstract updateProfileByUsername: (
    username: string,
    payload: CreateUserEntity
  ) => Promise<UserEntity>;
}

export default UserUsecase;
