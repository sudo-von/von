import {
  MetricResponse,
} from '../metric/metric-server-dtos';

export type UserResponse = {
  id: string;
  user_id: string;
  username: string;
  metrics: MetricResponse;
};
