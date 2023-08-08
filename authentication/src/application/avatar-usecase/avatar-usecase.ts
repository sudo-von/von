import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  AvatarReplacementFailedError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import avatarRules from '../../domain/entities/avatar-entity/avatar-rules';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import detailedUserToDetailedSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateAvatarFileReplacement from '../../domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  generateAvatarFilenameByUsername = (username: string, mimetype: string): string => {
    const usernameHash = this.securityService.hashData(username, 'md5');

    const defaultFilename = `${usernameHash}.jpg`;

    const extension = mimetype.split('/').pop();

    if (!extension || !avatarRules.mimetype.ALLOWED_MIMETYPES.includes(mimetype.toLowerCase())) {
      return defaultFilename;
    }

    const filename = `${usernameHash}.${extension}`;
    return filename;
  };

  replaceAvatarFileByUsername = async (
    username: string,
    payload: ReplaceAvatarFile,
  ): Promise<DetailedSecureUser> => {
    validateAvatarFileReplacement(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    if (user.avatar) await this.fileService.delete(user.avatar);

    const avatar = this.generateAvatarFilenameByUsername(username, payload.mimetype);

    await this.fileService.upload(avatar, payload.buffer);

    const updatedUser = await this.userRepository.updateUser({
      avatar,
    }, { username });
    if (!updatedUser) throw AvatarReplacementFailedError;

    const secureUser = detailedUserToDetailedSecureUser(updatedUser);
    return secureUser;
  };
}

export default AvatarUsecaseApplication;
