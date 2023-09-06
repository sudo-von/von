import { QuestionForm } from "@ask/hooks/use-question/use-question.types";
import { getQuestionHint } from "@ask/hooks/use-question/use-question.utils";

export const initialState: QuestionForm = {
  question: {
    value: "",
    error: false,
    hint: getQuestionHint(""),
  },
};
