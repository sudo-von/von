import TokenService from '../services/token-service';
import LoggerService from '../services/logger-service';
import IUserRepository from '../repositories/user-repository';
import CryptographyService from '../services/cryptography-service';
import { CreateUserEntity, MediumUserEntity, SmallUserEntity } from '../entities/user-entity';

interface IAuthUsecaseReader {
  authenticate: (email: string, password: string) => Promise<string>;
}

interface IAuthUsecaseWriter {
  signup: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}

interface IAuthUsecase extends IAuthUsecaseReader, IAuthUsecaseWriter {}

abstract class AuthUsecase implements IAuthUsecase {
  constructor(
    protected tokenService: TokenService,
    protected loggerService: LoggerService,
    protected cryptographyService: CryptographyService,
    protected userRepository: IUserRepository,
  ) {}

  abstract authenticate: (email: string, password: string) => Promise<string>;

  abstract signup: (userPayload: CreateUserEntity) => Promise<MediumUserEntity>;
}

export default AuthUsecase;
