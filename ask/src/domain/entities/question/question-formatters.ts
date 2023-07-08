import {
  Question,
} from './question-entities';
import formatAnswer from '../answer/answer-utils';

type Format = {
  askedBy?: boolean;
  answer?: boolean;
};

const formatQuestion = (question: Question, format: Format = {
  answer: true,
  askedBy: true,
}): Question => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  question: question.question,
  username: question.username,
  askedBy: format.askedBy ? 'anonymous' : question.askedBy,
  answer: question.answer && {
    answer: format.answer ? formatAnswer(question.answer.answer) : question.answer.answer,
    answeredAt: question.answer.answeredAt,
  },
});

export default formatQuestion;
