import { FC } from "react";
import Hyperlink from "@common/components/hyperlink/hyperlink";
import UnansweredQuestion, {
  UnansweredQuestionProps,
} from "@ask-panel/components/unanswered-question/unanswered-question";

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
          <Hyperlink key={id} path={`/ask-panel/create/${id}`}>
            <UnansweredQuestion askedAt={askedAt} id={id} question={question} />
          </Hyperlink>
        );
      })}
    </div>
  );
};

export default UnansweredQuestionList;
