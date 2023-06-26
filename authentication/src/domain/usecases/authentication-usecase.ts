import {
  CreateUserEntity,
  RestrictedUserEntity,
} from '../entities/user-entity';
import TokenService from '../services/token-service';
import IUserRepository from '../repositories/user-repository';
import CryptographyService from '../services/cryptography-service';

interface IAuthenticationUsecaseReader {
  authenticate: (email: string, password: string) => Promise<string>;
}

interface IAuthenticationUsecaseWriter {
  signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;
}

interface IAuthenticationUsecase extends
  IAuthenticationUsecaseReader, IAuthenticationUsecaseWriter {}

abstract class AuthenticationUsecase implements IAuthenticationUsecase {
  constructor(
    protected tokenService: TokenService,
    protected userRepository: IUserRepository,
    protected cryptographyService: CryptographyService,
  ) {}

  abstract authenticate: (email: string, password: string) => Promise<string>;

  abstract signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;
}

export default AuthenticationUsecase;
