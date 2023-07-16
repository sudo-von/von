import {
  Avatar,
  CreateAvatarFile,
  UpdateAvatarFile,
} from '../../entities/avatar-entity/avatar-entities';
import FileService from '../../services/file-service/file-service';
import SecurityService from '../../services/security-service/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class AvatarUsecase {
  /**
  * Creates an instance of AvatarUsecase.
  * @param {FileService} fileService - The file service for file operations.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {SecurityService} securityService - The security service for cryptographic operations.
  */
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  /**
  * Generates an avatar filename for a user based on the user ID and mimetype.
  * @param {string} id - The ID of the user.
  * @param {string} mimetype - The mimetype of the avatar file.
  * @returns {string} The generated avatar filename.
  */
  abstract generateAvatarFilenameByUserId: (id: string, mimetype: string)
  => string;

  /**
  * Creates an avatar file for a user with the provided user ID and payload.
  * @param {string} id - The ID of the user.
  * @param {CreateAvatarFile} payload - The payload containing the avatar file data.
  * @returns {Promise<Avatar>} A promise with the created avatar file.
  */
  abstract createAvatarFileByUserId: (id: string, payload: CreateAvatarFile)
  => Promise<Avatar>;

  /**
  * Updates the avatar file for a user with the provided user ID and payload.
  * @param {string} id - The ID of the user.
  * @param {UpdateAvatarFile} payload - The payload containing the updated avatar file data.
  * @returns {Promise<Avatar>} A promise with the updated avatar file.
  */
  abstract updateAvatarFileByUserId: (id: string, payload: UpdateAvatarFile)
  => Promise<Avatar>;
}

export default AvatarUsecase;
