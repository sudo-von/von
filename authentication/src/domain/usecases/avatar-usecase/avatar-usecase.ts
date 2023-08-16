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
   * Replaces an avatar file for a user by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user to replace avatar for.
   * @param {ReplaceAvatarFile} payload - The data to replace the avatar's file with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract replaceAvatarFileByUsername: (username: string, payload: ReplaceAvatarFile)
  => Promise<DetailedSecureUser>;
}

export default AvatarUsecase;
