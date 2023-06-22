import React, { FC } from "react";
import Typography from "../../../../components/Typography/Typography";

type Props = {
  total_views: number;
  total_answers: number;
  total_questions: number;
};

const pluralize = (count: number, singular: string, plural: string) => {
  const result = count === 1 ? singular : plural;
  return `${count} ${result}`;
};

const Metrics: FC<Props> = ({
  total_views,
  total_answers,
  total_questions,
}) => {
  const views = pluralize(total_views, "View", "Views");
  const answers = pluralize(total_answers, "Answer", "Answers");
  const questions = pluralize(total_questions, "Question", "Questions");
  const message = `${views} • ${questions} • ${answers}`;

  return (
    <Typography variant="span" weight="light" size="small">
      {message}
    </Typography>
  );
};

export default Metrics;
