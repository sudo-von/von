import { AnswerForm } from "@ask/hooks/use-answer/use-answer.types";
import { getAnswerHint } from "@ask/hooks/use-answer/use-answer.utils";

export const handleInitialState = (answer: string): AnswerForm => ({
  answer: {
    value: answer,
    error: false,
    hint: getAnswerHint(answer),
  },
});
