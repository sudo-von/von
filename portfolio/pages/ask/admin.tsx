import { NextPage } from "next";
import Profile, { ProfileProps } from "@ask/components/profile/profile";
import { AnsweredQuestionProps } from "@ask/components/answered-question/answered-question";

type AskProps = {
  answeredQuestions: AnsweredQuestionProps[];
  unansweredQuestions: UnansweredQuestionProps[];
  profile: ProfileProps;
};

const AskAdmin: NextPage<AskProps> = ({
  answeredQuestions,
  unansweredQuestions,
  profile,
}) => {
  const { avatar, details, metrics, name, username } = profile;

  const [isSelected, setIsSelected] = useState(0);

  return (
    <ContainerLayout>
      <Profile
        avatar={avatar}
        details={details}
        metrics={metrics}
        name={name}
        username={username}
      />
      <ul className="flex flex-wrap text-center mt-5">
        <li
          onClick={() => setIsSelected(0)}
          className={`w-1/2 cursor-pointer ${
            isSelected === 0 && "border-b border-slate-150"
          }`}
        >
          <a
            href="#questions"
            className="inline-block p-4 text-blue-600 rounded-t-lg active"
            aria-current="page"
          >
            Questions
          </a>
        </li>
        <li
          onClick={() => setIsSelected(1)}
          className={`w-1/2 cursor-pointer ${
            isSelected === 1 && "border-b border-slate-150"
          }`}
        >
          <a
            href="#answers"
            className="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Answers
          </a>
        </li>
      </ul>
      <AnsweredQuestionList answeredQuestions={answeredQuestions} />
      <UnansweredQuestionList unansweredQuestions={unansweredQuestions} />
    </ContainerLayout>
  );
};

import { GetServerSideProps } from "next";
import { formatDate } from "@services/date-service/date-service";
import { getProfileByUsername } from "@ask/services/profile-service/profile.service";
import { getUserByUsername } from "@authentication/services/user-service/user.service";
import { getAnsweredQuestionListByUsername } from "@ask/services/answered-question-service/answered-question.service";
import { useState } from "react";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import AnsweredQuestionList from "@ask/components/answered-question-list/answered-question-list";
import UnansweredQuestionList from "@ask/ask-admin/components/unanswered-question-list/unanswered-question-list";
import { getUnansweredQuestionListByUsername } from "@ask/services/unanswered-question-service/unanswered-question.service";
import { UnansweredQuestionProps } from "@ask/ask-admin/components/unanswered-question/unanswered-question";

export const getServerSideProps: GetServerSideProps<AskProps> = async (ctx) => {
  const token = ctx.req.cookies["token"];
  if (!token)
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
    };

  const { result: user } = await getUserByUsername("sudo_von");
  const { result: profile } = await getProfileByUsername("sudo_von");
  const { result: answeredQuestionList } =
    await getAnsweredQuestionListByUsername("sudo_von");
  const { result: unansweredQuestionList } =
    await getUnansweredQuestionListByUsername("sudo_von", token);

  return {
    props: {
      profile: {
        avatar: user.avatar || "/avatar/default-avatar.jpg",
        details: user.details
          ? {
              interest: user.details.interest,
              position: user.details.position,
              quote: user.details.quote,
            }
          : null,
        metrics: {
          totalViews: profile.metrics.total_views,
          totalAnswers: profile.metrics.total_answers,
          totalQuestions: profile.metrics.total_questions,
        },
        name: user.name,
        username: user.username,
      },
      answeredQuestions: answeredQuestionList.map((answeredQuestion) => ({
        id: answeredQuestion.id,
        question: answeredQuestion.question,
        answer: answeredQuestion.answer.answer,
        answeredAt: formatDate(new Date(answeredQuestion.answer.answered_at)),
      })),
      unansweredQuestions: unansweredQuestionList.map((unansweredQuestion) => ({
        id: unansweredQuestion.id,
        question: unansweredQuestion.question,
        askedAt: formatDate(new Date(unansweredQuestion.asked_at)),
      })),
    },
  };
};

export default AskAdmin;
