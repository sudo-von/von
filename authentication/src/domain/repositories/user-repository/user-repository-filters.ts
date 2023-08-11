import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';

export type UserRepositoryFilters = Partial<Pick<DetailedSecureUser, 'id' | 'email' | 'username'>>;
