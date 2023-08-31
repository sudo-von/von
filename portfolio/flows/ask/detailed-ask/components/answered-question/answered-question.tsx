import { FC } from "react";
import Views from "./components/views/views";
import Answer from "./components/answer/answer";
import Question from "./components/question/question";
import AnsweredAt from "./components/answered-at/answered-at";

export type AnsweredQuestionProps = {
  answer: string;
  answeredAt: string;
  question: string;
  views: number;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answer,
  answeredAt,
  question,
  views,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 my-5">
      <Question>{question}</Question>
      <div className="flex flex-row gap-2.5">
        <AnsweredAt>{answeredAt}</AnsweredAt>
        <Views views={views} />
      </div>
      <Answer>{answer}</Answer>
    </div>
  );
};

export default AnsweredQuestion;
