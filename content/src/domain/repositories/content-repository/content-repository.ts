import {
  ContentRepositoryFilters,
} from './content-repository-filters';
import {
  Content,
  CreateContent,
  PartialContent,
} from '../../entities/content-entity/content-entities';

interface IContentRepositoryReader {
  /**
  * Retrieves a content based on the provided filters.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for retrieving the content.
  * @returns {Promise<Content | null>} A promise with the retrieved content or null if not found.
  */
  getContent: (filters?: ContentRepositoryFilters)
  => Promise<Content | null>;

  /**
  * Retrieves multiple contents based on the provided filters.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for retrieving the contents.
  * @returns {Promise<Content[]>} A promise with an array of retrieved contents.
  */
  getContents: (filters?: ContentRepositoryFilters)
  => Promise<Content[]>;
}

interface IContentRepositoryWriter {
  /**
  * Creates a content with the provided payload.
  * @param {CreateContent} payload - The payload for creating the content.
  * @returns {Promise<Content>} A promise that resolves with the created content.
  */
  createContent: (payload: CreateContent)
  => Promise<Content>;

  /**
  * Updates a content with the provided partial payload and filters.
  * @param {PartialContent} payload - The partial payload for updating the content.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for updating the content.
  * @returns {Promise<Content | null>} A promise with the updated content or null if not found.
  */
  updateContent: (payload: PartialContent, filters?: ContentRepositoryFilters)
  => Promise<Content | null>;
}

interface IContentRepository extends IContentRepositoryReader, IContentRepositoryWriter {}

export default IContentRepository;
