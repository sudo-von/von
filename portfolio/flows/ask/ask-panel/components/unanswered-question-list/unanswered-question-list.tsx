import { FC } from "react";
import UnansweredQuestion, {
  UnansweredQuestionProps,
} from "@ask/ask-panel/components/unanswered-question/unanswered-question";

export type UnansweredQuestionListProps = {
  unansweredQuestions: UnansweredQuestionProps[];
};

const UnansweredQuestionList: FC<UnansweredQuestionListProps> = ({
  unansweredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {unansweredQuestions.map(({ askedAt, id, question }) => {
        return (
          <UnansweredQuestion
            askedAt={askedAt}
            id={id}
            key={id}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default UnansweredQuestionList;
