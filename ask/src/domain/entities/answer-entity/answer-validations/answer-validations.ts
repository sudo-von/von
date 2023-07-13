import answerRules from '../answer-rules';

const validateAnswerLength = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = answerRules.answer.content;
  return answerLength >= MIN_LENGTH && answerLength <= MAX_LENGTH;
};

export default validateAnswerLength;
