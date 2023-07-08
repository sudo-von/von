import {
  Schema,
} from 'mongoose';
import {
  AnswerRepository,
} from '../dtos/answer-repository-dtos';

const answerSchema = new Schema<AnswerRepository>({
  answer: {
    type: String,
    required: false,
  },
  answered_at: {
    type: Date,
    required: false,
  },
}, {
  id: false,
});

export default answerSchema;
