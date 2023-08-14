import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  SocialNetworkNotFoundError,
  SocialNetworkCreateFailedError,
  SocialNetworkUpdateFailedError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../../domain/entities/social-network-entity/social-network-errors';
import {
  CreateSocialNetworkFile,
  UpdateSocialNetworkFile,
} from '../../domain/entities/social-network-entity/social-network-entities';
import detailedUserToSecureUser from '../../domain/entities/user-entity/user-mappers';
import SocialNetworkUsecase from '../../domain/usecases/social-newtork-usecase/social-newtork-usecase';
import {
  validateFileMimetype,
} from '../../domain/entities/social-network-entity/social-network-validations/social-network-validations';
import validateSocialNetworkFileUpdate from '../../domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations';
import validateSocialNetworkFileCreation from '../../domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations';

class SocialNetworkUsecaseApplication extends SocialNetworkUsecase {
  deleteSocialNetworkFileByFilename = async (
    filename: string,
  ): Promise<void> => {
    const fileExists = await this.fileService.fileExists(filename);
    if (!fileExists) await this.fileService.deleteFile(filename);
  };

  generateRandomSocialNetworkFilename = (mimetype: string): string => {
    const randomHash = this.securityService.generateRandomHash('sha256');

    const isFileMimetypeValid = validateFileMimetype(mimetype);
    if (!isFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

    const filename = `${randomHash}.${mimetype.split('/').pop()}`;
    return filename;
  };

  createSocialNetworkFileByUsername = async (
    username: string,
    payload: CreateSocialNetworkFile,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkFileCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const socialNetworkFilename = this.generateRandomSocialNetworkFilename(payload.mimetype);

    await this.fileService.uploadFile(socialNetworkFilename, payload.buffer);

    const updatedUser = await this.userRepository.createSocialNetwork({
      url: payload.url,
      name: payload.name,
      src: socialNetworkFilename,
    }, { username });
    if (!updatedUser) throw SocialNetworkCreateFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };

  updateSocialNetworkFileById = async (
    id: string,
    payload: UpdateSocialNetworkFile,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkFileUpdate(payload);

    const socialNetwork = await this.userRepository.getSocialNetworkById(id);
    if (!socialNetwork) throw SocialNetworkNotFoundError;

    await this.deleteSocialNetworkFileByFilename(socialNetwork.src);

    const socialNetworkFilename = this.generateRandomSocialNetworkFilename(payload.mimetype);

    await this.fileService.uploadFile(socialNetworkFilename, payload.buffer);

    const updatedUser = await this.userRepository.updateSocialNetworkById(id, {
      url: payload.url,
      name: payload.name,
      src: socialNetworkFilename,
    });
    if (!updatedUser) throw SocialNetworkUpdateFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };
}

export default SocialNetworkUsecaseApplication;
