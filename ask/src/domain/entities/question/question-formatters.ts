import {
  Question,
} from './question-entities';
import formatAnswer from '../answer/answer-formatters';

type QuestionFormat = Partial<{
  answer: boolean;
}>;

const formatQuestion = (question: Question, format: QuestionFormat = {
  answer: true,
}): Question => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  askedBy: question.askedBy,
  username: question.username,
  question: question.question,
  answer: question.answer && {
    answeredAt: question.answer.answeredAt,
    answer: format.answer ? formatAnswer(question.answer.answer) : question.answer.answer,
  },
});

export default formatQuestion;
