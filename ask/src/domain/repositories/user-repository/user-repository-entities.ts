import {
  User,
} from '../../entities/user-entity/user-entities';
import {
  MetricsRepository,
  CreateMetricsRepository,
  UpdateMetricsRepository,
} from '../metrics-repository/metrics-repository-entities';

export type UserRepository = Omit<User, 'metrics'> & Readonly<{
  metrics: MetricsRepository;
}>;

export type CreateUserRepository = Omit<User, 'id' | 'metrics'> & Readonly<{
  metrics: CreateMetricsRepository;
}>;

export type UpdateUserRepository = Omit<User, 'id' | 'metrics'> & Readonly<{
  metrics: UpdateMetricsRepository;
}>;
