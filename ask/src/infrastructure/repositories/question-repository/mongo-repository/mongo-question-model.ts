import {
  model,
} from 'mongoose';
import {
  QuestionRepository,
} from '../dtos/question-repository-dtos';
import questionSchema from './mongo-question-schema';

const QuestionModel = model<QuestionRepository>('question', questionSchema);

export default QuestionModel;
