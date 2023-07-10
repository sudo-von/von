import questionRules from '../question-rules';

export const validateAskedByLength = (askedBy: string) => {
  const askedByLength = askedBy.trim().length;
  const { MIN_LENGTH } = questionRules.askedBy;
  return askedByLength >= MIN_LENGTH;
};

export const validateQuestionLength = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = questionRules.question;
  return questionLength >= MIN_LENGTH && questionLength <= MAX_LENGTH;
};
