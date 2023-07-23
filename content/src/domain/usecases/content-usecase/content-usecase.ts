import {
  Content,
  CreateContent,
  UpdateContent,
} from '../../entities/content-entity/content-entities';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class ContentUsecase {
  /**
  * Creates an instance of ContentUsecase.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(protected readonly contentRepository: IContentRepository) {}

  /**
  * Gets content by its type.
  *
  * @param {string} type - The type of the content to retrieve.
  * @returns {Promise<Content>} A promise with the retrieved content.
  */
  abstract getContentByType: (type: string)
  => Promise<Content>;

  /**
  * Creates content using the provided payload.
  *
  * @param {CreateContent} payload - The payload for creating the content.
  * @returns {Promise<Content>} A promise with the created content.
  */
  abstract createContentByUsername: (username: string, payload: CreateContent)
  => Promise<Content>;

  /**
  * Updates content by its ID using the provided payload.
  *
  * @param {string} id - The ID of the content to update.
  * @param {UpdateContent} payload - The payload for updating the content.
  * @returns {Promise<Content>} A promise with the updated content.
  */
  abstract updateContentById: (id: string, payload: UpdateContent)
  => Promise<Content>;
}

export default ContentUsecase;
