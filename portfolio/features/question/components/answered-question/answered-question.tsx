import { FC } from "react";
import { useRouter } from "next/router";
import { formatQuestionDate } from "../../question-utils";
import Typography from "../../../../components/typography/typography";
import Card from "../../../../components/card/card";

type AnsweredQuestionProps = {
  id: string;
  answer: string;
  question: string;
  answeredAt: Date;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  id,
  answer,
  question,
  answeredAt,
}) => {
  const router = useRouter();
  const onClick = () => router.push(`/ask/${id}`);
  const formattedAskedAt = formatQuestionDate(answeredAt);
  return (
    <Card onClick={onClick}>
      <Typography weight="bold" variant="caption">
        “{question}”
      </Typography>
      <Typography weight="light" variant="legend" color="slate">
        {formattedAskedAt}
      </Typography>
      <Typography weight="light" variant="caption">
        {answer}
      </Typography>
    </Card>
  );
};

export default AnsweredQuestion;
