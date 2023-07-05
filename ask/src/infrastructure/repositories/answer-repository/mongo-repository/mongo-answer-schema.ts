import {
  Schema,
} from 'mongoose';
import {
  Answer,
} from '../../../../domain/entities/answer/answer-entities';

const answerSchema = new Schema<Answer>({
  answer: {
    type: String,
    required: true,
  },
  answeredAt: {
    type: Date,
    required: true,
  },
});

export default answerSchema;
