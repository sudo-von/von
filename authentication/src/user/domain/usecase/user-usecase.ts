import { UserRepository } from '../repositories/user-repository';
import { HashService } from '../services/hash-service';
import { UserUsecaseReader } from './user-usecase-reader';
import { UserUsecaseWriter } from './user-usecase-writer';

export interface UserUsecase extends UserUsecaseReader, UserUsecaseWriter {}

export abstract class AbstractUserUsecase {
  constructor(
    protected hashService: HashService,
    protected userRepository: UserRepository,
  ) {}
}
