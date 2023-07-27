import {
  FilterQuery,
} from 'mongoose';
import {
  AboutRepositorySchema,
} from '../../../../domain/repositories/about-repository/about-repository-schema';
import {
  AboutRepositoryFilters,
} from '../../../../domain/repositories/about-repository/about-repository-filters';

const createAboutRepositoryQuery = (filters?: AboutRepositoryFilters) => {
  const query: FilterQuery<AboutRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createAboutRepositoryQuery;
