import { GetStaticProps, NextPage } from "next";
import AskLayout from "../../features/ask/layouts/ask-layout/ask-layout";
import AskProfile from "../../features/ask/components/ask-profile/ask-profile";
import useCreateQuestion from "../../features/question/hooks/use-create-question";
import CreateQuestionForm from "../../features/question/components/create-question-form/create-question-form";
import AskAnsweredQuestionList from "../../features/question/components/ask-answered-question-list/ask-answered-question-list";

const questions = [
  {
    id: "1",
    answeredAt: new Date("2021-01-01 10:10:19"),
    question: "Lorem ipsum dolor",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod.",
  },
  {
    id: "2",
    answeredAt: new Date("2021-01-01 10:10:19"),
    question: "Lorem ipsum dolor it set amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod.",
  },
];

const Ask: NextPage<{
  user: {
    name: string;
    avatar: string;
    metrics: {
      totalViews: number;
      totalQuestions: number;
      totalAnswers: number;
    };
    position: string;
    interest: string;
  };
}> = ({ user }) => {
  const { error, question, onHandleChange, onHandleSubmit } =
    useCreateQuestion();
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
        error={error}
        question={question}
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
      />
      <AskAnsweredQuestionList answeredQuestions={questions} />
    </AskLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
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

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};

export default Ask;
