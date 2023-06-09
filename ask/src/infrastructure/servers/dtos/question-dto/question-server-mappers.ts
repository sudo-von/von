import {
  DetailedQuestionResponse,
} from './question-server-response-dtos';
import {
  DetailedQuestion,
} from '../../../../domain/entities/question-entity/question-entities';

const questionToDetailedQuestionResponse = (
  question: DetailedQuestion,
): DetailedQuestionResponse => ({
  id: question.id,
  views: question.views,
  asked_at: question.askedAt,
  username: question.username,
  question: question.question,
  answer: question.answer && {
    answer: question.answer.answer,
    answered_at: question.answer.answeredAt,
  },
});

export default questionToDetailedQuestionResponse;
