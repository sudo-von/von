import {
  HydratedDocument,
} from 'mongoose';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionModelToQuestion = (model: HydratedDocument<Question>): Question => ({
  id: model._id.toHexString(),
  views: model.views,
  askedAt: model.askedAt,
  askedBy: model.askedBy,
  username: model.username,
  question: model.question,
  answer: model.answer && {
    answer: model.answer.answer,
    answeredAt: model.answer.answeredAt,
  },
});

export default questionModelToQuestion;
