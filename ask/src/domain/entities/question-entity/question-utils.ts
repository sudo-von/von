import {
  DetailedQuestion,
} from './question-entities';
import truncateAnswer from '../answer-entity/answer-utils';

export const formatQuestion = (question: DetailedQuestion): DetailedQuestion => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  askedBy: question.askedBy,
  username: question.username,
  question: question.question,
  answer: question.answer && {
    answeredAt: question.answer.answeredAt,
    answer: truncateAnswer(question.answer.answer),
  },
});

export const formatQuestions = (questions: DetailedQuestion[]) => questions.map(
  (question) => formatQuestion(question),
);
