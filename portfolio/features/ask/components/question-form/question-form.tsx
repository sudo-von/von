import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";

type QuestionFormProps = {
  loading: boolean;
  question: string;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const QuestionForm: FC<QuestionFormProps> = ({
  loading,
  question,
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <form className="flex flex-col gap-2.5 my-4" onSubmit={handleOnSubmit}>
      <Input
        id="question"
        name="question"
        type="question"
        label="Question"
        value={question}
        onChange={handleOnChange}
        placeholder="Enter your question"
        required
      />
      <div className="flex flex-col mt-4 mb-1.5">
        <Button type="submit" disabled={loading} loading={loading}>
          {loading ? "Sending question..." : "Send question"}
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
