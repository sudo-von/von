import { FC } from "react";
import { useRouter } from "next/router";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "../answered-question/answered-question";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col w-full gap-3.5">
      {answeredQuestions.map(({ id, answer, answeredAt, question }) => {
        const handleOnClick = () => {
          push(id);
        };
        return (
          <AnsweredQuestion
            id={id}
            key={id}
            answer={answer}
            question={question}
            answeredAt={answeredAt}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};

export default AnsweredQuestionList;
