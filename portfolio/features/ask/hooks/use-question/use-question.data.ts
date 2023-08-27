import { QuestionForm } from "./use-question.types";
import { getQuestionHint } from "./use-question.utils";

export const initialState: QuestionForm = {
  question: {
    value: "",
    error: false,
    hint: getQuestionHint(""),
  },
};
