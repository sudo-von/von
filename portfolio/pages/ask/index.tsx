import { NextPage } from "next";
import Profile, {
  ProfileProps,
} from "../../features/ask/components/profile/profile";
import Alert from "../../features/common/components/alert/alert";
import useQuestion from "../../features/ask/hooks/use-question/use-question";
import QuestionForm from "../../features/ask/components/question-form/question-form";

type AskProps = {
  answeredQuestionsList: AnsweredQuestionCardProps[];
  profile: ProfileProps;
};

const Ask: NextPage<AskProps> = ({ answeredQuestionsList, profile }) => {
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
          <div className="my-5">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
        {success && (
          <div className="my-5">
            <Alert variant="success">{success}</Alert>
          </div>
        )}
        <AnsweredQuestionList answeredQuestions={answeredQuestionsList} />
      </div>
    </div>
  );
};

import { GetServerSideProps } from "next";
import { getAuthUserByUsername } from "../../services/api-service/auth-service/user-service/auth-user.service";
import { getAskUserByUsername } from "../../services/api-service/ask-service/ask-user-service/ask-user.service";
import { getAskAnsweredQuestionListByUsername } from "../../services/api-service/ask-service/ask-answered-question-service/ask-answered-question.service";
import AnsweredQuestionList, {
  AnsweredQuestionListProps,
} from "../../features/ask/components/answered-question-list/answered-question-list";
import { AnsweredQuestionCardProps } from "../../features/ask/components/answered-question-card/answered-question-card";

export const getServerSideProps: GetServerSideProps<AskProps> = async () => {
  const { result: askUser } = await getAskUserByUsername("sudo_von");
  const { result: authenticationUser } = await getAuthUserByUsername(
    "sudo_von"
  );
  const { result: answeredQuestions } =
    await getAskAnsweredQuestionListByUsername("sudo_von");
  console.log(
    "🚀 ~ file: index.tsx:63 ~ constgetServerSideProps:GetServerSideProps<AskProps>= ~ answeredQuestions:",
    answeredQuestions
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

  const answeredQuestionsList: AnsweredQuestionCardProps[] =
    answeredQuestions.map((answeredQuestion) => ({
      id: answeredQuestion.id,
      question: answeredQuestion.question,
      answer: answeredQuestion.answer.answer,
      answered_at: answeredQuestion.answer.answered_at,
    }));

  return {
    props: {
      profile,
      answeredQuestionsList,
    },
  };
};

export default Ask;
