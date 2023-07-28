import {
  FilterQuery,
} from 'mongoose';
import {
  VectorRepositorySchema,
} from '../../../../domain/repositories/vector-repository/vector-repository-schema';
import {
  VectorRepositoryFilters,
} from '../../../../domain/repositories/vector-repository/vector-repository-filters';

const createVectorRepositoryQuery = (filters?: VectorRepositoryFilters) => {
  const query: FilterQuery<VectorRepositorySchema> = {};

  if (!filters) return query;

  if (filters.id) query._id = filters.id;

  if (filters.username) query.username = filters.username;

  if (filters.vectorMediaId) {
    query.media = {
      vectors: {
        $elemMatch: { _id: filters.vectorMediaId },
      },
    };
  }

  return query;
};

export default createVectorRepositoryQuery;
