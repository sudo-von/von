import {
  CreateUserEntity,
  RestrictedUserEntity,
} from '../entities/user/user-entity';
import IUserRepository from '../repositories/user-repository';
import CryptographyService from '../services/cryptography-service';

abstract class AuthenticationUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected cryptographyService: CryptographyService,
  ) {}

  abstract signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;

  abstract authenticate: (email: string, password: string) => Promise<RestrictedUserEntity>;
}

export default AuthenticationUsecase;
