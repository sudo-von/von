import { NextPage } from "next";
import PreviousPage from "@common/components/previous-page/previous-page";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask/ask-by-id/components/answered-question/answered-question";

type AskByIdProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const AskById: NextPage<AskByIdProps> = ({ answeredQuestion }) => {
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

type AskByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<
  AskByIdProps,
  AskByIdParams
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

export default AskById;
