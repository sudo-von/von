import {
  ContentRepositoryFilters,
} from './content-repository-filters';
import {
  Content,
  CreateContent,
  PartialContent,
} from '../../entities/content-entity/content-entities';

interface IContentRepositoryReader {
  getContent: (filters?: ContentRepositoryFilters)
  => Promise<Content | null>;

  getContents: (filters?: ContentRepositoryFilters)
  => Promise<Content[]>;
}

interface IContentRepositoryWriter {
  createContent: (payload: CreateContent)
  => Promise<Content>;

  updateContent: (payload: PartialContent, filters?: ContentRepositoryFilters)
  => Promise<Content | null>;

  updateContents: (payload: PartialContent, filters?: ContentRepositoryFilters)
  => Promise<void>;
}

interface IContentRepository extends IContentRepositoryReader, IContentRepositoryWriter {}

export default IContentRepository;
