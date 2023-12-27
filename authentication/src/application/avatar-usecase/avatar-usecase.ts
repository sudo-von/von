import {
  NoUserCreatedYetError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  NoAvatarStoredYetError,
  AvatarDeleteFailedError,
  AvatarReplaceFailedError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import generateFilename from '../../domain/entities/avatar-entity/avatar-utils';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateAvatarFileReplacement from '../../domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  deleteAvatar = async (): Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    if (!user.avatar) throw NoAvatarStoredYetError;

    await this.fileService.deleteFile(user.avatar);

    const updatedUser = await this.userRepository.deleteAvatar();
    if (!updatedUser) throw AvatarDeleteFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  replaceAvatar = async (
    payload: ReplaceAvatarFile,
  ): Promise<DetailedSecureUser> => {
    validateAvatarFileReplacement(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    if (user.avatar) await this.fileService.deleteFile(user.avatar);

    const hashedFilename = this.securityService.generateDataHash(user.username, 'sha256');

    const secureFilename = generateFilename(hashedFilename, payload.mimetype);

    await this.fileService.uploadFile(secureFilename, payload.buffer);

    const updatedUser = await this.userRepository.updateUser({
      avatar: secureFilename,
    });
    if (!updatedUser) throw AvatarReplaceFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default AvatarUsecaseApplication;
