import {
  NoUserCreatedYetError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  SocialNetworkNotFoundError,
  SocialNetworkCreateFailedError,
  SocialNetworkDeleteFailedError,
  SocialNetworkUpdateFailedError,
} from '../../domain/entities/social-network-entity/social-network-errors';
import {
  CreateSocialNetworkFile,
  UpdateSocialNetworkFile,
} from '../../domain/entities/social-network-entity/social-network-entities';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import generateFilename from '../../domain/entities/social-network-entity/social-network-utils';
import SocialNetworkUsecase from '../../domain/usecases/social-newtork-usecase/social-newtork-usecase';
import validateSocialNetworkFileUpdate from '../../domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations';
import validateSocialNetworkFileCreation from '../../domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations';

class SocialNetworkUsecaseApplication extends SocialNetworkUsecase {
  deleteSocialNetworkById = async (
    id: string,
  ): Promise<DetailedSecureUser> => {
    const socialNetwork = await this.userRepository.getSocialNetworkById(id);
    if (!socialNetwork) throw SocialNetworkNotFoundError;

    const updatedUser = await this.userRepository.deleteSocialNetworkById(id);
    if (!updatedUser) throw SocialNetworkDeleteFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  createSocialNetwork = async (
    payload: CreateSocialNetworkFile,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkFileCreation(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const hashedFilename = this.securityService.generateDataHash(payload.name, 'sha256');

    const secureFilename = generateFilename(hashedFilename, payload.mimetype);

    await this.fileService.uploadFile(secureFilename, payload.buffer);

    const updatedUser = await this.userRepository.createSocialNetwork({
      url: payload.url,
      name: payload.name,
      src: secureFilename,
    });
    if (!updatedUser) throw SocialNetworkCreateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  updateSocialNetworkById = async (
    id: string,
    payload: UpdateSocialNetworkFile,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkFileUpdate(payload);

    const socialNetwork = await this.userRepository.getSocialNetworkById(id);
    if (!socialNetwork) throw SocialNetworkNotFoundError;

    await this.fileService.deleteFile(socialNetwork.src);

    const hashedFilename = this.securityService.generateDataHash(payload.name, 'sha256');

    const secureFilename = generateFilename(hashedFilename, payload.mimetype);

    await this.fileService.uploadFile(secureFilename, payload.buffer);

    const updatedUser = await this.userRepository.updateSocialNetworkById(id, {
      url: payload.url,
      name: payload.name,
      src: secureFilename,
    });
    if (!updatedUser) throw SocialNetworkUpdateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default SocialNetworkUsecaseApplication;
