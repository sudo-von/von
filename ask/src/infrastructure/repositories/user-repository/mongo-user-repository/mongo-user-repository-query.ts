import {
  FilterQuery,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user/user-repository-filters';

const createUserRepositoryQuery = (filters?: UserRepositoryFilters): FilterQuery<UserSchema> => {
  const query: FilterQuery<UserSchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.userId) query.user_id = filters.userId;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createUserRepositoryQuery;
