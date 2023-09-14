import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import FileService from '../../services/file-service/file-service';
import {
  CreateSocialNetworkFile,
  UpdateSocialNetworkFile,
} from '../../entities/social-network-entity/social-network-entities';
import ISecurityService from '../../services/security-service/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing a social network use case.
 * @abstract
 */
abstract class SocialNetworkUsecase {
  /**
   * Creates an instance of SocialNetworkUsecase.
   * @param {FileService} fileService - The file service.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {ISecurityService} securityService - The security service.
   */
  constructor(
    protected readonly fileService: FileService,
    protected readonly userRepository: IUserRepository,
    protected readonly securityService: ISecurityService,
  ) {}

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
   * @param {CreateSocialNetworkFile} payload - The data to create the social network with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract createSocialNetwork: (payload: CreateSocialNetworkFile)
  => Promise<DetailedSecureUser>;

  /**
   * Updates a social network by its ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the social network to update.
   * @param {UpdateSocialNetworkFile} payload - The data to update the social network with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract updateSocialNetworkById: (id: string, payload: UpdateSocialNetworkFile)
  => Promise<DetailedSecureUser>;
}

export default SocialNetworkUsecase;
