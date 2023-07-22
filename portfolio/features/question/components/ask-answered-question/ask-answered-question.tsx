import { FC } from "react";
import { useRouter } from "next/router";
import Card from "../../../../components/card/card";
import AskAnswer from "./components/ask-answer/ask-answer";
import AskQuestion from "./components/ask-question/ask-question";
import AskAnsweredAt from "./components/ask-answered-at/ask-answered-at";

type AskAnsweredQuestionProps = {
  id: string;
  answer: string;
  question: string;
  answeredAt: Date;
};

const AskAnsweredQuestion: FC<AskAnsweredQuestionProps> = ({
  id,
  answer,
  question,
  answeredAt,
}) => {
  const router = useRouter();
  const onClick = () => router.push(`/ask/${id}`);
  return (
    <Card onClick={onClick}>
      <AskQuestion>{question}</AskQuestion>
      <AskAnsweredAt date={answeredAt} />
      <AskAnswer>{answer}</AskAnswer>
    </Card>
  );
};

export default AskAnsweredQuestion;