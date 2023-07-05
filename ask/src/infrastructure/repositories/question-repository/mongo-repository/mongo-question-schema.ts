import {
  Schema,
} from 'mongoose';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';
import answerSchema from '../../answer-repository/mongo-repository/mongo-answer-schema';

const questionSchema = new Schema<Question>({
  views: {
    type: Number,
    required: true,
  },
  askedAt: {
    type: Date,
    required: true,
  },
  askedBy: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: answerSchema,
    required: false,
  },
});

export default questionSchema;
