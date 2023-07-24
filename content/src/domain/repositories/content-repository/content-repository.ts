import {
  ContentRepositoryFilters,
} from './content-repository-filters';
import {
  DetailedContent,
  CreateDetailedContent,
  PartialDetailedContent,
} from '../../entities/content-entity/content-entities';

interface IContentRepositoryReader {
  /**
  * Retrieves a content based on the provided filters.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for retrieving the content.
  * @returns {Promise<DetailedContent | null>} A promise with the retrieved content if found.
  */
  getContent: (filters?: ContentRepositoryFilters)
  => Promise<DetailedContent | null>;

  /**
  * Retrieves multiple contents based on the provided filters.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for retrieving the contents.
  * @returns {Promise<DetailedContent[]>} A promise with an array of retrieved contents.
  */
  getContents: (filters?: ContentRepositoryFilters)
  => Promise<DetailedContent[]>;
}

interface IContentRepositoryWriter {
  /**
  * Creates a content with the provided payload.
  * @param {CreateDetailedContent} payload - The payload for creating the content.
  * @returns {Promise<DetailedContent>} A promise that resolves with the created content.
  */
  createContent: (payload: CreateDetailedContent)
  => Promise<DetailedContent>;

  /**
  * Updates a content with the provided partial payload and filters.
  * @param {PartialDetailedContent} payload - The partial payload for updating the content.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for updating the content.
  * @returns {Promise<DetailedContent | null>} A promise with the updated content if found.
  */
  updateContent: (payload: PartialDetailedContent, filters?: ContentRepositoryFilters)
  => Promise<DetailedContent | null>;

  /**
  * Updates multiple content items based on the provided payload and optional filters.
  * @param {PartialDetailedContent} payload - The partial payload for updating the content items.
  * @param {ContentRepositoryFilters} [filters] - Optional filters for updating the content items.
  * @returns {Promise<void>} A promise that resolves when the update is successful.
  */
  updateContents: (payload: PartialDetailedContent, filters?: ContentRepositoryFilters)
  => Promise<void>;
}

interface IContentRepository extends IContentRepositoryReader, IContentRepositoryWriter {}

export default IContentRepository;
