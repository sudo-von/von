import { FC } from "react";
import Typography from "../../../../../common/components/typography/typography";
import { formatMetrics } from "./profile-metrics.utils";

type ProfileMetricsProps = {
  totalViews: number;
  totalAnswers: number;
  totalQuestions: number;
};

const ProfileMetrics: FC<ProfileMetricsProps> = ({
  totalViews,
  totalAnswers,
  totalQuestions,
}) => {
  const formatedViews = formatMetrics(totalViews, "View", "Views");
  const formatedAnswers = formatMetrics(totalAnswers, "Answer", "Answers");
  const formatedQuestions = formatMetrics(
    totalQuestions,
    "Question",
    "Questions"
  );

  return (
    <Typography
      color="normal"
      component="small"
      size="small"
      spacing="wide"
      weight="light"
    >
      {formatedViews} • {formatedAnswers} • {formatedQuestions}
    </Typography>
  );
};

export default ProfileMetrics;
