import { FC, ReactNode } from "react";
import Question from "../question/question";
import Answer from "./components/answer/answer";
import Card from "../../../common/components/card/card";
import AnsweredAt from "./components/answered-at/answered-at";

export type AnsweredQuestionProps = {
  id: string;
  answer: ReactNode;
  answeredAt: string;
  question: ReactNode;
  handleOnClick?: VoidFunction;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answer,
  question,
  answeredAt,
  handleOnClick,
}) => {
  const castedAnsweredAt = new Date(answeredAt);
  return (
    <Card onClick={handleOnClick}>
      <Question>{question}</Question>
      <AnsweredAt answeredAt={castedAnsweredAt} />
      <Answer>{answer}</Answer>
    </Card>
  );
};

export default AnsweredQuestion;
