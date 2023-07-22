import { FC } from "react";
import { formatMetrics } from "./ask-metrics.utils";
import Typography from "../../../../../../components/typography/typography";

type AskMetricsProps = {
  totalViews: number;
  totalAnswers: number;
  totalQuestions: number;
};

const AskMetrics: FC<AskMetricsProps> = ({
  totalViews,
  totalAnswers,
  totalQuestions,
}) => {
  const formattedViews = formatMetrics(totalViews, "View", "Views");
  const formattedAnswers = formatMetrics(totalAnswers, "Answer", "Answers");
  const formattedQuestions = formatMetrics(
    totalQuestions,
    "Question",
    "Questions"
  );
  const formattedText = `${formattedViews} • ${formattedQuestions} • ${formattedAnswers}`;
  return (
    <Typography variant="caption" weight="light" color="black">
      {formattedText}
    </Typography>
  );
};

export default AskMetrics;
