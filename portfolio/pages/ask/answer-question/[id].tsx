import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useAnswer from "@ask/hooks/use-answer/use-answer";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import AnswerQuestionForm from "@ask-answer-question/components/answer-question-form/answer-question-form";
import UnansweredQuestion, { UnansweredQuestionProps } from "@ask/ask-answer-question/components/unanswered-question/unanswered-question";

type AnswerQuestionByIdProps = {
  unansweredQuestion: UnansweredQuestionProps;
};

const AnswerQuestionById: NextPage<AnswerQuestionByIdProps> = ({ unansweredQuestion }) => {
  const { askedAt, id, question } = unansweredQuestion;
  const { answerForm, error, handleOnChange, handleOnSubmitCreation, loading } = useAnswer(id);
  return (
    <MetaLayout description={question} title="Answer question | Ask">
      <ContainerLayout>
        <PreviousPage page="/ask/panel" />
        <UnansweredQuestion askedAt={askedAt} id={id} question={question} />
        <AnswerQuestionForm
          answerForm={answerForm}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmitCreation}
          loading={loading}
        />
        {error && (
          <div className="mt-5">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { getUnansweredQuestionById } from "@ask/services/unanswered-question-service/unanswered-question.service";
import { toUnansweredQuestionProps } from "@ask-panel/components/unanswered-question/unanswered-question.mappers";

type AnswerQuestionByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<AnswerQuestionByIdProps, AnswerQuestionByIdParams> = async ({ params, req }) => {
  const { token } = req.cookies;
  if (!token) {
    return { redirect: { destination: "/403", permanent: false } };
  }

  if (!params || !params.id) {
    return { redirect: { destination: "/404", permanent: false } };
  }

  const { result: unansweredQuestion } = await getUnansweredQuestionById(
    params.id,
    token
  );

  return {
    props: {
      unansweredQuestion: toUnansweredQuestionProps(unansweredQuestion),
    },
  };
};

export default AnswerQuestionById;
