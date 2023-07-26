import {
  VectorRepositoryFilters,
} from './vector-repository-filters';
import {
  Vector,
  CreateVector,
  PartialVector,
} from '../../entities/vector-entity/vector-entities';

interface IVectorRepositoryReader {
  /**
  * Retrieves a vector based on the provided filters.
  * @param {VectorRepositoryFilters} [filters] - Optional filters for retrieving the vector.
  * @returns {Promise<Vector | null>} A promise with the retrieved vector if found.
  */
  getVector: (filters?: VectorRepositoryFilters)
  => Promise<Vector | null>;
}

interface IVectorRepositoryWriter {
  /**
  * Creates a vector with the provided payload.
  * @param {CreateVector} payload - The payload for creating the vector.
  * @returns {Promise<Vector>} A promise with the created vector.
  */
  createVector: (payload: CreateVector)
  => Promise<Vector>;

  /**
  * Updates a vector with the provided partial payload and filters.
  * @param {PartialVector} payload - The partial payload for updating the vector.
  * @param {VectorRepositoryFilters} [filters] - Optional filters for updating the vector.
  * @returns {Promise<Vector | null>} A promise with the updated vector if found.
  */
  updatevector: (payload: PartialVector, filters?: VectorRepositoryFilters)
  => Promise<Vector | null>;
}

interface IVectorRepository extends IVectorRepositoryReader, IVectorRepositoryWriter {}

export default IVectorRepository;
