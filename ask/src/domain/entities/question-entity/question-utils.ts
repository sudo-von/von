import {
  DetailedQuestion,
} from './question-entities';
import {
  formatAnswer,
} from '../answer-entity/answer-utils';

export const formatQuestion = (question: DetailedQuestion): DetailedQuestion => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  askedBy: question.askedBy,
  question: question.question,
  username: question.username,
  answer: question.answer && formatAnswer(question.answer),
});

export const formatQuestions = (
  questions: DetailedQuestion[],
) => questions.map((question) => formatQuestion(question));
