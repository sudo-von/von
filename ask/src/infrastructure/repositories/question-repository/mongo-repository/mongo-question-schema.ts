import {
  Schema,
} from 'mongoose';
import {
  QuestionRepository,
} from '../dtos/question-repository-dtos';
import answerSchema from '../../answer-repository/mongo-repository/mongo-answer-schema';

const questionSchema = new Schema<QuestionRepository>({
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
    type: answerSchema,
    required: false,
  },
});

export default questionSchema;
