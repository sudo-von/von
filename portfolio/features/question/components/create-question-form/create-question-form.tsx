import { ChangeEvent, FC, FormEvent } from "react";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { CreateQuestion } from "../../question-entities";

type CreateQuestionFormProps = {
  error: string | null;
  question: CreateQuestion;
  onHandleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  error,
  question,
  onHandleSubmit,
  onHandleChange,
}) => {
  const hint = `${question.question.length}/100`;
  const isDisabled = Boolean(error);
  return (
    <form className="flex flex-col gap-5" onSubmit={onHandleSubmit}>
      <Input
        id="question"
        hint={hint}
        error={error}
        name="question"
        label="Question"
        value={question.question}
        onChange={onHandleChange}
        placeholder="Ask me a question!"
      />
      <Button disabled={isDisabled}>Send question</Button>
    </form>
  );
};

export default CreateQuestionForm;
