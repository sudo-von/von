import {
  VectorRepositoryFilters,
} from './vector-repository-filters';
import {
  CreateVector,
  PartialVector,
} from '../../entities/vector-entity/vector-entities';
import {
  DetailedContent,
} from '../../entities/content-entity/content-entities';

interface IVectorRepositoryWriter {
  /**
  * Creates a vector with the provided payload.
  * @param {CreateVector} payload - The payload for creating the vector.
  * @returns {Promise<DetailedContent>} A promise with the created vector.
  */
  createVector: (payload: CreateVector)
  => Promise<DetailedContent>;

  /**
  * Updates a vector with the provided partial payload and filters.
  * @param {PartialVector} payload - The partial payload for updating the vector.
  * @param {VectorRepositoryFilters} [filters] - Optional filters for updating the vector.
  * @returns {Promise<DetailedContent | null>} A promise with the updated vector if found.
  */
  updatevector: (payload: PartialVector, filters?: VectorRepositoryFilters)
  => Promise<DetailedContent | null>;
}

interface IVectorRepository extends IVectorRepositoryWriter {}

export default IVectorRepository;
