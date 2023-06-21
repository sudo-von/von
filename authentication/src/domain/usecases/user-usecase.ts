import IUserRepository from '../repositories/user-repository';
import ICryptographyService from '../services/cryptography-service';
import { RestrictedUserEntity, UpdateUserEntity } from '../entities/user-entity';

interface IUserUsecaseReader {}

interface IUserUsecaseWriter {
  updateUserById: (
    requestingUserId: string,
    requestedUserId: string,
    payload: UpdateUserEntity
  ) => Promise<RestrictedUserEntity>;
}

interface IUserUsecase extends IUserUsecaseReader, IUserUsecaseWriter {}

abstract class UserUsecase implements IUserUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected cryptographyService: ICryptographyService,
  ) {}

  abstract updateUserById: (
    requestingUserId: string,
    requestedUserId: string,
    payload: UpdateUserEntity
  ) => Promise<RestrictedUserEntity>;
}

export default UserUsecase;
