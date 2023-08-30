import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import { QuestionForm } from "../../hooks/use-question/use-question.types";

type QuestionFormProps = {
  loading: boolean;
  questionForm: QuestionForm;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
};

const QuestionForm: FC<QuestionFormProps> = ({
  loading,
  questionForm,
  handleOnChange,
  handleOnSubmit,
}) => {
  const { question } = questionForm;
  return (
    <form autoComplete="off" className="flex flex-col gap-2.5 my-4" onSubmit={handleOnSubmit}>
      <Input
        id="question"
        error={question.error}
        hint={question.hint}
        label="Question"
        name="question"
        onChange={handleOnChange}
        placeholder="Enter your question"
        required
        type="question"
        value={question.value}
      />
      <div className="flex flex-col my-3">
        <Button disabled={loading} loading={loading} type="submit">
          {loading ? "Sending..." : "Send question"}
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
