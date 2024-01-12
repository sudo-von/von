import {
  NoUserCreatedYetError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  NoAvatarStoredYetError,
  AvatarCreateFailedError,
  AvatarDeleteFailedError,
  AvatarReplaceFailedError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileExtensionError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import {
  validateFileMimeType,
} from '../../domain/entities/avatar-entity/avatar-validations/avatar-validations';
import validateAvatarFileReplacement from '../../domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  generateFilename = (hash: string, mimeType: string): string => {
    const formattedHash = hash.trim().toLowerCase();
    const formattedMimeType = mimeType.trim().toLowerCase();

    const isFileMimeTypeValid = validateFileMimeType(formattedMimeType);
    if (!isFileMimeTypeValid) throw InvalidAvatarFileMimeTypeError;

    const formattedExtension = formattedMimeType.split('/').pop();
    if (!formattedExtension) throw InvalidAvatarFileExtensionError;

    const filename = `${formattedHash}.${formattedExtension}`;
    return filename;
  };

  deleteAvatar = async (): Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    if (!user.avatar) throw NoAvatarStoredYetError;

    const fileExists = await this.avatarFileService.checkIfFileExists(user.avatar);
    if (!fileExists) throw NoAvatarStoredYetError;

    await this.avatarFileService.deleteFile(user.avatar);

    const updatedUser = await this.userRepository.deleteAvatar();
    if (!updatedUser) throw AvatarDeleteFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };

  replaceAvatar = async (payload: ReplaceAvatarFile): Promise<DetailedSecureUser> => {
    validateAvatarFileReplacement(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    if (user.avatar) await this.avatarFileService.deleteFile(user.avatar);

    const hashedFilename = this.securityService.generateDataHash(user.username, 'sha256');

    const secureFilename = this.generateFilename(hashedFilename, payload.mimeType);

    const avatar = await this.avatarFileService.uploadFile(secureFilename, payload.buffer);

    const updatedUser = await this.userRepository.updateUser({ avatar });
    if (!updatedUser) throw user.avatar ? AvatarReplaceFailedError : AvatarCreateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default AvatarUsecaseApplication;
