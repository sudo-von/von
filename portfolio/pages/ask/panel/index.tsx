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

const AskPanel: NextPage<AskPanelProps> = ({
  answeredQuestions,
  profile,
  unansweredQuestions,
}) => {
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
      <div className="flex flex-wrap mt-5 bg-slate-50 rounded p-2">
        <TabHeader
          index={0}
          onHandleClick={handleQuestionsTab}
          value={selectedTab}
        >
          Questions
        </TabHeader>
        <TabHeader
          index={1}
          onHandleClick={handleAnswersTab}
          value={selectedTab}
        >
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
import { toProfileProps } from "@ask/components/profile/profile.mappers";
import { getProfileByUsername } from "@ask/services/profile-service/profile.service";
import { getUserByUsername } from "@authentication/services/user-service/user.service";
import { toAnsweredQuestionProps } from "@ask/components/answered-question/answered-question.mappers";
import { toUnansweredQuestionProps } from "@ask-panel/components/unanswered-question/unanswered-question.mappers";
import { getAnsweredQuestionListByUsername } from "@ask/services/answered-question-service/answered-question.service";
import { getUnansweredQuestionListByUsername } from "@ask/services/unanswered-question-service/unanswered-question.service";

export const getServerSideProps: GetServerSideProps<AskPanelProps> = async ({ req }) => {
  const { token } = req.cookies;
  if (!token) {
    return { redirect: { destination: "/403", permanent: false } };
  }

  const { result: user } = await getUserByUsername("sudo_von");
  const { result: profile } = await getProfileByUsername("sudo_von");
  const { result: answeredQuestionList } = await getAnsweredQuestionListByUsername("sudo_von");
  const { result: unansweredQuestionList } = await getUnansweredQuestionListByUsername("sudo_von", token);

  return {
    props: {
      answeredQuestions: answeredQuestionList.map((aq) => toAnsweredQuestionProps(aq)),
      profile: toProfileProps(user, profile),
      unansweredQuestions: unansweredQuestionList.map((uq) => toUnansweredQuestionProps(uq)),
    },
  };
};

export default AskPanel;
