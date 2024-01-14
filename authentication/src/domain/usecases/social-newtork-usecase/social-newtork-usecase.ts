import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  CreateSocialNetwork,
  UpdateSocialNetwork,
} from '../../entities/social-network-entity/social-network-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing a social network use case.
 * @abstract
 */
abstract class SocialNetworkUsecase {
  /**
   * Creates an instance of SocialNetworkUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   */
  constructor(protected readonly userRepository: IUserRepository) {}

  /**
   * Deletes a social network by its ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the social network to delete.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract deleteSocialNetworkById: (id: string)
  => Promise<DetailedSecureUser>;

  /**
   * Creates a social network for the detailed secure user.
   * @authentication Requires authentication to access this method.
   * @param {CreateSocialNetwork} payload - The data to create the social network with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract createSocialNetwork: (payload: CreateSocialNetwork)
  => Promise<DetailedSecureUser>;

  /**
   * Updates a social network by its ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the social network to update.
   * @param {UpdateSocialNetwork} payload - The data to update the social network with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract updateSocialNetworkById: (id: string, payload: UpdateSocialNetwork)
  => Promise<DetailedSecureUser>;
}

export default SocialNetworkUsecase;
