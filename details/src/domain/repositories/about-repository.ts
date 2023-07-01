import {
  AboutEntity,
  CreateAboutEntity,
  UpdateAboutEntity,
} from '../entities/about/about-entity';

export interface IAboutRepositoryReader {
  getAbouts: () => Promise<AboutEntity[]>;
  getAboutByUsername: (username: string) => Promise<AboutEntity | null>;
}

interface IAboutRepositoryWriter {
  createAbout: (
    payload: CreateAboutEntity
  ) => Promise<AboutEntity>;

  updateAboutByUsername: (
    username: string,
    payload: UpdateAboutEntity
  ) => Promise<AboutEntity | null>;
}

interface IAboutRepository extends IAboutRepositoryReader, IAboutRepositoryWriter {}

export default IAboutRepository;
