import {
  PartialVectorCollection,
} from '../../entities/vector-entity/vector-entities';

export type VectorRepositoryFilters = Pick<PartialVectorCollection, 'id' | 'username'> & {
  vectorMediaId: string;
};
