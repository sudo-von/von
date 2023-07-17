import {
  Schema,
} from 'mongoose';
import {
  AnswerRepositorySchema,
} from '../../../../domain/repositories/answer-repository/answer-repository-schema';

const answerRepositorySchema = new Schema<AnswerRepositorySchema>({
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

export default answerRepositorySchema;
