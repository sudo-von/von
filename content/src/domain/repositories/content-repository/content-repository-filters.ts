import {
  PartialContent,
} from '../../entities/content-entity/content-entities';

export type ContentRepositoryFilters = Pick<PartialContent, 'id' | 'username'>;
