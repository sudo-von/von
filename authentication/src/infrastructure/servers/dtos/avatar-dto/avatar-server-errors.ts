import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AvatarDomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  InvalidAvatarFileSizeError,
  AvatarReplacementFailedError,
  InvalidAvatarFileMimeTypeError,
} from '../../../../domain/entities/avatar-entity/avatar-errors';

export const AvatarReplacementFailedServerError = createServerErrorFactory({
  code: 'AVATAR_REPLACEMENT_FAILED',
  error: AvatarReplacementFailedError.error,
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
  AVATAR_REPLACEMENT_FAILED: AvatarReplacementFailedServerError,
  INVALID_AVATAR_FILE_MIME_TYPE: InvalidAvatarFileMimeTypeServerError,
  INVALID_AVATAR_FILE_SIZE: InvalidAvatarFileSizeServerError,
};
