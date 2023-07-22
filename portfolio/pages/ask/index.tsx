import { NextPage } from "next";
import useQuestion from "../../features/question/hooks/use-question";
import AskProfile from "../../features/ask/components/ask-profile/ask-profile";
import AskLayout from "../../features/ask/layouts/ask-layout/ask-layout";
import CreateQuestionForm from "../../features/question/components/create-question-form/create-question-form";
import AnsweredQuestionList from "../../features/question/components/answered-question-list/answered-question-list";

const user = {
  name: "Jesús Rodríguez",
  avatar:
    "https://i.pinimg.com/564x/e2/55/be/e255be1da7c71138cec7648fa620a0df.jpg",
  metrics: {
    totalViews: 10,
    totalQuestions: 20,
    totalAnswers: 30,
  },
  position: "Software engineer",
  interest: "Passionate about ethical hacking",
};

const questions = [
  {
    id: "1",
    answeredAt: new Date(),
    question: "Lorem ipsum dolor",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod.",
  },
  {
    id: "2",
    answeredAt: new Date(),
    question: "Lorem ipsum dolor it set amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod.",
  },
];

const Ask: NextPage = () => {
  const { question, onSubmit, error, onHandleChange } = useQuestion();

  return (
    <AskLayout>
      <AskProfile
        name={user.name}
        avatar={user.avatar}
        metrics={user.metrics}
        interest={user.interest}
        position={user.position}
      />
      <CreateQuestionForm
        error={false}
        question={question}
        onChange={onHandleChange}
        onSubmit={onSubmit}
      />
      <AnsweredQuestionList answeredQuestions={questions} />
    </AskLayout>
  );
};

export default Ask;
