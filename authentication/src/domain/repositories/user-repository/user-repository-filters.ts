import {
  User,
} from '../../entities/user-entity/user-entities';

export type UserRepositoryFilters = Partial<Pick<User, 'id' | 'username' | 'email'>>;
