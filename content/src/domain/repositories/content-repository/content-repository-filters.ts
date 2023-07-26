import {
  PartialDetailedContent,
} from '../../entities/content-entity/content-entities';

export type ContentRepositoryFilters = PartialDetailedContent & Partial<{
  vectorId: string;
  timelineId: string;
}>;
