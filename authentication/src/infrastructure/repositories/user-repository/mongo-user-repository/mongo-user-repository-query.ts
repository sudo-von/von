import {
  FilterQuery,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../user-repository-schema';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';

const createQuestionRepositoryQuery = (filters?: UserRepositoryFilters) => {
  const query: FilterQuery<UserRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._ = filters.id;

  if (filters.name) query.name = filters.name;

  if (filters.email) query.email = filters.email;

  if (filters.avatar) query.avatar = filters.avatar;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createQuestionRepositoryQuery;
