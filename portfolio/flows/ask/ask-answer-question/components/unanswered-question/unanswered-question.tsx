import { FC } from "react";
import AskedAt from "@ask-panel/components/unanswered-question/components/asked-at/asked-at";
import Question from "@ask-by-id/components/answered-question/components/question/question";

export type UnansweredQuestionProps = {
  askedAt: string;
  id: string;
  question: string;
};

const UnansweredQuestion: FC<UnansweredQuestionProps> = ({
  askedAt,
  question,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 my-5 break-all">
      <Question>{question}</Question>
      <div className="flex flex-row gap-5">
        <AskedAt>{askedAt}</AskedAt>
      </div>
    </div>
  );
};

export default UnansweredQuestion;
