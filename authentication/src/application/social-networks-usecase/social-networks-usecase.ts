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
import SocialNetworksUsecase from '../../domain/usecases/social-newtorks-usecase/social-newtorks-usecase';
import validateSocialNetworkFileUpdate from '../../domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations';
import validateSocialNetworkFileCreation from '../../domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations';

class SocialNetworksUsecaseApplication extends SocialNetworksUsecase {
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

    const userFoundBySnId = await this.userRepository.getUser({ socialNetworks: { id } });
    if (!userFoundBySnId || !userFoundBySnId.socialNetworks) throw SocialNetworkNotFoundError;

    const socialNetwork = userFoundBySnId.socialNetworks.find((sn) => sn.id === id);
    if (!socialNetwork) throw SocialNetworkNotFoundError;

    if (socialNetwork.src) await this.fileService.deleteFile(socialNetwork.src);

    const filename = this.generateRandomSocialNetworkFilename(payload.mimetype);

    await this.fileService.uploadFile(filename, payload.buffer);

    const updatedUser = await this.userRepository.updateSocialNetworkById(id, {
      src: filename,
      url: payload.url,
      name: payload.name,
    });
    if (!updatedUser) throw SocialNetworkUpdateFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };
}

export default SocialNetworksUsecaseApplication;
