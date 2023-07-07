import {
  QuestionServer,
} from './question-server-dtos';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionToQuestionServer = (question: Question): QuestionServer => ({
  id: question.id,
  views: question.views,
  asked_at: question.askedAt,
  asked_by: question.askedBy,
  username: question.username,
  question: question.question,
  answer: question.answer && {
    answer: question.answer.answer,
    answered_at: question.answer.answeredAt,
  },
});

export default questionToQuestionServer;
