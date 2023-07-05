import {
  model,
} from 'mongoose';
import questionSchema from './mongo-question-schema';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const QuestionModel = model<Question>('question', questionSchema);

export default QuestionModel;
