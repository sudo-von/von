import { FC, ReactNode } from "react";
import Answer from "./components/answer/answer";
import Question from "./components/question/question";
import Card from "../../../common/components/card/card";
import AnsweredQuestionDate from "./components/asked-at/asked-at";

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
  return (
    <Card onClick={handleOnClick}>
      <Question>{question}</Question>
      <AnsweredQuestionDate date={new Date(answeredAt)} />
      <Answer>{answer}</Answer>
    </Card>
  );
};

export default AnsweredQuestion;
