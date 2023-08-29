import { FC } from "react";
import DetailedQuestion from "./components/detailed-question/detailed-question";
import DetailedAnsweredAt from "./components/detailed-answered-at/detailed-answered-at";
import DetailedViews from "./components/detailed-views/detailed-views";
import Answer from "../answer/answer";

export type DetailedAnsweredQuestionProps = {
  answer: string;
  views: number;
  question: string;
  answeredAt: string;
};

const DetailedAnsweredQuestion: FC<DetailedAnsweredQuestionProps> = ({
  views,
  answer,
  question,
  answeredAt,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap 2.5 mt-10">
      <DetailedQuestion>{question}</DetailedQuestion>
      <div className="flex flex-row gap-2.5 mt-5">
        <DetailedAnsweredAt answeredAt={answeredAt} />
        <DetailedViews views={views} />
      </div>
      <div className="mt-8">
        <Answer>{answer}</Answer>
      </div>
    </div>
  );
};

export default DetailedAnsweredQuestion;
