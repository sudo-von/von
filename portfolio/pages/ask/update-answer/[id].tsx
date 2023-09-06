import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import useAnswer from "@ask/ask-panel/hooks/use-answer/use-answer";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import UpdateAnswerForm from "@ask-panel/update/components/update-answer-form/update-answer-form";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask-panel/update/components/answered-question/answered-question";

type UpdateAnswerByIdProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const UpdateAnswerById: NextPage<UpdateAnswerByIdProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, id, question, views } = answeredQuestion;
  const { answerForm, error, handleOnChange, handleOnSubmitUpdate, loading, success } = useAnswer(id, answer);
  return (
    <MetaLayout description={answer} title="Update answer | Ask">
      <ContainerLayout>
        <PreviousPage page="/ask/panel" />
        <AnsweredQuestion
          answer={answer}
          answeredAt={answeredAt}
          id={id}
          question={question}
          views={views}
        />
        <UpdateAnswerForm
          answerForm={answerForm}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmitUpdate}
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
import { getAnsweredQuestionById } from "@ask/services/answered-question-service/answered-question.service";
import { toAnsweredQuestionProps } from "@ask/ask-panel/create/components/unanswered-question/unanswered-question.mappers";

type UpdateAnswerByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<UpdateAnswerByIdProps, UpdateAnswerByIdParams> = async ({ params, req }) => {
  const { token } = req.cookies;
  if (!token) {
    return { redirect: { destination: "/403", permanent: false } };
  }

  if (!params || !params.id) {
    return { redirect: { destination: "/404", permanent: false } };
  }

  const { result: answeredQuestion } = await getAnsweredQuestionById(params.id);

  return {
    props: {
      answeredQuestion: toAnsweredQuestionProps(answeredQuestion),
    },
  };
};

export default UpdateAnswerById;
