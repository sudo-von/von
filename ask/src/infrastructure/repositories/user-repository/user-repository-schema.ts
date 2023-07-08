import {
  MetricsSchema,
} from '../metrics-repository/metrics-repository-schema';

export type UserSchema = Readonly<{
  user_id: string;
  username: string;
  metrics: MetricsSchema;
}>;
