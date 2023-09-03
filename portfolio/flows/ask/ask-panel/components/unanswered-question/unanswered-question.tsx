import { FC, ReactNode } from "react";
import Card from "@common/components/card/card";
import Hyperlink from "@common/components/hyperlink/hyperlink";
import Question from "@ask/components/answered-question/components/question/question";
import AskedAt from "@ask/ask-panel/components/unanswered-question/components/asked-at/asked-at";

export type UnansweredQuestionProps = {
  askedAt: string;
  id: string;
  question: ReactNode;
};

const UnansweredQuestion: FC<UnansweredQuestionProps> = ({
  askedAt,
  id,
  question,
}) => {
  return (
    <Hyperlink path={`/ask/update-ask/${id}`}>
      <Card>
        <Question>{question}</Question>
        <AskedAt>{askedAt}</AskedAt>
      </Card>
    </Hyperlink>
  );
};

export default UnansweredQuestion;
