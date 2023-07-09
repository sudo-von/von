import {
  Schema,
} from 'mongoose';
import {
  QuestionSchema,
} from '../../../../domain/repositories/question-repository/question-repository-schema';
import answerSchema from '../../answer-repository/mongo-answer-repository/mongo-answer-repository-schema';

const questionSchema = new Schema<QuestionSchema>({
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
