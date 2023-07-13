import answerRules from './answer-rules';

const truncateAnswer = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = answerRules.answer.display;
  if (answerLength >= MAX_LENGTH) {
    return `${answer.slice(0, MIN_LENGTH)}...`;
  }
  return answer;
};

export default truncateAnswer;
