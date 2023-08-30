import { FC, ReactNode } from "react";
import Answer from "./components/answer/answer";
import Question from "./components/question/question";
import Card from "../../../common/components/card/card";
import AnsweredAt from "./components/answered-at/answered-at";
import Hyperlink from "../../../common/components/hyperlink/hyperlink";

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
        <AnsweredAt answeredAt={answeredAt} />
        <Answer>{answer}</Answer>
      </Card>
    </Hyperlink>
  );
};

export default AnsweredQuestion;
