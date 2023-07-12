import {
  User,
} from '../../entities/user-entity/user-entities';

export type UserRepositoryFilters = Partial<Omit<User, 'metrics'>>;
