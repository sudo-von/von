import { ChangeEvent, FormEvent, useState } from "react";
import { Question } from "./use-question.types";
import { APIError } from "../../../../services/api-service/api.service.responses";

const useQuestion = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Question>('');

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuestion(value);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    question,
    handleOnSubmit,
    handleOnChange,
  };
};

export default useQuestion;
