import {
  FilterQuery,
} from 'mongoose';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';
import {
  VideoRepositoryFilters,
} from '../../../../domain/repositories/video-repository/video-repository-filters';

const createVideoRepositoryQuery = (filters?: VideoRepositoryFilters) => {
  const query: FilterQuery<VideoRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.username) query.username = filters.username;

  return query;
};

export default createVideoRepositoryQuery;
