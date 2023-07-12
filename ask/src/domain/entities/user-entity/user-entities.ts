import {
  Metrics,
} from '../metric-entity/metric-entities';

export type User = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: Metrics;
}>;

export type CreateUser = Pick<User, 'userId' | 'username'>;

export type UpdateUser = Pick<User, 'username'>;
