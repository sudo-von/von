import {
  Metrics,
  DetailedMetrics,
} from '../metric-entity/metric-entities';

export type DetailedUser = {
  id: string;
  userId: string;
  username: string;
  metrics: DetailedMetrics;
};

export type User = Omit<DetailedUser, 'metrics'> & {
  metrics: Metrics;
};

export type CreateUser = Pick<User, 'userId' | 'username'>;

export type UpdateUser = Pick<User, 'username'>;

export type CreateUserWithMetrics = Omit<User, 'id'>;

export type PartialUserWithMetrics = Partial<Omit<User, 'id'>>;
