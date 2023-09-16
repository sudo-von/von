import {
  DetailedUser,
} from '../../entities/user-entity/user-entities';

/**
 * Represents a writer interface for managing avatar data in a repository.
 * @interface
 */
export interface IAvatarRepositoryWriter {

  /**
   * Deletes the avatar entry.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  deleteAvatar: ()
  => Promise<DetailedUser | null>;
}

/**
 * Represents an avatar repository interface with writer capabilities.
 * @interface
 * @extends {IAvatarRepositoryWriter}
 */
interface IAvatarRepository extends IAvatarRepositoryWriter {}

export default IAvatarRepository;
