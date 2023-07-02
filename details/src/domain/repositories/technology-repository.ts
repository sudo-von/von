import {
  TechnologyEntity,
  CreateTechnologyEntity,
  UpdateTechnologyEntity,
} from '../entities/technology/technology-entity';

interface ITechnologyRepositoryReader {
  getTechnology: () => Promise<TechnologyEntity[]>;
  getTechnologyByUsername: (username: string) => Promise<TechnologyEntity | null>;
}

interface ITechnologyRepositoryWriter {
  createTechnology: (
    payload: CreateTechnologyEntity
  ) => Promise<TechnologyEntity>;

  updateTechnologyByUsername: (
    username: string,
    payload: UpdateTechnologyEntity
  ) => Promise<TechnologyEntity | null>;
}

interface ITechnologyRepository extends
  ITechnologyRepositoryReader, ITechnologyRepositoryWriter {}

export default ITechnologyRepository;
