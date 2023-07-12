import {
  Schema,
} from 'mongoose';
import {
  AnswerRepositorySchema,
} from '../answer-repository-schema';

const answerSchema = new Schema<AnswerRepositorySchema>({
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
