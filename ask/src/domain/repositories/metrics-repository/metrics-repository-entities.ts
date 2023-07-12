import {
  Metrics,
} from '../../entities/metric-entity/metric-entities';

export type MetricsRepository = Pick<Metrics, 'totalViews'>;

export type CreateMetricsRepository = Pick<Metrics, 'totalViews'>;

export type UpdateMetricsRepository = Pick<Metrics, 'totalViews'>;
