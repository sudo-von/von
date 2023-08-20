import {
  BasicMetrics,
} from '../../../../domain/entities/metric-entity/metric-entities';
import {
  MetricRepositorySchema,
} from '../../../../domain/repositories/metric-repository/metric-repository-schema';

const metricDocumentToMetric = (
  document: MetricRepositorySchema,
): BasicMetrics => ({
  totalViews: document.total_views,
});

export default metricDocumentToMetric;
