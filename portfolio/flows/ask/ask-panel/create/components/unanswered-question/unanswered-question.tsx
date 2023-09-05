import { FC, ReactNode } from "react";
import Alert from "@common/components/alert/alert";
import useAnswer from "@ask/ask-panel/hooks/use-answer/use-answer";
import Question from "@ask/components/answered-question/components/question/question";
import AskedAt from "@ask-panel/components/unanswered-question/components/asked-at/asked-at";
import CreateAnswerForm from "@ask-panel/create/components/create-answer-form/create-answer-form";

export type UnansweredQuestionProps = {
  askedAt: string;
  id: string;
  question: string;
};

const UnansweredQuestion: FC<UnansweredQuestionProps> = ({
  askedAt,
  id,
  question,
}) => {
  const { answerForm, error, handleOnChange, handleOnSubmitCreation, loading, success } = useAnswer(id, "");
  return (
    <div className="flex flex-col justify-center items-start gap-5 my-5">
      <Question>{question}</Question>
      <div className="flex flex-row gap-5">
        <AskedAt>{askedAt}</AskedAt>
      </div>
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
    </div>
  );
};

export default UnansweredQuestion;
