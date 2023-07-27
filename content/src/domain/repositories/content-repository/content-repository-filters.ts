import {
  PartialDetailedContent,
} from '../../entities/content-entity/content-entities';

export type ContentRepositoryFilters = Pick<PartialDetailedContent, 'id' | 'username'>;
