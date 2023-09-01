import { FC } from "react";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "@ask/components/answered-question/answered-question";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
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
