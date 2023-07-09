import {
  QuestionResponse,
} from './question-server-dtos';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionToQuestionResponse = (question: Question): QuestionResponse => ({
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
