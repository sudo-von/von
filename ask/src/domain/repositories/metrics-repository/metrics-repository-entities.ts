import {
  DetailedMetrics,
} from '../../entities/metric-entity/metric-entities';

export type MetricsRepository = Pick<DetailedMetrics, 'totalViews'>;

export type CreateMetricsRepository = Pick<DetailedMetrics, 'totalViews'>;

export type UpdateMetricsRepository = Pick<DetailedMetrics, 'totalViews'>;
