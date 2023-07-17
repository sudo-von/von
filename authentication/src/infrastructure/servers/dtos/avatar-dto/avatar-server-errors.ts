import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AvatarDomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  AvatarUpdateFailedError,
  AvatarNotCreatedYetError,
  AvatarAlreadyCreatedError,
  AvatarCreationFailedError,
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../../../../domain/entities/avatar-entity/avatar-errors';

export const AvatarAlreadyCreatedServerError = createServerErrorFactory({
  code: 'AVATAR_ALREADY_CREATED',
  error: AvatarAlreadyCreatedError.error,
  statusCode: statusCodes.CONFLICT,
});

export const AvatarCreationFailedServerError = createServerErrorFactory({
  code: 'AVATAR_CREATION_FAILED',
  error: AvatarCreationFailedError.error,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const AvatarNotCreatedYetServerError = createServerErrorFactory({
  code: 'AVATAR_NOT_CREATED_YET',
  error: AvatarNotCreatedYetError.error,
  statusCode: statusCodes.CONFLICT,
});

export const AvatarUpdateFailedServerError = createServerErrorFactory({
  code: 'AVATAR_UPDATE_FAILED',
  error: AvatarUpdateFailedError.error,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const InvalidAvatarFileMimeTypeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  error: InvalidAvatarFileMimeTypeError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidAvatarFileSizeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  error: InvalidAvatarFileSizeError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const avatarServerErrors: Record<AvatarDomainErrorCode, ServerErrorFactory> = {
  AVATAR_ALREADY_CREATED: AvatarAlreadyCreatedServerError,
  AVATAR_CREATION_FAILED: AvatarCreationFailedServerError,
  AVATAR_NOT_CREATED_YET: AvatarNotCreatedYetServerError,
  AVATAR_UPDATE_FAILED: AvatarUpdateFailedServerError,
  INVALID_AVATAR_FILE_MIME_TYPE: InvalidAvatarFileMimeTypeServerError,
  INVALID_AVATAR_FILE_SIZE: InvalidAvatarFileSizeServerError,
};
