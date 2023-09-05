import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { APIError } from "@services/api-service/api.service.responses";
import { AnswerForm } from "@ask-panel/hooks/use-answer/use-answer.types";
import { getAnswerHint } from "@ask-panel/hooks/use-answer/use-answer.utils";
import { handleInitialState } from "@ask-panel/hooks/use-answer/use-answer.data";
import { validateAnswerLength } from "@ask-panel/hooks/use-answer/use-answer.validations";
import { createAnswerByQuestionId, updateAnswerByQuestionId } from "@ask/services/answer-service/answer.service";

const useAnswer = (id: string, answer: string) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [answerForm, setAnswerForm] = useState<AnswerForm>(handleInitialState(answer));

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
      setSuccess("");
      setLoading(true);

      await createAnswerByQuestionId(id, {
        answer: answerForm.answer.value,
      });

      setSuccess("Answer created successfully!");
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
      setSuccess("");
      setLoading(true);

      await updateAnswerByQuestionId(id, {
        answer: answerForm.answer.value,
      });

      setSuccess("Answer updated successfully!");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    answerForm.answer.value ? setSuccess("") : setError("");

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
    loading,
    success,
    handleOnChange,
    handleOnSubmitCreation,
    handleOnSubmitUpdate,
  };
};

export default useAnswer;
