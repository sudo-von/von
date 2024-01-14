import {
  NoUserCreatedYetError,
  UserUpdateFailedError,
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
  DetailedSocialNetwork,
  CreateSocialNetwork,
  UpdateSocialNetwork,
} from '../../domain/entities/social-network-entity/social-network-entities';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import SocialNetworkUsecase from '../../domain/usecases/social-newtork-usecase/social-newtork-usecase';
import validateSocialNetworkUpdate from '../../domain/entities/social-network-entity/social-network-validations/update-social-network-validations';
import validateSocialNetworkCreation from '../../domain/entities/social-network-entity/social-network-validations/create-social-network-validations';

class SocialNetworkUsecaseApplication extends SocialNetworkUsecase {
  deleteSocialNetworkById = async (id: string): Promise<DetailedSecureUser> => {
    const socialNetwork = await this.userRepository.getSocialNetworkById(id);
    if (!socialNetwork) throw SocialNetworkNotFoundError;

    const userWithSocialNetworkDeleted = await this.userRepository.deleteSocialNetworkById(id);
    if (!userWithSocialNetworkDeleted) throw SocialNetworkDeleteFailedError;

    const socialNetworks: DetailedSocialNetwork[] = userWithSocialNetworkDeleted.socialNetworks.map((sn, order) => ({
      id: sn.id,
      url: sn.url,
      name: sn.name,
      order,
    }));

    const updatedUser = await this.userRepository.updateUser({
      socialNetworks,
    });
    if (!updatedUser) throw UserUpdateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  createSocialNetwork = async (payload: CreateSocialNetwork): Promise<DetailedSecureUser> => {
    validateSocialNetworkCreation(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const updatedUser = await this.userRepository.createSocialNetwork({
      url: payload.url,
      name: payload.name,
      order: user.socialNetworks.length + 1,
    });
    if (!updatedUser) throw SocialNetworkCreateFailedError;

    const { socialNetworks } = user;
    socialNetworks.splice(payload.order, 0, payload);

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  updateSocialNetworkById = async (
    id: string,
    payload: UpdateSocialNetwork,
  ): Promise<DetailedSecureUser> => {
    validateSocialNetworkUpdate(payload);

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
