import {
  Schema,
} from 'mongoose';
import {
  QuestionRepositorySchema,
} from '../../../../domain/repositories/question-repository/question-repository-schema';
import answerRepositorySchema from '../../answer-repository/mongo-answer-repository/mongo-answer-repository-schema';

const questionRepositorySchema = new Schema<QuestionRepositorySchema>({
  views: {
    type: Number,
    required: true,
  },
  asked_at: {
    type: Date,
    required: true,
  },
  asked_by: {
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
  is_deleted: {
    type: Boolean,
    required: true,
  },
  answer: {
    type: answerRepositorySchema,
    required: false,
  },
});

export default questionRepositorySchema;
