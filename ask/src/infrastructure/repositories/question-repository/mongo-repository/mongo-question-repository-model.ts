import {
  model,
} from 'mongoose';
import questionRepositorySchema from './mongo-question-repository-schema';
import {
  QuestionRepositorySchema,
} from '../../../../domain/repositories/question-repository/question-repository-schema';

const QuestionModel = model<QuestionRepositorySchema>('question', questionRepositorySchema);

export default QuestionModel;
