import {
  Types,
  FilterQuery,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import {
  UserRepositoryFilters,
} from '../../../../domain/repositories/user-repository/user-repository-filters';

const createQuestionRepositoryQuery = (filters?: UserRepositoryFilters) => {
  const query: FilterQuery<UserRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.email) query.email = filters.email;

  if (filters.username) query.username = filters.username;

  if (!filters.socialNetworks) return query;

  if (filters.socialNetworks.id) {
    query['social_networks._id'] = filters.socialNetworks.id;
  }

  return query;
};

export default createQuestionRepositoryQuery;
