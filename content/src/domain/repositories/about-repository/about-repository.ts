import {
  About,
  CreateAbout,
  PartialAbout,
} from '../../entities/about-entity/about-entities';

interface IAboutRepositoryReader {
  getAboutByUsername: (username: string)
  => Promise<About | null>;
}

interface IAboutRepositoryWriter {
  createAbout: (payload: CreateAbout)
  => Promise<About>;

  updateAboutById: (id: string, payload: PartialAbout)
  => Promise<About | null>;
}

interface IAboutRepository extends IAboutRepositoryReader, IAboutRepositoryWriter {}

export default IAboutRepository;
