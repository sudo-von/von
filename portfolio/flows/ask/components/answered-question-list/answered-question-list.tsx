import { FC } from "react";
import AnsweredQuestion, {
  AnsweredQuestionProps,
} from "@ask/components/answered-question/answered-question";
import Hyperlink from "@common/components/hyperlink/hyperlink";

export type AnsweredQuestionListProps = {
  answeredQuestions: AnsweredQuestionProps[];
};

const AnsweredQuestionList: FC<AnsweredQuestionListProps> = ({
  answeredQuestions,
}) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {answeredQuestions.map(({ id, answer, answeredAt, question }) => {
        return (
          <Hyperlink key={id} path={`/ask/${id}`}>
            <AnsweredQuestion
              id={id}
              answer={answer}
              question={question}
              answeredAt={answeredAt}
            />
          </Hyperlink>
        );
      })}
    </div>
  );
};

export default AnsweredQuestionList;
