import answerRules from './answer-rules';

const formatAnswer = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_DISPLAY_LENGTH, MAX_DISPLAY_LENGTH } = answerRules.answer;
  const isAnswerInRange = answerLength >= MIN_DISPLAY_LENGTH && answerLength >= MAX_DISPLAY_LENGTH;
  return isAnswerInRange ? `${answer.slice(0, MIN_DISPLAY_LENGTH)}...` : answer;
};

export default formatAnswer;
