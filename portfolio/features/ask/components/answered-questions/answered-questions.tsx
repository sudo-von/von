import { FC } from "react";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "../answered-question/answered-question";

export type AnsweredQuestionsProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestions: FC<AnsweredQuestionsProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {answeredQuestions.map(({ id, answer, answered_at, question }) => (
        <AnsweredQuestion
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

export default AnsweredQuestions;
