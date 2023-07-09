import {
  MetricsSchema,
} from '../metrics-repository/metrics-repository-schema';

export type UserSchema = {
  user_id: string;
  username: string;
  metrics: MetricsSchema;
};
