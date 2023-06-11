import IAuthUsecaseReader from './auth-usecase-reader';
import IAuthUsecaseWriter from './auth-usecase-writer';
import CryptographyService from '../services/cryptography-service';
import TokenService from '../services/token-service';
import IUserRepository from '../repositories/user-repository';
import { CreateUserEntity, MediumUserEntity } from '../entities/user-entity';
import LoggerService from '../services/logger-service';

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
