import { FC } from "react";
import Typography from "../../../../components/typography/typography";
import { formatQuestionDate } from "../../question-utils";

type BasicAnsweredQuestionProps = {
  id: string;
  askedAt: Date;
  answer: string;
  question: string;
  onClick: VoidFunction;
};

const BasicAnsweredQuestion: FC<BasicAnsweredQuestionProps> = ({
  id,
  answer,
  askedAt,
  onClick,
  question,
}) => {
  const formattedAskedAt = formatQuestionDate(askedAt);
  return (
    <div
      onClick={onClick}
      className="hover:shadow cursor-pointer flex flex-col gap-3 p-5 border border-slate-100 focus:border-slate-200 focus:outline-none rounded"
    >
      <Typography weight="bold" variant="caption">
        “{question}”
      </Typography>
      <Typography weight="light" variant="legend" color="slate">
        {formattedAskedAt}
      </Typography>
      <Typography weight="light" variant="caption">
        {answer}
      </Typography>
    </div>
  );
};

export default BasicAnsweredQuestion;
