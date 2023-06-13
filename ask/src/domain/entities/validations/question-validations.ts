export const createQuestionRules = {
  question: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 300,
  },
} as const;

export const validateQuestion = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createQuestionRules.question;
  return questionLength >= MIN_LENGTH && questionLength <= MAX_LENGTH;
};
