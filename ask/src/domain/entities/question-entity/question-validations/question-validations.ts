import questionRules from '../question-rules';

const validateQuestionLength = (question: string) => {
  const questionLength = question.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = questionRules.question;
  return questionLength >= MIN_LENGTH && questionLength <= MAX_LENGTH;
};

export default validateQuestionLength;
