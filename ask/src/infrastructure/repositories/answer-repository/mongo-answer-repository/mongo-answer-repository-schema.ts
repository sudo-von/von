import {
  Schema,
} from 'mongoose';
import {
  AnswerSchema,
} from '../../../../domain/repositories/answer-repository/answer-repository-schema';

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
