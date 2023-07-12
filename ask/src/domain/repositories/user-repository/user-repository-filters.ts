import {
  UserRepository,
} from './user-repository-entities';

export type UserRepositoryFilters = Partial<Omit<UserRepository, 'metrics'>>;
