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
abstract class SocialNetworksUsecase {
  /**
  * Creates an instance of SocialNetworksUsecase.
  * @param {FileService} fileService - The file service for file operations.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {ISecurityService} securityService - The security service for cryptographic operations.
  */
  constructor(
    protected readonly fileService: FileService,
    protected readonly userRepository: IUserRepository,
    protected readonly securityService: ISecurityService,
  ) {}

  /**
  * Abstract method to generate a random social network filename.
  * @param {string} mimetype - The mimetype of the social network file.
  * @returns {string} The generated social network filename.
  */
  abstract generateRandomSocialNetworkFilename: (mimetype: string)
  => string;

  /**
  * Abstract method to create the social network file for a user by username.
  * @param {string} username - The username of the user to create social network for.
  * @param {CreateSocialNetworkFile} payload - The data to create the social network's file with.
  * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
  */
  abstract createSocialNetworkFileByUsername: (username: string, payload: CreateSocialNetworkFile)
  => Promise<DetailedSecureUser>;

  /**
  * Abstract method for updating a social network file by its ID.
  * @param {string} id - The ID of the social network file to update.
  * @param {UpdateSocialNetworkFile} payload - The data to update the social network file with.
  * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
  */
  abstract updateSocialNetworkFileById: (id: string, payload: UpdateSocialNetworkFile)
  => Promise<DetailedSecureUser>;
}

export default SocialNetworksUsecase;
