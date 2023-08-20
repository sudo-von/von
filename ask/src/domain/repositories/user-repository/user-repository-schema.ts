import {
  MetricRepositorySchema,
} from '../metric-repository/metric-repository-schema';

export type UserRepositorySchema = {
  id: string;
  user_id: string;
  username: string;
  metrics: MetricRepositorySchema;
};
