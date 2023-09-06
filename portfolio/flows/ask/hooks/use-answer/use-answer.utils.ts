import answerRules from "@ask/hooks/use-answer/use-answer.rules";

export const getAnswerHint = (answer: string) =>
  `${answer.trim().length}/${answerRules.answer.MAX_LENGTH}`;
