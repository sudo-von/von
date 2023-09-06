import questionRules from "@ask/hooks/use-question/use-question.rules";

export const getQuestionHint = (question: string) =>
  `${question.trim().length}/${questionRules.question.MAX_LENGTH}`;
