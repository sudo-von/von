import { FC } from "react";
import { AnsweredQuestion } from "../../../question/question-entities";
import AskAnsweredQuestion from "../ask-answered-question/ask-answered-question";

type AskAnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestion[];
};

const AskAnsweredQuestionList: FC<AskAnsweredQuestionListProps> = ({
  answeredQuestions = [],
}) => {
  return (
    <div className="flex flex-col mt-3 gap-3">
      {answeredQuestions.map(({ id, answer, question, answeredAt }) => (
        <AskAnsweredQuestion
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

export default AskAnsweredQuestionList;
