import {
  FilterQuery,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';

const createUserRepositoryQuery = (filters?: UserRepositoryFilters) => {
  const query: FilterQuery<UserRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.userId) query.user_id = filters.userId;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createUserRepositoryQuery;
