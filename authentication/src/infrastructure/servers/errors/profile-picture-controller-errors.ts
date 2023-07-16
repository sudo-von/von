import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileNameLengthError,
} from '../../../domain/entities/avatar-entity/avatar-errors';

export const InvalidProfilePictureMimeTypeControllerError = createControllerErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  message: InvalidAvatarFileMimeTypeError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidProfilePictureNameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_AVATAR_FILE_NAME_LENGTH',
  message: InvalidAvatarFileNameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidProfilePictureSizeControllerError = createControllerErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  message: InvalidAvatarFileSizeError.message,
  statusCode: statusCode.clientSide.badRequest,
});
