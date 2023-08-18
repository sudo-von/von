import dailyQuestionRules from '../daily-question-rules';

export const validateAskedByLength = (askedBy: string) => {
  const askedByLength = askedBy.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = dailyQuestionRules.askedBy;
  return askedByLength >= MIN_LENGTH && askedByLength <= MAX_LENGTH;
};

export const validateQuestionLength = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = dailyQuestionRules.question;
  return questionLength >= MIN_LENGTH && questionLength <= MAX_LENGTH;
};
