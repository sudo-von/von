import { NextPage } from "next";
import Profile, {
  ProfileProps,
} from "../../features/ask/components/profile/profile";
import Alert from "../../features/common/components/alert/alert";
import useQuestion from "../../features/ask/hooks/use-question/use-question";
import QuestionForm from "../../features/ask/components/question-form/question-form";
import { AnsweredQuestionProps } from "../../features/ask/components/answered-question/answered-question";
import AnsweredQuestionList from "../../features/ask/components/answered-question-list/answered-question-list";

type AskProps = {
  profile: ProfileProps;
  answeredQuestions: AnsweredQuestionProps[];
};

const Ask: NextPage<AskProps> = ({ answeredQuestions, profile }) => {
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
          <div className="mb-7">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
        {success && (
          <div className="mb-7">
            <Alert variant="success">{success}</Alert>
          </div>
        )}
        <AnsweredQuestionList answeredQuestions={answeredQuestions} />
      </div>
    </div>
  );
};

import { GetServerSideProps } from "next";
import { getAuthUserByUsername } from "../../services/api-service/auth-service/user-service/auth-user.service";
import { getAskUserByUsername } from "../../services/api-service/ask-service/ask-user-service/ask-user.service";
import { getAskAnsweredQuestionListByUsername } from "../../services/api-service/ask-service/ask-answered-question-service/ask-answered-question.service";

export const getServerSideProps: GetServerSideProps<AskProps> = async () => {
  const { result: askUser } = await getAskUserByUsername("sudo_von");
  const { result: authenticationUser } = await getAuthUserByUsername(
    "sudo_von"
  );
  const { result: askAnsweredQuestions } =
    await getAskAnsweredQuestionListByUsername("sudo_von");

  const profile: ProfileProps = {
    name: authenticationUser.name,
    avatar: authenticationUser.avatar || "/avatar/default-avatar.jpg",
    username: authenticationUser.username,
    details: authenticationUser.details || null,
    metrics: {
      totalViews: askUser.metrics.total_views,
      totalAnswers: askUser.metrics.total_answers,
      totalQuestions: askUser.metrics.total_questions,
    },
  };

  const answeredQuestions: AnsweredQuestionProps[] = askAnsweredQuestions.map(
    (answeredQuestion) => ({
      id: answeredQuestion.id,
      question: answeredQuestion.question,
      answer: answeredQuestion.answer.answer,
      answeredAt: answeredQuestion.answer.answered_at,
    })
  );

  return {
    props: {
      profile,
      answeredQuestions,
    },
  };
};

export default Ask;
