import {
  HydratedDocument,
} from 'mongoose';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const questionModelToQuestion = (model: HydratedDocument<Question>): Question => {
  const question: Question = {
    id: model._id.toHexString(),
    views: model.views,
    askedAt: model.askedAt,
    askedBy: model.askedBy,
    username: model.username,
    question: model.question,
  };

  if (model.answer) {
    question.answer = {
      answer: model.answer.answer,
      answeredAt: model.answer.answeredAt,
    };
  }

  return question;
};

export default questionModelToQuestion;
