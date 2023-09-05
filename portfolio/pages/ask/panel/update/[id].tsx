import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask-panel/update/components/answered-question/answered-question";

type UpdateAskByIdProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const UpdateAskById: NextPage<UpdateAskByIdProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, id, question, views } = answeredQuestion;
  return (
    <MetaLayout description={answer} title={`${question} | Update answer | Ask`}>
      <ContainerLayout>
        <PreviousPage page="/ask/panel" />
        <AnsweredQuestion
          answer={answer}
          answeredAt={answeredAt}
          id={id}
          question={question}
          views={views}
        />
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { getAnsweredQuestionById } from "@ask/services/answered-question-service/answered-question.service";
import { toAnsweredQuestionProps } from "@ask/ask-panel/create/components/unanswered-question/unanswered-question.mappers";

type UpdateAskByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<UpdateAskByIdProps, UpdateAskByIdParams> = async ({ params }) => {
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

export default UpdateAskById;
