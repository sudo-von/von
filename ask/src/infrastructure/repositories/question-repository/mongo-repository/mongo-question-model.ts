import {
  model,
} from 'mongoose';
import userSchema from './mongo-question-schema';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const QuestionModel = model<Question>('question', userSchema);

export default QuestionModel;
