import { FC, ReactNode } from "react";
import Card from "@common/components/card/card";
import Hyperlink from "@common/components/hyperlink/hyperlink";
import Answer from "@ask/components/answered-question/components/answer/answer";
import Question from "@ask/components/answered-question/components/question/question";
import AnsweredAt from "@ask/components/answered-question/components/answered-at/answered-at";

export type AnsweredQuestionProps = {
  answer: ReactNode;
  answeredAt: string;
  id: string;
  question: ReactNode;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answer,
  answeredAt,
  id,
  question,
}) => {
  return (
    <Hyperlink path={`/ask/${id}`}>
      <Card>
        <Question>{question}</Question>
        <AnsweredAt>{answeredAt}</AnsweredAt>
        <Answer>{answer}</Answer>
      </Card>
    </Hyperlink>
  );
};

export default AnsweredQuestion;
