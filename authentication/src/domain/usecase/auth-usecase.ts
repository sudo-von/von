import { CreateUserEntity } from '../entities/create-user-entity';
import { SmallUserEntity } from '../entities/small-user-entity';
import IAuthUsecaseReader from './auth-usecase-reader';
import IAuthUsecaseWriter from './auth-usecase-writer';
import CryptographyService from '../services/cryptography-service';
import TokenService from '../services/token-service';
import IUserRepository from '../repositories/user-repository';

interface IAuthUsecase extends IAuthUsecaseReader, IAuthUsecaseWriter {}

abstract class AuthUsecase implements IAuthUsecase {
  constructor(
    protected tokenService: TokenService,
    protected cryptographyService: CryptographyService,
    protected userRepository: IUserRepository,
  ) {}

  abstract authenticate: (email: string, password: string) => Promise<string>;

  abstract signup: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}

export default AuthUsecase;
