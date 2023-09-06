import { MetricsProps } from "@ask/components/profile/components/metrics/metrics";
import { MetricsResponse } from "@ask/services/metrics-service/metrics.service.responses";

export const toMetricsProps = (metricsResponse: MetricsResponse): MetricsProps => ({
  totalAnswers: metricsResponse.total_answers,
  totalQuestions: metricsResponse.total_questions,
  totalViews: metricsResponse.total_views,
});
