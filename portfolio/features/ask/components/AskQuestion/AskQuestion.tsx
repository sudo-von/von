import { FC } from "react";
import Typography from "../../../../components/Typography/Typography";

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
    <div className="hover:shadow cursor-pointer flex flex-col gap-3 p-5 border border-slate-100 focus:border-slate-200 focus:outline-none rounded">
      <Typography weight="bold" variant="caption">
        “{question}”
      </Typography>
      <Typography weight="light" variant="legend" color="slate">
        {formattedDate}
      </Typography>
      <Typography weight="light" variant="caption">
        {answer}
      </Typography>
    </div>
  );
};

export default AskQuestion;
