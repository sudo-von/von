import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  AvatarUpdateFailedError,
  AvatarCreationFailedError,
} from '../../domain/entities/avatar-entity/avatar-errors';
import {
  Avatar,
  CreateAvatarFile,
  UpdateAvatarFile,
} from '../../domain/entities/avatar-entity/avatar-entities';
import avatarRules from '../../domain/entities/avatar-entity/avatar-rules';
import userToAvatar from '../../domain/entities/avatar-entity/avatar-mappers';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import validateAvatarFileUpdate from '../../domain/entities/avatar-entity/avatar-validations/update-avatar-file-validations';
import validateAvatarFileCreation from '../../domain/entities/avatar-entity/avatar-validations/create-avatar-file-validations';

class AvatarUsecaseApplication extends AvatarUsecase {
  generateAvatarFilenameByUserId = (
    id: string,
    mimetype: string,
  ): string => {
    const userIdChecksum = this.securityService.computeChecksum(id);

    const extension = mimetype.split('/').pop();

    if (!extension) {
      return `${userIdChecksum}.jpg`;
    }

    if (!avatarRules.mimetype.content.ALLOWED_MIMETYPES.includes(extension)) {
      return `${userIdChecksum}.jpg`;
    }

    return `${userIdChecksum}.${extension}`;
  };

  createAvatarFileByUserId = async (
    id: string,
    payload: CreateAvatarFile,
  ): Promise<Avatar> => {
    validateAvatarFileCreation(payload);

    const user = await this.userRepository.getUser({ id });
    if (!user) throw UserNotFoundError;

    const avatarFilename = this.generateAvatarFilenameByUserId(id, payload.mimetype);

    await this.fileService.upload(avatarFilename, payload.buffer);

    const updatedAvatar = await this.userRepository.updateUser({
      avatar: avatarFilename,
    }, { id });
    if (!updatedAvatar) throw AvatarCreationFailedError;

    const avatar = userToAvatar(updatedAvatar);
    return avatar;
  };

  updateAvatarFileByUserId = async (
    id: string,
    payload: UpdateAvatarFile,
  ): Promise<Avatar> => {
    validateAvatarFileUpdate(payload);

    const user = await this.userRepository.getUser({ id });
    if (!user) throw UserNotFoundError;

    if (user.avatar) await this.fileService.delete(user.avatar);

    const avatarFilename = this.generateAvatarFilenameByUserId(id, payload.mimetype);

    await this.fileService.upload(avatarFilename, payload.buffer);

    const updatedAvatar = await this.userRepository.updateUser({
      avatar: avatarFilename,
    }, { id });
    if (!updatedAvatar) throw AvatarUpdateFailedError;

    const avatar = userToAvatar(updatedAvatar);
    return avatar;
  };
}

export default AvatarUsecaseApplication;
