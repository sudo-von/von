import { FC, ReactNode } from "react";
import Link from "next/link";
import Question from "../question/question";
import Answer from "./components/answer/answer";
import Card from "../../../common/components/card/card";
import AnsweredAt from "../answered-at/answered-at";

export type AnsweredQuestionProps = {
  id: string;
  answer: ReactNode;
  answeredAt: string;
  question: ReactNode;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  id,
  answer,
  question,
  answeredAt,
}) => {
  const castedAnsweredAt = new Date(answeredAt);
  return (
    <Link id={id} href={`/ask/${id}`} scroll={false}>
      <Card>
        <Question>{question}</Question>
        <AnsweredAt answeredAt={castedAnsweredAt} />
        <Answer>{answer}</Answer>
      </Card>
    </Link>
  );
};

export default AnsweredQuestion;
