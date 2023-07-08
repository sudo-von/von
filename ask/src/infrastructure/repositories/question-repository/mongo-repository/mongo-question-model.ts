import {
  model,
} from 'mongoose';
import {
  QuestionSchema,
} from '../question-repository-schema';
import questionSchema from './mongo-question-schema';

const QuestionModel = model<QuestionSchema>('question', questionSchema);

export default QuestionModel;
