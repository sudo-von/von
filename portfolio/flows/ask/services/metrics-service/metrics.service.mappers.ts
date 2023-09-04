import { MetricsProps } from "@ask/components/profile/components/metrics/metrics";
import { MetricsResponse } from "@ask/services/metrics-service/metrics.service.responses";

export const metricsResponseToProps = (
  response: MetricsResponse
): MetricsProps => ({
  totalViews: response.total_views,
  totalAnswers: response.total_answers,
  totalQuestions: response.total_questions,
});
