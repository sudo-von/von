import {
  model,
} from 'mongoose';
import {
  QuestionRepositorySchema,
} from '../question-repository-schema';
import questionRepositorySchema from './mongo-question-schema';

const QuestionModel = model<QuestionRepositorySchema>('question', questionRepositorySchema);

export default QuestionModel;
