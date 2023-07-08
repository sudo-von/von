import {
  MetricsRepository,
} from '../../metrics-repository/dtos/metrics-repository-dtos';

export type UserRepository = Readonly<{
  user_id: string;
  username: string;
  metrics: MetricsRepository;
}>;
