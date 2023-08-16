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
   * Creates a social network file for a user by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user to create social network for.
   * @param {CreateSocialNetworkFile} payload - The data to create the social network's file with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract createSocialNetworkFileByUsername: (username: string, payload: CreateSocialNetworkFile)
  => Promise<DetailedSecureUser>;

  /**
   * Updates a social network file by its ID.
   * @authentication Requires authentication to access this method.
   * @param {string} id - The ID of the social network file to update.
   * @param {UpdateSocialNetworkFile} payload - The data to update the social network file with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract updateSocialNetworkFileById: (id: string, payload: UpdateSocialNetworkFile)
  => Promise<DetailedSecureUser>;
}

export default SocialNetworkUsecase;
