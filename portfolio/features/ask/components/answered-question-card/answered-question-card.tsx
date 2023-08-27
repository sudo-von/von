import React, { FC, ReactNode } from "react";
import Card from "../../../common/components/card/card";
import QuestionDate from "./components/question-date/question-date";
import QuestionTitle from "./components/question-title/question-title";
import QuestionAnswer from "./components/question-answer/question-answer";

export type AnsweredQuestionCardProps = {
  id: string;
  answer: string;
  question: ReactNode;
  answered_at: string;
};

const QuestionCard: FC<AnsweredQuestionCardProps> = ({
  id,
  answer,
  question,
  answered_at,
}) => {
  return (
    <Card>
      <QuestionTitle>{question}</QuestionTitle>
      <QuestionDate>{answered_at}</QuestionDate>
      <QuestionAnswer>{answer}</QuestionAnswer>
    </Card>
  );
};

export default QuestionCard;
