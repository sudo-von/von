import { NextPage } from "next";
import { MdDateRange } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";

type AnsweredQuestionProps = {
  result: any;
};

const AnsweredQuestion: NextPage<AnsweredQuestionProps> = ({ result }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Link
          className="flex flex-row justify-start items-center gap-2.5 cursor-pointer"
          scroll={false}
          href={`/ask#${result.id}`}
        >
          <Icon icon={IoArrowBackCircleSharp} color="dark" />
          <Typography
            color="dark"
            component="p"
            size="small"
            spacing="normal"
            weight="light"
            whitespace="normal"
          >
            Back to the main question page
          </Typography>
        </Link>

        <div className="flex flex-col justify-center items-start gap 2.5 mt-10">
          <DetailedQuestion>{result.question}</DetailedQuestion>
          <div className="flex flex-row gap-2.5 mt-5">
            <div className="flex flex-row justify-start items-center gap-1">
              <Icon icon={MdDateRange} color="normal" />
              <AnsweredAt answeredAt={new Date(result.answer.answered_at)} />
            </div>

            <div className="flex flex-row justify-start items-center gap-1">
              <Icon icon={AiFillEye} color="normal" />
              <Typography
                color="normal"
                component="p"
                size="small"
                spacing="normal"
                weight="light"
                whitespace="normal"
              >
                {result.views} views
              </Typography>
            </div>
          </div>

          <div className="mt-5">
            <Typography
              color="dark"
              component="p"
              size="small"
              spacing="normal"
              weight="light"
              whitespace="normal"
            >
              {result.answer.answer}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { getAskAnsweredQuestionById } from "../../services/api-service/ask-service/ask-answered-question-service/ask-answered-question.service";

import { ParsedUrlQuery } from "querystring";
import Icon from "../../features/common/components/icon/icon";
import Typography from "../../features/common/components/typography/typography";
import { useRouter } from "next/router";
import Link from "next/link";
import DetailedQuestion from "../../features/ask/components/detailed-question/detailed-question";
import AnsweredAt from "../../features/ask/components/answered-at/answered-at";

type Params = ParsedUrlQuery & {
  id?: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async ({
  params,
}) => {
  if (!params || !params.id)
    return {
      props: {},
      redirect: "/404",
    };

  const { result: askAnsweredQuestion } = await getAskAnsweredQuestionById(
    params.id
  );
  console.log(
    "🚀 ~ file: [id].tsx:76 ~ askAnsweredQuestion:",
    askAnsweredQuestion
  );

  return {
    props: {
      result: askAnsweredQuestion,
    },
  };
};

export default AnsweredQuestion;
