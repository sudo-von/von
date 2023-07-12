import {
  FilterQuery,
} from 'mongoose';
import {
  QuestionRepositorySchema,
} from '../question-repository-schema';
import {
  QuestionRepositoryFilters,
} from '../../../../domain/repositories/question-repository/question-repository-filters';

const createQuestionRepositoryQuery = (filters?: QuestionRepositoryFilters) => {
  const query: FilterQuery<QuestionRepositorySchema> = {
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
