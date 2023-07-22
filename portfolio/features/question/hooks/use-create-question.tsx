import { CreateQuestion } from "../question-entities";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import validateQuestionCreation from "../question-validations/create-question-validations";

const useCreateQuestion = () => {
  const isMounted = useRef(false);

  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<CreateQuestion>({
    question: "",
  });

  const onHandleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setQuestion((question) => ({ ...question, [name]: value }));
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      onHandleValidation(question);
      console.log("pasaste!", question.question);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const onHandleValidation = (payload: CreateQuestion) => {
    setError(null);
    validateQuestionCreation(payload);
  };

  useEffect(() => {
    (() => {
      if (!isMounted.current) {
        isMounted.current = true;
        return;
      }

      try {
        onHandleValidation(question);
      } catch (error) {
        setError((error as Error).message);
      }
    })();
  }, [question]);

  return {
    error,
    question,
    onHandleChange,
    onHandleSubmit,
  };
};

export default useCreateQuestion;
