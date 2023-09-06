import { FC } from "react";
import Card from "@common/components/card/card";
import Question from "@ask/components/answered-question/components/question/question";
import AnsweredAt from "@ask/components/answered-question/components/answered-at/answered-at";

export type UnansweredQuestionProps = {
  askedAt: string;
  id: string;
  question: string;
};

const UnansweredQuestion: FC<UnansweredQuestionProps> = ({
  askedAt,
  question,
}) => {
  return (
    <Card>
      <Question>{question}</Question>
      <AnsweredAt>{askedAt}</AnsweredAt>
    </Card>
  );
};

export default UnansweredQuestion;
