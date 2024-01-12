import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  ReplaceAvatarFile,
} from '../../entities/avatar-entity/avatar-entities';
import FileService from '../../services/file-service/file-service';
import ISecurityService from '../../services/security-service/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing an avatar use case.
 * @abstract
 */
abstract class AvatarUsecase {
  /**
   * Creates an instance of AvatarUsecase.
   * @param {FileService} avatarFileService - The file service.
   * @param {IUserRepository} userRepository - The user repository.
   * @param {ISecurityService} securityService - The security service.
   */
  constructor(
    protected readonly avatarFileService: FileService,
    protected readonly userRepository: IUserRepository,
    protected readonly securityService: ISecurityService,
  ) {}

  /**
   * Deletes the avatar of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract deleteAvatar: ()
  => Promise<DetailedSecureUser>;

  /**
   * Replaces the avatar of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @param {ReplaceAvatarFile} payload - The data to replace the avatar with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract replaceAvatar: (payload: ReplaceAvatarFile)
  => Promise<DetailedSecureUser>;

  /**
   * Generates a filename for an avatar based on the provided hash and mimetype.
   * @authentication Requires authentication to access this method.
   * @param {string} hash - The hash used to create the filename.
   * @param {string} mimetype - The mimetype of the avatar file.
   * @returns {string} The generated avatar filename.
   */
  abstract generateFilename: (hash: string, mimetype: string)
  => string;
}

export default AvatarUsecase;
