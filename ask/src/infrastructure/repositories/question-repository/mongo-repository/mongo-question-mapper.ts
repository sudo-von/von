import {
  HydratedDocument,
} from 'mongoose';
import {
  DetailedQuestion,
} from '../../../../domain/entities/question-entity/question-entities';
import {
  QuestionRepositorySchema,
} from '../question-repository-schema';

const questionDocumentToQuestion = (
  document: HydratedDocument<QuestionRepositorySchema>,
): DetailedQuestion => ({
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
