import {
  DetailedAnswer,
} from './answer-entities';
import answerRules from './answer-rules';

export const truncateAnswer = (answer: string) => {
  const answerLength = answer.trim().length;
  const { MIN_DISPLAY_LENGTH, MAX_DISPLAY_LENGTH } = answerRules.answer;
  if (answerLength >= MAX_DISPLAY_LENGTH) {
    return `${answer.slice(0, MIN_DISPLAY_LENGTH)}...`;
  }
  return answer;
};

export const formatAnswer = (answer: DetailedAnswer): DetailedAnswer => ({
  answer: truncateAnswer(answer.answer),
  answeredAt: answer.answeredAt,
});
