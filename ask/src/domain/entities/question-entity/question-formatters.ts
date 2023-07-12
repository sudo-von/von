import {
  DetailedQuestion,
} from './question-entities';
import formatAnswer from '../answer-entity/answer-formatters';

type QuestionFormatOptions = Partial<{
  truncateAnswer: boolean;
}>;

const formatQuestion = (question: DetailedQuestion, options: QuestionFormatOptions = {
  truncateAnswer: false,
}): DetailedQuestion => ({
  id: question.id,
  views: question.views,
  askedAt: question.askedAt,
  askedBy: question.askedBy,
  username: question.username,
  question: question.question,
  answer: question.answer && {
    answeredAt: question.answer.answeredAt,
    answer: options.truncateAnswer ? formatAnswer(question.answer.answer) : question.answer.answer,
  },
});

export default formatQuestion;
