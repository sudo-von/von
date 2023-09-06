import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnswerForm } from "@ask/hooks/use-answer/use-answer.types";
import { APIError } from "@services/api-service/api.service.responses";
import { getAnswerHint } from "@ask/hooks/use-answer/use-answer.utils";
import { handleInitialState } from "@ask/hooks/use-answer/use-answer.data";
import { validateAnswerLength } from "@ask/hooks/use-answer/use-answer.validations";
import { createAnswerByQuestionId, updateAnswerByQuestionId } from "@ask/services/answer-service/answer.service";

const useAnswer = (id: string, answer: string = "") => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [answerForm, setAnswerForm] = useState<AnswerForm>(handleInitialState(answer));

  const { back } = useRouter();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setAnswerForm((prevState) => ({
      ...prevState,
      answer: { ...prevState.answer, value },
    }));
  };

  const handleOnSubmitCreation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await createAnswerByQuestionId(id, {
        answer: answerForm.answer.value,
      });

      back();
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnSubmitUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await updateAnswerByQuestionId(id, {
        answer: answerForm.answer.value,
      });

      back();
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    answerForm.answer.value === "" && setError("");

    const hint = getAnswerHint(answerForm.answer.value);

    const error = answerForm.answer.value.trim().length
      ? validateAnswerLength(answerForm.answer.value)
      : false;

    setAnswerForm((prevState) => ({
      ...prevState,
      answer: { ...prevState.answer, hint, error },
    }));
  }, [answerForm.answer.value]);

  return {
    answerForm,
    error,
    handleOnChange,
    handleOnSubmitCreation,
    handleOnSubmitUpdate,
    loading,
  };
};

export default useAnswer;
