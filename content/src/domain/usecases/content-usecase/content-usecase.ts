import {
  CreateContent,
  UpdateContent,
  DetailedContent,
} from '../../entities/content-entity/content-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class ContentUsecase {
  /**
  * Creates an instance of ContentUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  /**
  * Retrieves a content given the type and username.
  * @param {string} type - The type of the content.
  * @param {string} username - The username of the user.
  * @returns {Promise<DetailedContent>} A promise with the retrieved content.
  */
  abstract getContent: (type: string, username: string)
  => Promise<DetailedContent>;

  /**
  * Retrieves contents by username.
  * @param {string} username - The username of the user.
  * @returns {Promise<DetailedContent[]>} A promise with an array of DetailedContent objects.
  */
  abstract getContentsByUsername: (username: string)
  => Promise<DetailedContent[]>;

  /**
  * Creates content for a user by username with the provided payload.
  * @param {string} username - The username of the user.
  * @param {CreateContent} payload - The payload for creating the content.
  * @returns {Promise<DetailedContent>} A promise with the created content.
  */
  abstract createContentByUsername: (username: string, payload: CreateContent)
  => Promise<DetailedContent>;

  /**
  * Updates content by its ID with the provided payload.
  * @param {string} id - The ID of the content to update.
  * @param {UpdateContent} payload - The payload for updating the content.
  * @returns {Promise<DetailedContent>} A promise with the updated content.
  */
  abstract updateContentById: (id: string, payload: UpdateContent)
  => Promise<DetailedContent>;
}

export default ContentUsecase;
