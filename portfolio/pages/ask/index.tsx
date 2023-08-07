import { GetStaticProps, NextPage } from "next";
import AskLayout from "../../features/ask/layouts/ask-layout/ask-layout";
import AskProfile from "../../features/ask/components/ask-profile/ask-profile";
import useCreateQuestion from "../../features/question/hooks/use-create-question";
import CreateQuestionForm from "../../features/question/components/create-question-form/create-question-form";
import AnsweredQuestionList from "../../features/question/components/answered-question-list/answered-question-list";
import axios from "axios";

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
  user: any;
};

const Ask: NextPage<AskProps> = ({ user }) => {
  const { error, question, onHandleChange, onHandleSubmit } =
    useCreateQuestion();
  return (
    <div className="flex flex-col items-center mt-48">
      <AskProfile
        name={user.name}
        avatar={
          "https://i.pinimg.com/564x/e2/55/be/e255be1da7c71138cec7648fa620a0df.jpg"
        }
        metrics={user.metrics}
        interest={user.email}
        position={`@${user.username}`}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: authenticationUser } = await axios.get<{ result: any }>(
    "http://localhost:3000/api/v1/user/username/sudo_von"
  );

  const { data: askUser } = await axios.get<{ result: any }>(
    `http://localhost:3001/api/v1/user/${authenticationUser.result.id}`
  );

  const user = {
    id: authenticationUser.result.id,
    name: authenticationUser.result.name,
    email: authenticationUser.result.email,
    username: authenticationUser.result.username,
    avatar:
      `http://localhost:3000/static/${authenticationUser.result.avatar}` || "",
    metrics: {
      totalViews: askUser.result.metrics.total_views,
      totalQuestions: askUser.result.metrics.total_questions,
      totalAnswers: askUser.result.metrics.total_answers,
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
