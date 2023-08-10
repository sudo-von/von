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
} from '../../domain/entities/social-network-entity/social-network-errors';
import {
  CreateSocialNetworkFile,
  UpdateSocialNetworkFile,
} from '../../domain/entities/social-network-entity/social-network-entities';
import detailedUserToSecureUser from '../../domain/entities/user-entity/user-mappers';
import SocialNetworkUsecase from '../../domain/usecases/social-newtork-usecase/social-newtork-usecase';
import validateSocialNetworkFileUpdate from '../../domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations';
import validateSocialNetworkFileCreation from '../../domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations';

class SocialNetworkUsecaseApplication extends SocialNetworkUsecase {
  generateRandomSocialNetworkFilename = (mimetype: string): string => {
    const randomHash = this.securityService.generateRandomHash('sha256');
    const fileExtension = mimetype.split('/').pop();

    const filename = `${randomHash}.${fileExtension}`;
    return filename;
  };

  createSocialNetworkFileByUsername = async (
    username: string,
    payload: CreateSocialNetworkFile,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkFileCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const filename = this.generateRandomSocialNetworkFilename(payload.mimetype);

    await this.fileService.uploadFile(filename, payload.buffer);

    const updatedUser = await this.userRepository.createSocialNetwork({
      src: filename,
      url: payload.url,
      name: payload.name,
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

    const user = await this.userRepository.getUser({ socialNetworks: { id } });
    if (!user) throw SocialNetworkNotFoundError;

    if (user.avatar) await this.fileService.deleteFile(user.avatar);

    const filename = this.generateRandomSocialNetworkFilename(payload.mimetype);

    await this.fileService.uploadFile(filename, payload.buffer);

    const updatedUser = await this.userRepository.createSocialNetwork({
      src: filename,
      url: payload.url,
      name: payload.name,
    }, { username: user.username });
    if (!updatedUser) throw SocialNetworkUpdateFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };
}

export default SocialNetworkUsecaseApplication;
