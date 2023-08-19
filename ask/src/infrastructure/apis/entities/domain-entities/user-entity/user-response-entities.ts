import {
  DetailedMetricsResponse,
} from '../metric-entity/metric-response-entities';

export type DetailedUserResponse = {
  id: string;
  user_id: string;
  username: string;
  metrics: DetailedMetricsResponse;
};
