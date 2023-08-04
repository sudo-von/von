import { FC } from "react";
import { useRouter } from "next/router";
import Card from "../../../common/components/card/card";
import AskAnswer from "./components/ask-answer/ask-answer";
import AskQuestion from "./components/ask-question/ask-question";
import AskAnsweredAt from "./components/ask-answered-at/ask-answered-at";
import { BasicAnsweredQuestion } from "../../question-entities";

type AnsweredQuestionProps = BasicAnsweredQuestion;

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
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

export default AnsweredQuestion;
