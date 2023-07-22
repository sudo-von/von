import { FC } from "react";
import { BasicAnsweredQuestion } from "../../question-entities";
import AnsweredQuestion from "../answered-question/answered-question";

type AnsweredQuestionListProps = {
  questions: BasicAnsweredQuestion[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  questions = [],
}) => {
  return (
    <div className="flex flex-col mt-3 gap-3">
      {questions.map(({ id, answer, question, answeredAt }) => (
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
