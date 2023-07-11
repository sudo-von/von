import answerRules from './answer-rules';

const truncateAnswer = (answer: string) => `${answer.slice(0, answerRules.answer.MIN_DISPLAY_LENGTH)}...`;

const formatAnswer = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_DISPLAY_LENGTH, MAX_DISPLAY_LENGTH } = answerRules.answer;
  const isAnswerInRange = answerLength >= MIN_DISPLAY_LENGTH && answerLength >= MAX_DISPLAY_LENGTH;
  return isAnswerInRange ? truncateAnswer(answer) : answer;
};

export default formatAnswer;
