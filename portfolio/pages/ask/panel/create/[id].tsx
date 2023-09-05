import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import PreviousPage from "@common/components/previous-page/previous-page";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import UnansweredQuestion, { UnansweredQuestionProps } from "@ask-panel/create/components/unanswered-question/unanswered-question";

type CreateAskByIdProps = {
  unansweredQuestion: UnansweredQuestionProps;
};

const CreateAskById: NextPage<CreateAskByIdProps> = ({ unansweredQuestion }) => {
  const { askedAt, id, question } = unansweredQuestion;
  return (
    <MetaLayout description={question} title={`Create answer | Ask`}>
      <ContainerLayout>
        <PreviousPage page="/ask/panel" />
        <UnansweredQuestion
          askedAt={askedAt}
          id={id}
          question={question}
        />
      </ContainerLayout>
    </MetaLayout>
  );
};

import { GetServerSideProps } from "next";
import { getUnansweredQuestionById } from "@ask/services/unanswered-question-service/unanswered-question.service";
import { toUnansweredQuestionProps } from "@ask/ask-panel/components/unanswered-question/unanswered-question.mappers";

type CreateAskByIdParams = {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<CreateAskByIdProps, CreateAskByIdParams> = async ({ params, req }) => {
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

export default CreateAskById;
