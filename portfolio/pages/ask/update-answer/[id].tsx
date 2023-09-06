import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useAnswer from "@ask/hooks/use-answer/use-answer";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import UpdateAnswerForm from "@ask-update-answer/components/update-answer-form/update-answer-form";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask/ask-update-answer/components/answered-question/answered-question";

type UpdateAnswerByIdProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const UpdateAnswerById: NextPage<UpdateAnswerByIdProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, id, question, views } = answeredQuestion;
  const { answerForm, error, handleOnChange, handleOnSubmitUpdate, loading } = useAnswer(id, answer);
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
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { getAnsweredQuestionById } from "@ask/services/answered-question-service/answered-question.service";
import { toAnsweredQuestionProps } from "@ask-by-id/components/answered-question/answered-question.mappers";

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
