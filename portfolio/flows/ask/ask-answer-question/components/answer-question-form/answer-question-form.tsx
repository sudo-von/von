import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "@common/components/input/input";
import Button from "@common/components/button/button";
import { AnswerForm } from "@ask/hooks/use-answer/use-answer.types";

type AnswerQuestionFormProps = {
  answerForm: AnswerForm;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

const AnswerQuestionForm: FC<AnswerQuestionFormProps> = ({
  answerForm,
  handleOnChange,
  handleOnSubmit,
  loading,
}) => {
  const { answer } = answerForm;
  return (
    <form autoComplete="off" className="flex flex-col gap-2.5" onSubmit={handleOnSubmit}>
      <Input
        id="answer"
        error={answer.error}
        hint={answer.hint}
        label="Answer"
        name="answer"
        onChange={handleOnChange}
        placeholder="Enter your answer"
        required
        type="answer"
        value={answer.value}
      />
      <Button disabled={loading} loading={loading} type="submit">
        {loading ? "Sending..." : "Send answer"}
      </Button>
    </form>
  );
};

export default AnswerQuestionForm;
