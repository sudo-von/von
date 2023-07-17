import {
  MetricsRepositorySchema,
} from '../metrics-repository/metrics-repository-schema';

export type UserRepositorySchema = {
  user_id: string;
  username: string;
  metrics: MetricsRepositorySchema;
};
