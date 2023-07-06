import {
  Metrics,
} from '../metric/metric-entities';

export type User = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: Metrics;
}>;

export type UserPayload = Omit<User, 'id'>;

export type CreateUser = Omit<UserPayload, 'metrics'>;

export type UpdateUser = Omit<UserPayload, 'metrics'>;
