import { NextPage } from "next";
import Profile, {
  ProfileProps,
} from "../../features/ask/components/profile/profile";
import Alert from "../../features/common/components/alert/alert";
import useQuestion from "../../features/ask/hooks/use-question/use-question";
import QuestionForm from "../../features/ask/components/question-form/question-form";

type AskProps = {
  profile: ProfileProps;
};

const Ask: NextPage<AskProps> = ({ profile }) => {
  const { avatar, details, metrics, name, username } = profile;
  const {
    error,
    loading,
    handleOnChange,
    handleOnSubmit,
    questionForm,
    success,
  } = useQuestion(username);
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Profile
          name={name}
          avatar={avatar}
          details={details}
          metrics={metrics}
          username={username}
        />
        <QuestionForm
          loading={loading}
          questionForm={questionForm}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
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
      </div>
    </div>
  );
};

import { GetServerSideProps } from "next";
import { getAuthUserByUsername } from "../../services/auth-service/user-service/auth-user.service";
import { getAskUserByUsername } from "../../services/ask-service/ask-user-service/ask-user.service";

export const getServerSideProps: GetServerSideProps<AskProps> = async () => {
  const { result: askUser } = await getAskUserByUsername("sudo_von");
  const { result: authenticationUser } = await getAuthUserByUsername(
    "sudo_von"
  );

  const profile: ProfileProps = {
    name: authenticationUser.name,
    avatar:
      authenticationUser.avatar ||
      "https://neantvert.eu/minorin/wp-content/uploads/2014/08/ZankyouNoTerror-E06-S08.jpg",
    username: authenticationUser.username,
    details: authenticationUser.details || null,
    metrics: {
      totalViews: askUser.metrics.total_views,
      totalAnswers: askUser.metrics.total_answers,
      totalQuestions: askUser.metrics.total_questions,
    },
  };

  return {
    props: {
      profile,
    },
  };
};

export default Ask;
