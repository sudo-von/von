import { FilterQuery } from 'mongoose';
import {
  QuestionFilters,
} from '../../../../domain/repositories/question-repository';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const getQuestionRepositoryFilters = ({ status }: QuestionFilters): FilterQuery<Question> => {
  if (status === 'answered') return { answer: { $exists: true } };
  if (status === 'unanswered') return { answer: { $exists: false } };
  return {};
};

export default getQuestionRepositoryFilters;
