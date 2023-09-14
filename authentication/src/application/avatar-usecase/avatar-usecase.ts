import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  AvatarReplaceFailedError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import generateFilename from '../../domain/entities/avatar-entity/avatar-utils';
import detailedUserToSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateAvatarFileReplacement from '../../domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  replaceAvatar = async (
    username: string,
    payload: ReplaceAvatarFile,
  ): Promise<DetailedSecureUser> => {
    validateAvatarFileReplacement(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    if (user.avatar) {
      const fileExists = await this.fileService.fileExists(user.avatar);
      if (fileExists) await this.fileService.deleteFile(user.avatar);
    }

    const hashedFilename = this.securityService.generateDataHash(user.username, 'sha256');

    const secureFilename = generateFilename(hashedFilename, payload.mimetype);

    await this.fileService.uploadFile(secureFilename, payload.buffer);

    const updatedUser = await this.userRepository.updateUser({
      avatar: secureFilename,
    }, { username });
    if (!updatedUser) throw AvatarReplaceFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };
}

export default AvatarUsecaseApplication;
