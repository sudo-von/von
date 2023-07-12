import {
  Metrics,
  DetailedMetrics,
} from '@entities/metric-entity/metric-entities';

export type DetailedUser = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: DetailedMetrics;
}>;

export type User = Omit<DetailedUser, 'metrics'> & Readonly<{
  metrics: Metrics;
}>;

export type CreateDetailedUser = Omit<User, 'id'>;

export type UpdateDetailedUser = Omit<User, 'id'>;

export type CreateUser = Pick<DetailedUser, 'userId' | 'username'>;

export type UpdateUser = Pick<DetailedUser, 'username'>;
