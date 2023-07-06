import {
  Question,
} from './question-entities';
import formatAskedBy from './question-utils';

const formatQuestion = (question: Question): Question => ({
  id: question.id,
  views: question.views,
  answer: question.answer,
  askedAt: question.askedAt,
  question: question.question,
  username: question.username,
  askedBy: formatAskedBy(question.askedBy),
});

export default formatQuestion;
