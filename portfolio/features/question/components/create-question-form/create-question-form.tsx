import React, { ChangeEvent, FC, FormEvent } from "react";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";

type CreateQuestionFormProps = {
  error: boolean;
  question: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CreateQuestionForm: FC<CreateQuestionFormProps> = ({
  error,
  question,
  onSubmit,
  onChange,
}) => {
  const hint = `${question.length}/100`;

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <Input
        hint={hint}
        label="Question"
        error={error}
        value={question}
        onChange={onChange}
        placeholder="Ask me a question!"
      />
      <Button disabled={error}>Send question</Button>
    </form>
  );
};

export default CreateQuestionForm;
