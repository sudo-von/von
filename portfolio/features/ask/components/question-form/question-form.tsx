import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import { QuestionForm } from "../../hooks/use-question/use-question.types";

type QuestionFormProps = {
  loading: boolean;
  questionForm: QuestionForm;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const QuestionForm: FC<QuestionFormProps> = ({
  loading,
  questionForm,
  handleOnChange,
  handleOnSubmit,
}) => {
  const { question } = questionForm;
  return (
    <form className="flex flex-col gap-2.5 my-4" onSubmit={handleOnSubmit}>
      <Input
        id="question"
        name="question"
        type="question"
        label="Question"
        hint={question.hint}
        error={question.error}
        value={question.value}
        onChange={handleOnChange}
        placeholder="Enter your question"
        required
      />
      <div className="flex flex-col my-2.5">
        <Button type="submit" disabled={loading} loading={loading}>
          {loading ? "Sending..." : "Send question"}
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
