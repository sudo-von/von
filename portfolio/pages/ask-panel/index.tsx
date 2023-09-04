import { NextPage } from "next";
import Tab from "@common/components/tab/tab";
import useTab from "@ask-panel/hooks/use-tab/use-tab";
import Profile, { ProfileProps } from "@ask/components/profile/profile";
import TabHeader from "@common/components/tab/components/tab-header/tab-header";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import { AnsweredQuestionProps } from "@ask/components/answered-question/answered-question";
import AnsweredQuestionList from "@ask-panel/components/answered-question-list/answered-question-list";
import { UnansweredQuestionProps } from "@ask-panel/components/unanswered-question/unanswered-question";
import UnansweredQuestionList from "@ask-panel/components/unanswered-question-list/unanswered-question-list";

type AskPanelProps = {
  answeredQuestions: AnsweredQuestionProps[];
  profile: ProfileProps;
  unansweredQuestions: UnansweredQuestionProps[];
};

const AskPanel: NextPage<AskPanelProps> = ({ answeredQuestions, profile, unansweredQuestions }) => {
  const { avatar, details, metrics, name, username } = profile;
  const { handleAnswersTab, handleQuestionsTab, selectedTab } = useTab();
  return (
    <ContainerLayout>
      <Profile
        avatar={avatar}
        details={details}
        metrics={metrics}
        name={name}
        username={username}
      />
      <div className="flex flex-wrap text-center mt-5">
        <TabHeader index={0} onHandleClick={handleQuestionsTab} value={selectedTab}>
          Questions
        </TabHeader>
        <TabHeader index={1} onHandleClick={handleAnswersTab} value={selectedTab}>
          Answers
        </TabHeader>
      </div>
      <Tab index={0} value={selectedTab}>
        <UnansweredQuestionList unansweredQuestions={unansweredQuestions} />
      </Tab>
      <Tab index={1} value={selectedTab}>
        <AnsweredQuestionList answeredQuestions={answeredQuestions} />
      </Tab>
    </ContainerLayout>
  );
};

import { GetServerSideProps } from "next";
import { formatDate } from "@services/date-service/date-service";
import { getProfileByUsername } from "@ask/services/profile-service/profile.service";
import { getUserByUsername } from "@authentication/services/user-service/user.service";
import { getAnsweredQuestionListByUsername } from "@ask/services/answered-question-service/answered-question.service";
import { getUnansweredQuestionListByUsername } from "@ask/services/unanswered-question-service/unanswered-question.service";

export const getServerSideProps: GetServerSideProps<AskPanelProps> = async ({ req }) => {
  const { token } = req.cookies;
  if (!token) return { redirect: { destination: "/403", permanent: false } };

  const { result: user } = await getUserByUsername("sudo_von");
  const { result: profile } = await getProfileByUsername("sudo_von");
  const { result: answeredQuestionList } = await getAnsweredQuestionListByUsername("sudo_von");
  const { result: unansweredQuestionList } = await getUnansweredQuestionListByUsername("sudo_von", token);

  return {
    props: {
      answeredQuestions: answeredQuestionList.map((answeredQuestion) => ({
        answer: answeredQuestion.answer.answer,
        answeredAt: formatDate(new Date(answeredQuestion.answer.answered_at)),
        id: answeredQuestion.id,
        question: answeredQuestion.question,
      })),
      profile: {
        avatar: user.avatar || "/avatar/default-avatar.jpg",
        details: user.details ? {
          interest: user.details.interest,
          position: user.details.position,
          quote: user.details.quote,
        } : null,
        metrics: {
          totalAnswers: profile.metrics.total_answers,
          totalQuestions: profile.metrics.total_questions,
          totalViews: profile.metrics.total_views,
        },
        name: user.name,
        username: user.username,
      },
      unansweredQuestions: unansweredQuestionList.map((unansweredQuestion) => ({
        askedAt: formatDate(new Date(unansweredQuestion.asked_at)),
        id: unansweredQuestion.id,
        question: unansweredQuestion.question,
      })),
    },
  };
};

export default AskPanel;
