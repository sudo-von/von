import { HashService } from '../services/hash-service';
import { UserRepository } from '../repositories/user-repository';
import { UserUsecaseReader } from './user-usecase-reader';
import { UserUsecaseWriter } from './user-usecase-writer';
import AbstractAuthService from '../services/auth-service';

export interface UserUsecase extends UserUsecaseReader, UserUsecaseWriter {}

export abstract class AbstractUserUsecase {
  constructor(
    protected authService: AbstractAuthService,
    protected hashService: HashService,
    protected userRepository: UserRepository,
  ) {}
}
