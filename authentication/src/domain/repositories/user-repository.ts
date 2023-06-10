import { UserRepositoryReader } from './user-repository-reader';
import { UserRepositoryWriter } from './user-repository-writer';

export interface UserRepository extends UserRepositoryReader, UserRepositoryWriter {}
