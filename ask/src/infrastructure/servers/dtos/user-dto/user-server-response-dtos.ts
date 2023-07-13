import {
  DetailedMetricsResponse,
} from '../metric-dto/metric-server-response-dtos';

export type DetailedUserResponse = {
  id: string;
  user_id: string;
  username: string;
  metrics: DetailedMetricsResponse;
};
