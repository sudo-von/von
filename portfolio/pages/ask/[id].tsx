import { NextPage } from "next";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "../../flows/detailed-ask/components/answered-question/answered-question";
import PreviousPage from "../../flows/common/components/previous-page/previous-page";

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
          views={views}
          answer={answer}
          question={question}
          answeredAt={answeredAt}
        />
      </div>
    </div>
  );
};

import { GetServerSideProps } from "next";
import { formatDate } from "../../services/date-service/date-service";
import { getAskAnsweredQuestionById } from "../../services/api-service/ask-service/ask-answered-question-service/ask-answered-question.service";

type DetailedAskParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<
  DetailedAskProps,
  DetailedAskParams
> = async ({ params }) => {
  if (!params || !params.id)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  const { result: askAnsweredQuestion } = await getAskAnsweredQuestionById(params.id);

  const answeredQuestion: AnsweredQuestionProps = {
    views: askAnsweredQuestion.views,
    question: askAnsweredQuestion.question,
    answer: askAnsweredQuestion.answer.answer,
    answeredAt: formatDate(new Date(askAnsweredQuestion.answer.answered_at)),
  };

  return {
    props: {
      answeredQuestion,
    },
  };
};

export default DetailedAsk;
