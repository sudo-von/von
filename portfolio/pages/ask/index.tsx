import { NextPage } from "next";
import Profile, {
  ProfileProps,
} from "../../flows/ask/components/profile/profile";
import Alert from "../../flows/common/components/alert/alert";
import useQuestion from "../../flows/ask/hooks/use-question/use-question";
import AnsweredQuestionList, {
  AnsweredQuestionListProps,
} from "../../flows/ask/components/answered-question-list/answered-question-list";
import QuestionForm from "../../flows/ask/components/question-form/question-form";

type AskProps = ProfileProps & AnsweredQuestionListProps;

const Ask: NextPage<AskProps> = ({ avatar, answeredQuestions, details, metrics, name, username }) => {
  const { error, loading, handleOnChange, handleOnSubmit, questionForm, success } = useQuestion(username);
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Profile
          avatar={avatar}
          details={details}
          metrics={metrics}
          name={name}
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
import { formatDate } from "../../services/date-service/date-service";
import { getProfileByUsername } from "../../flows/ask/services/profile-service/profile.service";
import { getUserByUsername } from "../../flows/authentication/services/user-service/user.service";
import { getAnsweredQuestionListByUsername } from "../../flows/ask/services/answered-question-service/answered-question.service";

export const getServerSideProps: GetServerSideProps<AskProps> = async () => {
  const { result: user } = await getUserByUsername("sudo_von");
  const { result: profile } = await getProfileByUsername("sudo_von");
  const { result: answeredQuestions } = await getAnsweredQuestionListByUsername("sudo_von");

  return {
    props: {
      avatar: user.avatar || "/avatar/default-avatar.jpg",
      details: user.details ? {
        interest: user.details.interest,
        position: user.details.position,
        quote: user.details.quote,
      } : null,
      metrics: {
        totalViews: profile.metrics.total_views,
        totalAnswers: profile.metrics.total_answers,
        totalQuestions: profile.metrics.total_questions,
      },
      name: user.name,
      username: user.username,
      answeredQuestions: answeredQuestions.map((answeredQuestion) => ({
        id: answeredQuestion.id,
        question: answeredQuestion.question,
        answer: answeredQuestion.answer.answer,
        answeredAt: formatDate(new Date(answeredQuestion.answer.answered_at)),
      })),
    },
  };
};

export default Ask;
