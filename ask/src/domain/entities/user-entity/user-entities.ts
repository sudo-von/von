import {
  BasicMetrics,
  DetailedMetrics,
} from '../metric-entity/metric-entities';

export type User = {
  id: string;
  userId: string;
  username: string;
};

export type BasicUser = User & {
  metrics: BasicMetrics;
};

export type DetailedUser = User & {
  metrics: DetailedMetrics;
};

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Pick<User, 'username'>;

export type CreateBasicUser = Omit<BasicUser, 'id'>;

export type PartialBasicUser = Partial<Omit<BasicUser, 'id'>>;
