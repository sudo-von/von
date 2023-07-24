import { GetStaticProps, NextPage } from "next";
import AskLayout from "../../features/ask/layouts/ask-layout/ask-layout";
import AskProfile from "../../features/ask/components/ask-profile/ask-profile";
import useCreateQuestion from "../../features/question/hooks/use-create-question";
import CreateQuestionForm from "../../features/question/components/create-question-form/create-question-form";
import AnsweredQuestionList from "../../features/question/components/answered-question-list/answered-question-list";
import axios from "axios";
import { DetailedUser, User } from "../../features/user/user-entities";

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

type AskProps = {
  user: DetailedUser;
};

const Ask: NextPage<AskProps> = ({ user }) => {
  const { error, question, onHandleChange, onHandleSubmit } =
    useCreateQuestion();
  return (
    <AskLayout>
      <AskProfile
        name={user.name}
        avatar={
          "https://pbs.twimg.com/media/FzTypIdaQAApdq3?format=jpg&name=900x900"
        }
        metrics={user.metrics}
        interest={user.email}
        position={`@${user.username}`}
      />
      <CreateQuestionForm
        error={error}
        question={question}
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
      />
      <AnsweredQuestionList questions={questions} />
    </AskLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await axios.get<{ result: User }>(
    "http://localhost:3000/api/v1/user/username/sudo_von"
  );

  const user: DetailedUser = {
    id: data.result.id,
    name: data.result.name,
    email: data.result.email,
    username: data.result.username,
    avatar: `http://localhost:3000/static/${data.result.avatar}` || "",
    metrics: {
      totalViews: 10,
      totalQuestions: 20,
      totalAnswers: 30,
    },
    position: "Software engineer",
    interest: "Passionate about ethical hacking",
  };
  console.log(
    "🚀 ~ file: index.tsx:73 ~ constgetStaticProps:GetStaticProps= ~ user:",
    user
  );

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};

export default Ask;
