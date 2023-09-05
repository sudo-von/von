import { FC } from "react";
import Alert from "@common/components/alert/alert";
import useAnswer from "@ask/ask-panel/hooks/use-answer/use-answer";
import Question from "@ask/components/answered-question/components/question/question";
import Views from "@ask/ask-by-id/components/answered-question/components/views/views";
import AnsweredAt from "@ask/components/answered-question/components/answered-at/answered-at";
import UpdateAnswerForm from "@ask-panel/update/components/update-answer-form/update-answer-form";

export type AnsweredQuestionProps = {
  answer: string;
  answeredAt: string;
  id: string;
  question: string;
  views: number;
};

const AnsweredQuestion: FC<AnsweredQuestionProps> = ({
  answer,
  answeredAt,
  id,
  question,
  views,
}) => {
  const { answerForm, error, handleOnChange, handleOnSubmitUpdate, loading, success } = useAnswer(id, answer);
  return (
    <div className="flex flex-col justify-center items-start gap-5 my-5">
      <Question>{question}</Question>
      <div className="flex flex-row gap-5">
        <AnsweredAt>{answeredAt}</AnsweredAt>
        <Views views={views} />
      </div>
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
    </div>
  );
};

export default AnsweredQuestion;
