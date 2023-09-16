import {
  DetailedUser,
} from '../../entities/user-entity/user-entities';
import {
  SocialNetwork,
  CreateSocialNetwork,
  PartialSocialNetwork,
} from '../../entities/social-network-entity/social-network-entities';

/**
 * Represents a reader interface for accessing social network data in a repository.
 * @interface
 */
export interface ISocialNetworkRepositoryReader {
  /**
   * Retrieves a social network object by its ID.
   * @param {string} id - The ID of the social network object to retrieve.
   * @returns {Promise<SocialNetwork | null>} A promise with the social network if found.
   */
  getSocialNetworkById: (id: string)
  => Promise<SocialNetwork | null>
}

/**
 * Represents a writer interface for managing social network data in a repository.
 * @interface
 */
export interface ISocialNetworkRepositoryWriter {

  /**
   * Deletes a social network entry by id.
   * @param {string} id - The ID of the social network object to delete.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  deleteSocialNetworkById: (id: string)
  => Promise<DetailedUser | null>;

  /**
   * Creates a new social network entry for a user.
   * @param {CreateSocialNetwork} payload - The data for the new social network entry.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  createSocialNetwork: (payload: CreateSocialNetwork)
  => Promise<DetailedUser | null>;

  /**
   * Updates a social network entry by id.
   * @param {string} id - The ID of the social network object to update.
   * @param {PartialSocialNetwork} payload - The updated data for the social network entry.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  updateSocialNetworkById: (id: string, payload: PartialSocialNetwork)
  => Promise<DetailedUser | null>;
}

/**
 * Represents a combined social network repository interface,
 * combining both reader and writer capabilities.
 * @interface
 * @extends {IUserRepositoryReader}
 * @extends {ISocialNetworkRepositoryWriter}
 */
interface ISocialNetworkRepository extends
  ISocialNetworkRepositoryReader,
  ISocialNetworkRepositoryWriter {}

export default ISocialNetworkRepository;
