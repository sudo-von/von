import {
  MetricServer,
} from '../metric/metric-server-dtos';

export type UserServer = {
  id: string;
  user_id: string;
  username: string;
  metrics: MetricServer;
};
