import { FC, ReactNode } from "react";
import Card from "@common/components/card/card";
import Question from "@ask/components/answered-question/components/question/question";
import AskedAt from "@ask-panel/components/unanswered-question/components/asked-at/asked-at";

export type UnansweredQuestionProps = {
  askedAt: string;
  id: string;
  question: ReactNode;
};

const UnansweredQuestion: FC<UnansweredQuestionProps> = ({
  askedAt,
  question,
}) => {
  return (
    <Card>
      <Question>{question}</Question>
      <AskedAt>{askedAt}</AskedAt>
    </Card>
  );
};

export default UnansweredQuestion;
