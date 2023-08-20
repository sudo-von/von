import {
  DetailedMetricsResponse,
} from './metric-response-entities';
import {
  DetailedMetrics,
} from '../../../../../domain/entities/metric-entity/metric-entities';

const detailedMetricToResponse = (metrics: DetailedMetrics): DetailedMetricsResponse => ({
  total_views: metrics.totalViews,
  total_answers: metrics.totalAnswers,
  total_questions: metrics.totalQuestions,
});

export default detailedMetricToResponse;
