import {
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../entities/user/user-entity';
import IUserRepository from '../repositories/user-repository';
import ICryptographyService from '../services/cryptography-service';

interface IUserUsecaseReader {
  getUserByUsername: (username: string) => Promise<RestrictedUserEntity>
}

interface IUserUsecaseWriter {
  updateUserByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity
  ) => Promise<RestrictedUserEntity>;
}

interface IUserUsecase extends IUserUsecaseReader, IUserUsecaseWriter {}

abstract class UserUsecase implements IUserUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected cryptographyService: ICryptographyService,
  ) {}

  abstract getUserByUsername: (username: string) => Promise<RestrictedUserEntity>;

  abstract updateUserByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity
  ) => Promise<RestrictedUserEntity>;
}

export default UserUsecase;
