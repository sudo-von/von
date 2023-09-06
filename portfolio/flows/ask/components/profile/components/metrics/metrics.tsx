import { FC } from "react";
import Typography from "@common/components/typography/typography";
import { formatMetrics } from "@services/metrics-service/metrics-service";

export type MetricsProps = {
  totalAnswers: number;
  totalQuestions: number;
  totalViews: number;
};

const Metrics: FC<MetricsProps> = ({
  totalAnswers,
  totalQuestions,
  totalViews,
}) => {
  const formatedViews = formatMetrics(totalViews, "View", "Views");
  const formatedQuestions = formatMetrics(totalQuestions, "Question", "Questions");
  const formatedAnswers = formatMetrics(totalAnswers, "Answer", "Answers");

  return (
    <Typography
      color="normal"
      component="small"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {formatedViews} • {formatedQuestions} • {formatedAnswers}
    </Typography>
  );
};

export default Metrics;
