import {
  VectorRepositoryFilters,
} from './vector-repository-filters';
import {
  VectorCollection,
  CreateVectorCollection,
  PartialVectorCollection,
} from '../../entities/vector-entity/vector-entities';

interface IVectorRepositoryReader {
  getVector: (filters?: VectorRepositoryFilters)
  => Promise<VectorCollection | null>;
}

interface IVectorRepositoryWriter {
  createVector: (payload: CreateVectorCollection)
  => Promise<VectorCollection>;

  updateVector: (payload: PartialVectorCollection, filters?: VectorRepositoryFilters)
  => Promise<VectorCollection | null>;

  updateVectors: (payload: PartialVectorCollection, filters?: VectorRepositoryFilters)
  => Promise<void>;
}

interface IVectorRepository extends IVectorRepositoryReader, IVectorRepositoryWriter {}

export default IVectorRepository;
