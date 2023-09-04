import { NextPage } from "next";
import PreviousPage from "@common/components/previous-page/previous-page";
import AnsweredQuestion, {
} from "@ask/ask-by-id/components/answered-question/answered-question";

type AskByIdProps = {
  unansweredQuestion: UnansweredQuestionProps;
};

const AskById: NextPage<AskByIdProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, question, views } = answeredQuestion;
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <PreviousPage page="/ask" />
        <UnansweredQuestion
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
import { getUnansweredQuestionById } from "@ask/services/unanswered-question-service/unanswered-question.service";
import UnansweredQuestion, { UnansweredQuestionProps } from "@ask-panel/components/unanswered-question/unanswered-question";

type AskByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<
  AskByIdProps,
  AskByIdParams
> = async ({ params }) => {
  if (!params || !params.id)
    return { redirect: { destination: "/404", permanent: false } };

  const { result: unansweredQuestion } = await getUnansweredQuestionById(params.id);

  return {
    props: {
      unansweredQuestion: {
        views: answeredQuestion.views,
        question: answeredQuestion.question,
        : formatDate(new Date(answeredQuestion.answer.answered_at)),
      },
    },
  };
};

export default AskById;
