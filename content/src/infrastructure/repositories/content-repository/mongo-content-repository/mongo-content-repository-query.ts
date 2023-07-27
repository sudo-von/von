import {
  FilterQuery,
} from 'mongoose';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';
import {
  ContentRepositoryFilters,
} from '../../../../domain/repositories/content-repository/content-repository-filters';

const createContentRepositoryQuery = (filters?: ContentRepositoryFilters) => {
  const query: FilterQuery<ContentRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createContentRepositoryQuery;
