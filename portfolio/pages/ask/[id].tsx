import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask-by-id/components/answered-question/answered-question";

type AskByIdProps = {
  answeredQuestion: AnsweredQuestionProps;
};

const AskById: NextPage<AskByIdProps> = ({ answeredQuestion }) => {
  const { answer, answeredAt, question, views } = answeredQuestion;
  return (
    <MetaLayout description={answer} title={`${question} | Ask`}>
      <ContainerLayout>
        <PreviousPage page="/ask" />
        <AnsweredQuestion
          answer={answer}
          answeredAt={answeredAt}
          question={question}
          views={views}
        />
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { getAnsweredQuestionById } from "@ask/services/answered-question-service/answered-question.service";
import { toAnsweredQuestionProps } from "@ask-by-id/components/answered-question/answered-question.mappers";

type AskByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<AskByIdProps, AskByIdParams> = async ({ params }) => {
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

export default AskById;
