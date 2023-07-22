import { ChangeEvent, FormEvent, useState } from "react";
import { CreateQuestion } from "../question-entities";
import validateQuestionCreation from "../question-validations/create-question-validations";

const useQuestion = () => {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      setQuestion(e.target.value);
      validateQuestionCreation({
        question
      });
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return {
    error,
    question,
    onSubmit,
    onHandleChange,
  };
};

export default useQuestion;
