import { FC } from "react";
import Views from "@ask-by-id/components/answered-question/components/views/views";
import Question from "@ask-by-id/components/answered-question/components/question/question";
import AnsweredAt from "@ask-by-id/components/answered-question/components/answered-at/answered-at";

export type AnsweredQuestionProps = {
  answer: string;
  answeredAt: string;
  id: string;
  question: string;
  views: number;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answeredAt,
  question,
  views,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 my-5 break-all">
      <Question>{question}</Question>
      <div className="flex flex-row gap-5">
        <AnsweredAt>{answeredAt}</AnsweredAt>
        <Views views={views} />
      </div>
    </div>
  );
};

export default AnsweredQuestion;
