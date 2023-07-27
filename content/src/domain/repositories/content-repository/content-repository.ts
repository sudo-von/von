import {
  ContentRepositoryFilters,
} from './content-repository-filters';
import {
  DetailedContent,
  CreateDetailedContent,
  PartialDetailedContent,
} from '../../entities/content-entity/content-entities';

interface IContentRepositoryReader {
  getContent: (filters?: ContentRepositoryFilters)
  => Promise<DetailedContent | null>;

  getContents: (filters?: ContentRepositoryFilters)
  => Promise<DetailedContent[]>;
}

interface IContentRepositoryWriter {
  createContent: (payload: CreateDetailedContent)
  => Promise<DetailedContent>;

  updateContent: (payload: PartialDetailedContent, filters?: ContentRepositoryFilters)
  => Promise<DetailedContent | null>;

  updateContents: (payload: PartialDetailedContent, filters?: ContentRepositoryFilters)
  => Promise<void>;
}

interface IContentRepository extends IContentRepositoryReader, IContentRepositoryWriter {}

export default IContentRepository;
