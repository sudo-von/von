import {
  DetailedUser,
} from '../../entities/user-entity/user-entities';
import {
  DetailedSocialNetwork,
  CreateDetailedSocialNetwork,
  PartialDetailedSocialNetwork,
} from '../../entities/social-network-entity/social-network-entities';

/**
 * Represents a reader interface for accessing social network data in a repository.
 * @interface
 */
export interface ISocialNetworkRepositoryReader {
  /**
   * Retrieves a detailed social network by its ID.
   * @param {string} id - The ID of the detailed social network to retrieve.
   * @returns {Promise<DetailedSocialNetwork | null>} A promise with the detailed social network if found.
   */
  getSocialNetworkById: (id: string)
  => Promise<DetailedSocialNetwork | null>
}

/**
 * Represents a writer interface for managing social network data in a repository.
 * @interface
 */
export interface ISocialNetworkRepositoryWriter {

  /**
   * Deletes a social network entry by id.
   * @param {string} id - The ID of the social network to delete.
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
   * @param {string} id - The ID of the social network to update.
   * @param {PartialDetailedSocialNetwork} payload - The updated data for the social network entry.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  updateSocialNetworkById: (id: string, payload: PartialDetailedSocialNetwork)
  => Promise<DetailedUser | null>;
}

/**
 * Represents a combined social network repository interface,
 * combining both reader and writer capabilities.
 * @interface
 * @extends {ISocialNetworkRepositoryWriter}
 */
interface ISocialNetworkRepository extends
  ISocialNetworkRepositoryReader,
  ISocialNetworkRepositoryWriter { }

export default ISocialNetworkRepository;
