import { FC } from "react";
import Typography from "../../../../components/typography/typography";

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
  const formattedViews = `${totalViews} ${totalViews === 1 ? "View" : "Views"}`;
  const formattedAnswers = `${totalAnswers} ${
    totalAnswers === 1 ? "Answer" : "Answers"
  }`;
  const formattedQuestions = `${totalQuestions} ${
    totalQuestions === 1 ? "Question" : "Questions"
  }`;
  const formattedText = `${formattedViews} • ${formattedQuestions} • ${formattedAnswers}`;
  return (
    <Typography variant="caption" weight="light" color="black">
      {formattedText}
    </Typography>
  );
};

export default AskMetrics;
