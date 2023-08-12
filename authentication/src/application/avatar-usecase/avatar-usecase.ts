import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  AvatarReplaceFailedError, InvalidAvatarFileMimeTypeError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import {
  validateFileMimetype,
} from '../../domain/entities/avatar-entity/avatar-validations/avatar-validations';
import detailedUserToSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateAvatarFileReplacement from '../../domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  generateAvatarFilenameByUsername = (username: string, mimetype: string): string => {
    const usernameHash = this.securityService.generateDataHash(username, 'sha256');

    const isFileMimetypeValid = validateFileMimetype(mimetype);
    if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

    const filename = `${usernameHash}.${mimetype.split('/').pop()}`;
    return filename;
  };

  replaceAvatarFileByUsername = async (
    username: string,
    payload: ReplaceAvatarFile,
  ): Promise<DetailedSecureUser> => {
    validateAvatarFileReplacement(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    if (user.avatar) {
      const avatarFileExists = await this.fileService.fileExists(user.avatar);
      if (avatarFileExists) await this.fileService.deleteFile(user.avatar);
    }

    const avatar = this.generateAvatarFilenameByUsername(username, payload.mimetype);

    await this.fileService.uploadFile(avatar, payload.buffer);

    const updatedUser = await this.userRepository.updateUser({
      avatar,
    }, { username });
    if (!updatedUser) throw AvatarReplaceFailedError;

    const secureUser = detailedUserToSecureUser(updatedUser);
    return secureUser;
  };
}

export default AvatarUsecaseApplication;
