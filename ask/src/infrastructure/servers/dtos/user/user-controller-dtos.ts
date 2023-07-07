import {
  MetricController,
} from '../metric/metric-controller-dtos';

export type UserController = {
  id: string;
  user_id: string;
  username: string;
  metrics: MetricController;
};
