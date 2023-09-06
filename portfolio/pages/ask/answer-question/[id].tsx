import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import useAnswer from "@ask/ask-panel/hooks/use-answer/use-answer";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import CreateAnswerForm from "@ask/ask-panel/create/components/create-answer-form/create-answer-form";
import UnansweredQuestion, { UnansweredQuestionProps } from "@ask-panel/create/components/unanswered-question/unanswered-question";

type AnswerQuestionByIdProps = {
  unansweredQuestion: UnansweredQuestionProps;
};

const AnswerQuestionById: NextPage<AnswerQuestionByIdProps> = ({
  unansweredQuestion,
}) => {
  const { askedAt, id, question } = unansweredQuestion;
  const { answerForm, error, handleOnChange, handleOnSubmitCreation, loading, success } = useAnswer(id);
  return (
    <MetaLayout description={question} title="Answer question | Ask">
      <ContainerLayout>
        <PreviousPage page="/ask/panel" />
        <UnansweredQuestion askedAt={askedAt} id={id} question={question} />
        <CreateAnswerForm
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
        {success && (
          <div className="mt-5">
            <Alert variant="success">{success}</Alert>
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

  const { result: unansweredQuestion } = await getUnansweredQuestionById(params.id, token);

  return {
    props: {
      unansweredQuestion: toUnansweredQuestionProps(unansweredQuestion),
    },
  };
};

export default AnswerQuestionById;
