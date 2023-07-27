import {
  AboutRepositoryFilters,
} from './about-repository-filters';
import {
  About,
  CreateAbout,
  PartialAbout,
} from '../../entities/about-entity/about-entities';

interface IAboutRepositoryReader {
  getAbout: (filters?: AboutRepositoryFilters)
  => Promise<About | null>;
}

interface IAboutRepositoryWriter {
  createAbout: (payload: CreateAbout)
  => Promise<About>;

  updateAbout: (payload: PartialAbout, filters?: AboutRepositoryFilters)
  => Promise<About | null>;

  updateAbouts: (payload: PartialAbout, filters?: AboutRepositoryFilters)
  => Promise<void>;
}

interface IAboutRepository extends IAboutRepositoryReader, IAboutRepositoryWriter {}

export default IAboutRepository;
