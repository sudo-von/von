import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initialState } from "./use-question.data";
import { QuestionForm } from "./use-question.types";
import { getQuestionHint } from "./use-question.utils";
import { validateQuestionLength } from "./use-question.validations";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { createAskQuestionByUsername } from "../../../../services/api-service/ask-service/ask-question-service/ask-question.service";

const useQuestion = (username: string) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionForm, setQuestionForm] = useState<QuestionForm>(initialState);

  const { replace, asPath } = useRouter();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setQuestionForm((prevState) => ({
      ...prevState,
      question: { ...prevState.question, value },
    }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");
      setLoading(true);

      await createAskQuestionByUsername(username, {
        question: questionForm.question.value,
      });

      replace(asPath);

      setQuestionForm(initialState);
      setSuccess("Question created successfully!");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    questionForm.question.value ? setSuccess("") : setError("");

    const hint = getQuestionHint(questionForm.question.value);

    const error = questionForm.question.value.trim().length
      ? validateQuestionLength(questionForm.question.value)
      : false;

    setQuestionForm((prevState) => ({
      ...prevState,
      question: { ...prevState.question, hint, error },
    }));
  }, [questionForm.question.value]);

  return {
    error,
    loading,
    success,
    questionForm,
    handleOnSubmit,
    handleOnChange,
  };
};

export default useQuestion;
