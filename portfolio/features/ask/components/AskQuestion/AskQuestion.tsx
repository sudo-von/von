import { FC } from "react";
import Typography from "../../../../components/Typography/Typography";
import Card from "../../../../components/Card/Card";

type AskQuestionProps = {
  id: string;
  askedAt: Date;
  answer: string;
  question: string;
};

const AskQuestion: FC<AskQuestionProps> = ({ answer, askedAt, question }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(askedAt);
  return (
    <Card>
      <Typography weight="bold" variant="caption">
        “{question}”
      </Typography>
      <Typography weight="light" variant="legend" color="slate">
        {formattedDate}
      </Typography>
      <Typography weight="light" variant="caption">
        {answer}
      </Typography>
    </Card>
  );
};

export default AskQuestion;
