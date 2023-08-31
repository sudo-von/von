import { NextPage } from "next";
import PreviousPage from "@common/components/previous-page/previous-page";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "@ask/detailed-ask/components/answered-question/answered-question";

type DetailedAskProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const DetailedAsk: NextPage<DetailedAskProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, question, views } = answeredQuestion;
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <PreviousPage page="/ask" />
        <AnsweredQuestion
          answer={answer}
          answeredAt={answeredAt}
          question={question}
          views={views}
        />
      </div>
    </div>
  );
};

import { GetServerSideProps } from "next";
import { formatDate } from "@services/date-service/date-service";
import { getAnsweredQuestionById } from "@ask/services/answered-question-service/answered-question.service";

type DetailedAskParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<
  DetailedAskProps,
  DetailedAskParams
> = async ({ params }) => {
  if (!params || !params.id)
    return { redirect: { destination: "/404", permanent: false } };

  const { result: answeredQuestion } = await getAnsweredQuestionById(params.id);

  return {
    props: {
      answeredQuestion: {
        views: answeredQuestion.views,
        question: answeredQuestion.question,
        answer: answeredQuestion.answer.answer,
        answeredAt: formatDate(new Date(answeredQuestion.answer.answered_at)),
      },
    },
  };
};

export default DetailedAsk;
