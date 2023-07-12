import {
  Metrics,
  BasicMetrics,
} from '@entities/metric-entity/metric-entities';

export type User = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: Metrics;
}>;

export type CreateUser = Pick<User, 'userId' | 'username'>;

export type UpdateUser = Pick<User, 'username'>;

export type BasicUser = Omit<User, 'metrics'> & {
  metrics: BasicMetrics;
};

export type CreateBasicUser = Omit<BasicUser, 'id'>;

export type UpdateBasicUser = Omit<BasicUser, 'id'>;
