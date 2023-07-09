import {
  model,
} from 'mongoose';
import questionSchema from './mongo-question-schema';
import {
  QuestionSchema,
} from '../../../../domain/repositories/question-repository/question-repository-schema';

const QuestionModel = model<QuestionSchema>('question', questionSchema);

export default QuestionModel;
