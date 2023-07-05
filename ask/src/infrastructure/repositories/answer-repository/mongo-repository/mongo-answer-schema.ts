import {
  Schema,
} from 'mongoose';
import {
  Answer,
} from '../../../../domain/entities/answer/answer-entities';

const answerSchema = new Schema<Answer>({
  answer: {
    type: String,
    required: false,
  },
  answeredAt: {
    type: Date,
    required: false,
  },
});

export default answerSchema;
