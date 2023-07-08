import {
  FilterQuery,
} from 'mongoose';
import {
  QuestionSchema,
} from '../question-repository-schema';
import {
  QuestionRepositoryFilters,
} from '../../../../domain/repositories/question/question-filters';

const createQuestionRepositoryQuery = (
  filters?: QuestionRepositoryFilters,
): FilterQuery<QuestionSchema> => {
  const query: FilterQuery<QuestionSchema> = {
    is_deleted: false,
  };

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.username) query.username = filters.username;

  if (filters.isDeleted) query.is_deleted = filters.isDeleted;

  if (filters.status === 'answered') query.answer = { $exists: true };

  if (filters.status === 'unanswered') query.answer = { $exists: false };

  return query;
};

export default createQuestionRepositoryQuery;
