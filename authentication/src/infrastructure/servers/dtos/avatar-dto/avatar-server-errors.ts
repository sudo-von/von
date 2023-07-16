import statusCodes from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AvatarUpdateFailedError,
  AvatarNotCreatedYetError,
  AvatarAlreadyCreatedError,
  AvatarCreationFailedError,
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileNameLengthError,
} from '../../../../domain/entities/avatar-entity/avatar-errors';

export const AvatarAlreadyCreatedServerError = createServerErrorFactory({
  code: 'AVATAR_ALREADY_CREATED',
  error: AvatarAlreadyCreatedError.message,
  statusCode: statusCodes.CONFLICT,
});

export const AvatarCreationFailedServerError = createServerErrorFactory({
  code: 'AVATAR_CREATION_FAILED',
  error: AvatarCreationFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const AvatarNotCreatedYetServerError = createServerErrorFactory({
  code: 'AVATAR_NOT_CREATED_YET',
  error: AvatarNotCreatedYetError.message,
  statusCode: statusCodes.ACCEPTED,
});

export const AvatarUpdateFailedServerError = createServerErrorFactory({
  code: 'AVATAR_UPDATE_FAILED',
  error: AvatarUpdateFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const InvalidAvatarFileMimeTypeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  error: InvalidAvatarFileMimeTypeError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidAvatarFileNameLengthServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_NAME_LENGTH',
  error: InvalidAvatarFileNameLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidAvatarFileSizeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  error: InvalidAvatarFileSizeError.message,
  statusCode: statusCodes.BAD_REQUEST,
});
