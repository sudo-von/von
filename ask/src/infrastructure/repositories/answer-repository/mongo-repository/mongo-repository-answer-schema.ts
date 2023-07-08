import {
  Schema,
} from 'mongoose';
import {
  AnswerSchema,
} from '../answer-repository-schema';

const answerSchema = new Schema<AnswerSchema>({
  answer: {
    type: String,
    required: false,
  },
  answered_at: {
    type: Date,
    required: false,
  },
}, {
  _id: false,
});

export default answerSchema;
