import {
  CreateUserEntity,
  RestrictedUserEntity,
} from '../entities/user/user-entity';
import IUserRepository from '../repositories/user-repository';
import CryptographyService from '../services/cryptography-service';

interface IAuthenticationUsecaseReader {
  authenticate: (
    email: string,
    password: string
  ) => Promise<RestrictedUserEntity>;
}

interface IAuthenticationUsecaseWriter {
  signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;
}

interface IAuthenticationUsecase extends
  IAuthenticationUsecaseReader, IAuthenticationUsecaseWriter {}

abstract class AuthenticationUsecase implements IAuthenticationUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected cryptographyService: CryptographyService,
  ) {}

  abstract authenticate: (
    email: string,
    password: string
  ) => Promise<RestrictedUserEntity>;

  abstract signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;
}

export default AuthenticationUsecase;
