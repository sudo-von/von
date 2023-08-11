import {
  DetailedUser,
} from '../../entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from '../user-repository/user-repository-filters';
import {
  CreateSocialNetwork,
  PartialSocialNetwork,
} from '../../entities/social-network-entity/social-network-entities';

/**
* Represents a writer interface for managing social network data in a repository.
* @interface
*/
export interface ISocialNetworkRepositoryWriter {
  /**
  * Creates a new social network entry for a user.
  * @param {CreateSocialNetwork} payload - The data for the new social network entry.
  * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
  * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
  */
  createSocialNetwork: (payload: CreateSocialNetwork, filters?: UserRepositoryFilters)
  => Promise<DetailedUser | null>;

  /**
  * Updates a social network entry for a user by its ID.
  * @param {string} id - The ID of the social network entry to update.
  * @param {PartialSocialNetwork} payload - The updated data for the social network entry.
  * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
  */
  updateSocialNetworkById: (id: string, payload: PartialSocialNetwork)
  => Promise<DetailedUser | null>;
}