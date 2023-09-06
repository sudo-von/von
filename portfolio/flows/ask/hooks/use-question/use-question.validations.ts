import questionRules from "@ask/hooks/use-question/use-question.rules";

export const validateQuestionLength = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = questionRules.question;
  return questionLength < MIN_LENGTH || questionLength > MAX_LENGTH;
};
