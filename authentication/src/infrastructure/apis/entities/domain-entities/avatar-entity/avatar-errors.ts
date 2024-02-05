import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  AvatarDomainErrorCode,
} from '../../../../../domain/entities/error-entity/error-codes';
import {
  AvatarCreateFailedError,
  AvatarDeleteFailedError,
  AvatarReplaceFailedError,
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileExtensionError,
  NoAvatarStoredYetError,
} from '../../../../../domain/entities/avatar-entity/avatar-errors';

export const AvatarCreateFailedServerError = createServerErrorFactory({
  code: 'AVATAR_CREATE_FAILED',
  message: AvatarCreateFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const AvatarDeleteFailedServerError = createServerErrorFactory({
  code: 'AVATAR_DELETE_FAILED',
  message: AvatarDeleteFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const AvatarReplaceFailedServerError = createServerErrorFactory({
  code: 'AVATAR_REPLACE_FAILED',
  message: AvatarReplaceFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const InvalidAvatarFileExtensionServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_EXTENSION',
  message: InvalidAvatarFileExtensionError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidAvatarFileMimeTypeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  message: InvalidAvatarFileMimeTypeError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidAvatarFileSizeServerError = createServerErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  message: InvalidAvatarFileSizeError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const NoAvatarStoredYetServerError = createServerErrorFactory({
  code: 'NO_AVATAR_STORED_YET',
  message: NoAvatarStoredYetError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const avatarServerErrors: Record<AvatarDomainErrorCode, ServerErrorFactory> = {
  AVATAR_CREATE_FAILED: AvatarCreateFailedServerError,
  AVATAR_DELETE_FAILED: AvatarDeleteFailedServerError,
  AVATAR_REPLACE_FAILED: AvatarReplaceFailedServerError,
  INVALID_AVATAR_FILE_EXTENSION: InvalidAvatarFileExtensionServerError,
  INVALID_AVATAR_FILE_MIME_TYPE: InvalidAvatarFileMimeTypeServerError,
  INVALID_AVATAR_FILE_SIZE: InvalidAvatarFileSizeServerError,
  NO_AVATAR_STORED_YET: NoAvatarStoredYetServerError,
};
