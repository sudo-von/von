import {
  HydratedDocument,
} from 'mongoose';
import {
  QuestionSchema,
} from '../question-repository-schema';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionDocumentToQuestion = (document: HydratedDocument<QuestionSchema>): Question => ({
  id: document._id.toHexString(),
  views: document.views,
  askedAt: document.asked_at,
  askedBy: document.asked_by,
  username: document.username,
  question: document.question,
  answer: document.answer && {
    answer: document.answer.answer,
    answeredAt: document.answer.answered_at,
  },
});

export default questionDocumentToQuestion;
