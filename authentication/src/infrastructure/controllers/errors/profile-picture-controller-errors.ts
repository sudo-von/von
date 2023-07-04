import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  InvalidProfilePictureSizeError,
  InvalidProfilePictureMimeTypeError,
  InvalidProfilePictureNameLengthError,
} from '../../../domain/entities/profile-picture/profile-picture-errors';

export const InvalidProfilePictureMimeTypeControllerError = createControllerErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_MIME_TYPE',
  message: InvalidProfilePictureMimeTypeError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidProfilePictureNameLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_NAME_LENGTH',
  message: InvalidProfilePictureNameLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const InvalidProfilePictureSizeControllerError = createControllerErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_SIZE',
  message: InvalidProfilePictureSizeError.message,
  statusCode: statusCode.clientSide.badRequest,
});
