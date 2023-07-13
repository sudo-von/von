import questionRules from '../question-rules';

export const validateAskedByLength = (askedBy: string) => {
  const askedByLength = askedBy.trim().length;
  const { MIN_LENGTH } = questionRules.askedBy.content;
  return askedByLength >= MIN_LENGTH;
};

export const validateQuestionLength = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = questionRules.question.content;
  return questionLength >= MIN_LENGTH && questionLength <= MAX_LENGTH;
};
