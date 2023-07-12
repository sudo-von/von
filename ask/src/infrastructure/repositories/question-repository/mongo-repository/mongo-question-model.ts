import {
  model,
} from 'mongoose';
import questionSchema from './mongo-question-schema';
import {
  QuestionRepositorySchema,
} from '../question-repository-schema';

const QuestionModel = model<QuestionRepositorySchema>('question', questionSchema);

export default QuestionModel;
