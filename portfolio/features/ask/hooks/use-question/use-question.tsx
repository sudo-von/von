import { ChangeEvent, FormEvent, useState } from "react";
import { Question } from "./use-question.types";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { createAskQuestionByUsername } from "../../../../services/ask-service/ask-question-service/ask-question.service";
import { useRouter } from "next/router";

const useQuestion = (username: string) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Question>("");

  const { asPath, replace } = useRouter();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuestion(value);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await createAskQuestionByUsername(username, {
        question,
      });
      replace(asPath);
      setSuccess("Question created successfully!");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    success,
    question,
    handleOnSubmit,
    handleOnChange,
  };
};

export default useQuestion;
