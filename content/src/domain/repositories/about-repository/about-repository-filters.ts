import {
  PartialAbout,
} from '../../entities/about-entity/about-entities';

export type AboutRepositoryFilters = Pick<PartialAbout, 'id' | 'username'>;
