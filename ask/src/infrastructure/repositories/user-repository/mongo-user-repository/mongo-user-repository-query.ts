import {
  FilterQuery,
} from 'mongoose';
import {
  UserRepositoryFilters,
} from '@repositories/user-repository/user-repository-filters';
import {
  UserRepositorySchema,
} from '../user-repository-schema';

const createUserRepositoryQuery = (filters?: UserRepositoryFilters) => {
  const query: FilterQuery<UserRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.userId) query.user_id = filters.userId;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createUserRepositoryQuery;
