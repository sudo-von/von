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

  if (filters.type) query.type = filters.type;

  if (filters.title) query.title = { $regex: filters.title, $options: 'i' };

  if (filters.subtitle) query.subtitle = { $regex: filters.subtitle, $options: 'i' };

  if (filters.username) query.username = filters.username;

  if (filters.description) query.description = { $regex: filters.description, $options: 'i' };

  return query;
};

export default createContentRepositoryQuery;
