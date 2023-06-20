import TokenService from '../services/token-service';
import LoggerService from '../services/logger-service';
import IUserRepository from '../repositories/user-repository';
import CryptographyService from '../services/cryptography-service';
import { CreateUserEntity, MediumUserEntity, SmallUserEntity } from '../entities/user-entity';

interface IAuthenticationUsecaseReader {
  authenticate: (email: string, password: string) => Promise<string>;
}

interface IAuthenticationUsecaseWriter {
  signup: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}

interface IAuthenticationUsecase extends
  IAuthenticationUsecaseReader, IAuthenticationUsecaseWriter {}

abstract class AuthenticationUsecase implements IAuthenticationUsecase {
  constructor(
    protected tokenService: TokenService,
    protected loggerService: LoggerService,
    protected userRepository: IUserRepository,
    protected cryptographyService: CryptographyService,
  ) {}

  abstract signup: (payload: CreateUserEntity) => Promise<MediumUserEntity>;

  abstract authenticate: (email: string, password: string) => Promise<string>;
}

export default AuthenticationUsecase;
