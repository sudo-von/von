import { FC } from "react";
import Hyperlink from "@common/components/hyperlink/hyperlink";
import AnsweredQuestion, { AnsweredQuestionProps } from "@ask/components/answered-question/answered-question";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {answeredQuestions.map(({ answer, answeredAt, id, question }) => {
        return (
          <Hyperlink key={id} path={`/ask/${id}`}>
            <AnsweredQuestion
              answer={answer}
              answeredAt={answeredAt}
              id={id}
              question={question}
            />
          </Hyperlink>
        );
      })}
    </div>
  );
};

export default AnsweredQuestionList;
