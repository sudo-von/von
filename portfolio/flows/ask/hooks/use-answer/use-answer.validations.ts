import answerRules from "@ask/hooks/use-answer/use-answer.rules";

export const validateAnswerLength = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = answerRules.answer;
  return answerLength < MIN_LENGTH || answerLength > MAX_LENGTH;
};
