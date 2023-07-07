import {
  Question,
} from './question-entities';
import formatAskedBy from './question-utils';
import formatAnswer from '../answer/answer-utils';

type Options = {
  askedBy: boolean;
  answer: boolean;
};

const formatQuestion = (question: Question, options: Options = {
  answer: true,
  askedBy: true,
}): Question => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  question: question.question,
  username: question.username,
  askedBy: options.askedBy ? formatAskedBy(question.askedBy) : question.askedBy,
  answer: question.answer && {
    answer: options.answer ? formatAnswer(question.answer.answer) : question.answer.answer,
    answeredAt: question.answer.answeredAt,
  },
});

export default formatQuestion;
