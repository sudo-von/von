import {
  HydratedDocument,
} from 'mongoose';
import {
  QuestionRepository,
} from '../dtos/question-repository-dtos';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionModelToQuestion = (model: HydratedDocument<QuestionRepository>): Question => ({
  id: model._id.toHexString(),
  views: model.views,
  askedAt: model.asked_at,
  askedBy: model.asked_by,
  username: model.username,
  question: model.question,
  answer: model.answer && {
    answer: model.answer.answer,
    answeredAt: model.answer.answered_at,
  },
});

export default questionModelToQuestion;
