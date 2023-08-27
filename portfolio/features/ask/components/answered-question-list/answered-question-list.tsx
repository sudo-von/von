import React, { FC } from "react";
import QuestionCard, {
  AnsweredQuestionCardProps,
} from "../answered-question-card/answered-question-card";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionCardProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-6 mt-5 w-full">
      {answeredQuestions.map(({ id, answer, answered_at, question }) => (
        <QuestionCard
          id={id}
          key={id}
          answer={answer}
          question={question}
          answered_at={answered_at}
        />
      ))}
    </div>
  );
};

export default AnsweredQuestionList;
