import { FC } from "react";
import Card from "@common/components/card/card";
import Answer from "@ask/components/answered-question/components/answer/answer";
import Question from "@ask/components/answered-question/components/question/question";
import AnsweredAt from "@ask/components/answered-question/components/answered-at/answered-at";

export type AnsweredQuestionProps = {
  answer: string;
  answeredAt: string;
  id: string;
  question: string;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answer,
  answeredAt,
  question,
}) => {
  return (
    <Card>
      <Question>{question}</Question>
      <AnsweredAt>{answeredAt}</AnsweredAt>
      <Answer>{answer}</Answer>
    </Card>
  );
};

export default AnsweredQuestion;
