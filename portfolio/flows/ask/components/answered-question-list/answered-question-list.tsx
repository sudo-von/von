import { FC } from "react";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "../answered-question/answered-question";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-7 w-full">
      {answeredQuestions.map(({ id, answer, answeredAt, question }) => {
        return (
          <AnsweredQuestion
            id={id}
            key={id}
            answer={answer}
            question={question}
            answeredAt={answeredAt}
          />
        );
      })}
    </div>
  );
};

export default AnsweredQuestionList;
