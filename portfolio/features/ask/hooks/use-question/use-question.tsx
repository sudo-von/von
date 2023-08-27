import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initialState } from "./use-question.data";
import { QuestionForm } from "./use-question.types";
import { getQuestionHint } from "./use-question.utils";
import { validateQuestionLength } from "./use-question.validations";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { createAskQuestionByUsername } from "../../../../services/api-service/ask-service/ask-question-service/ask-question.service";

const useQuestion = (username: string) => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [questionForm, setQuestionForm] = useState<QuestionForm>(initialState);

  const router = useRouter();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name === "question")
      setQuestionForm((prevState) => ({
        ...prevState,
        question: { ...prevState[name], value },
      }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await createAskQuestionByUsername(username, {
        question: questionForm.question.value,
      });
      router.replace(router.asPath);
      setQuestionForm(initialState);
      setSuccess("Question created successfully!");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const hint = getQuestionHint(questionForm.question.value);

    const error = questionForm.question.value.trim().length
      ? validateQuestionLength(questionForm.question.value)
      : false;

    setQuestionForm((state) => ({
      ...state,
      question: { ...state.question, hint, error },
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
