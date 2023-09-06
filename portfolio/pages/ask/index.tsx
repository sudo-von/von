import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useQuestion from "@ask/hooks/use-question/use-question";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import QuestionForm from "@ask/components/question-form/question-form";
import Profile, { ProfileProps } from "@ask/components/profile/profile";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import { AnsweredQuestionProps } from "@ask/components/answered-question/answered-question";
import AnsweredQuestionList from "@ask/components/answered-question-list/answered-question-list";

type AskProps = {
  answeredQuestions: AnsweredQuestionProps[];
  profile: ProfileProps;
};

const Ask: NextPage<AskProps> = ({ answeredQuestions = [], profile }) => {
  const { avatar, details, metrics, name, username } = profile;
  const { error, handleOnChange, handleOnSubmit, loading, questionForm, success } = useQuestion(username);
  return (
    <MetaLayout
      author={`${name} (@${username})`}
      description="Discover a platform where you can ask questions and share your thoughts with a diverse community. "
      keywords="Questions, Answers, Social interaction, Community engagement"
      title={`${name} (@${username}) | Ask`}
    >
      <ContainerLayout>
        <Profile
          avatar={avatar}
          details={details}
          metrics={metrics}
          name={name}
          username={username}
        />
        <QuestionForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          loading={loading}
          questionForm={questionForm}
        />
        {error && (
          <div className="mt-5">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
        {success && (
          <div className="mt-5">
            <Alert variant="success">{success}</Alert>
          </div>
        )}
        <AnsweredQuestionList answeredQuestions={answeredQuestions} />
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { toProfileProps } from "@ask/components/profile/profile.mappers";
import { getProfileByUsername } from "@ask/services/profile-service/profile.service";
import { getUserByUsername } from "@authentication/services/user-service/user.service";
import { toAnsweredQuestionProps } from "@ask/components/answered-question/answered-question.mappers";
import { getAnsweredQuestionListByUsername } from "@ask/services/answered-question-service/answered-question.service";

export const getServerSideProps: GetServerSideProps<AskProps> = async () => {
  const { result: user } = await getUserByUsername("sudo_von");
  const { result: profile } = await getProfileByUsername("sudo_von");
  const { result: answeredQuestionList } = await getAnsweredQuestionListByUsername("sudo_von");

  return {
    props: {
      answeredQuestions: answeredQuestionList.map((aq) => toAnsweredQuestionProps(aq)),
      profile: toProfileProps(user, profile),
    },
  };
};

export default Ask;
