import {
  BasicUser,
} from '@entities/user-entity/user-entities';

export type UserRepositoryFilters = Partial<Omit<BasicUser, 'metrics'>>;
