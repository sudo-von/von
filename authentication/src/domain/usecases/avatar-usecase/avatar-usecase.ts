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
   * Deletes the avatar file of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract deleteAvatarFile: ()
  => Promise<DetailedSecureUser>;

  /**
   * Replaces the avatar file of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @param {ReplaceAvatarFile} payload - The data to replace the avatar's file with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract replaceAvatarFile: (payload: ReplaceAvatarFile)
  => Promise<DetailedSecureUser>;
}

export default AvatarUsecase;
