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

export type PartialUser = Partial<User>;

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Omit<User, 'id' | 'userId'>;

export type CreateBasicUser = Omit<BasicUser, 'id'>;

export type PartialBasicUser = Partial<Omit<BasicUser, 'id'>>;
