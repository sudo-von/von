import { FC } from "react";
import AnsweredQuestion from "../answered-question/answered-question";

type AnsweredQuestionListProps = {
  answeredQuestions: {
    id: string;
    answer: string;
    question: string;
    answeredAt: Date;
  }[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions = [],
}) => {
  return (
    <div className="flex flex-col mt-3 gap-3">
      {answeredQuestions.map(({ id, answer, question, answeredAt }) => (
        <AnsweredQuestion
          id={id}
          key={id}
          answer={answer}
          question={question}
          answeredAt={answeredAt}
        />
      ))}
    </div>
  );
};

export default AnsweredQuestionList;
