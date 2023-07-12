import answerRules from './answer-rules';

const formatAnswer = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_DISPLAY_LENGTH, MAX_DISPLAY_LENGTH } = answerRules.answer;
  if (answerLength >= MAX_DISPLAY_LENGTH) {
    const truncatedAnswer = `${answer.slice(0, MIN_DISPLAY_LENGTH)}...`;
    return truncatedAnswer;
  }
  return answer;
};

export default formatAnswer;
