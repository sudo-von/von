import { NextPage } from "next";

type AnsweredQuestionProps = {
  profile: ProfileProps;
  answeredQuestion: DetailedAnsweredQuestionProps;
};

const AnsweredQuestion: NextPage<AnsweredQuestionProps> = ({
  profile,
  answeredQuestion,
}) => {
  const { avatar, details, metrics, name, username } = profile;
  const { answer, answeredAt, question, views } = answeredQuestion;
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <BackHyperlink path="/ask">
          Back to the main question page
        </BackHyperlink>
        <div className="flex flex-col justify-center items-start gap 2.5 mt-10">
          <DetailedAnsweredQuestion
            answer={answer}
            answeredAt={answeredAt}
            question={question}
            views={views}
          />

          <div className="mt-8">
            <Profile
              name={name}
              avatar={avatar}
              details={details}
              metrics={metrics}
              username={username}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { getAskAnsweredQuestionById } from "../../services/api-service/ask-service/ask-answered-question-service/ask-answered-question.service";

import { ParsedUrlQuery } from "querystring";
import Icon from "../../flows/common/components/icon/icon";
import Typography from "../../flows/common/components/typography/typography";
import { useRouter } from "next/router";
import Link from "next/link";
import DetailedQuestion from "../../flows/ask/components/detailed-answered-question/components/detailed-question/detailed-question";
import AnsweredAt from "../../flows/ask/components/answered-at/answered-at";
import Answer from "../../flows/ask/components/answer/answer";
import Profile, {
  ProfileProps,
} from "../../flows/ask/components/profile/profile";
import { getAskUserByUsername } from "../../services/api-service/ask-service/ask-user-service/ask-user.service";
import { getAuthUserByUsername } from "../../services/api-service/auth-service/user-service/auth-user.service";
import BackHyperlink from "../../flows/ask/components/back-hyperlink/back-hyperlink";
import DetailedAnsweredAt from "../../flows/ask/components/detailed-answered-question/components/detailed-answered-at/detailed-answered-at";
import DetailedAnsweredQuestion, {
  DetailedAnsweredQuestionProps,
} from "../../flows/ask/components/detailed-answered-question/detailed-answered-question";

type Params = ParsedUrlQuery & {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async ({
  params,
}) => {
  if (!params || !params.id)
    return {
      props: {},
      redirect: "/404",
    };

  const { result: askAnsweredQuestion } = await getAskAnsweredQuestionById(
    params.id
  );

  const { result: askUser } = await getAskUserByUsername(
    askAnsweredQuestion.username
  );
  const { result: authenticationUser } = await getAuthUserByUsername(
    askAnsweredQuestion.username
  );

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

  return {
    props: {
      answeredQuestion: {
        answer: askAnsweredQuestion.answer.answer,
        answeredAt: askAnsweredQuestion.answer.answered_at,
        question: askAnsweredQuestion.question,
        views: askAnsweredQuestion.views,
      },
      profile,
    },
  };
};

export default AnsweredQuestion;
