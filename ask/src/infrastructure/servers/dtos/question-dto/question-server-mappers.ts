import {
  QuestionResponse,
} from './question-server-dtos';
import {
  DetailedQuestion,
} from '../../../../domain/entities/question-entity/question-entities';

const questionToQuestionResponse = (question: DetailedQuestion): QuestionResponse => ({
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

export default questionToQuestionResponse;
