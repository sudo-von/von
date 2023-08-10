import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import avatarRules from './avatar-rules';

export const AvatarReplaceFailedError = createDomainErrorFactory({
  code: 'AVATAR_REPLACE_FAILED',
  error: 'The avatar you attempted to replace could not be replaced.',
});

export const InvalidAvatarFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  error: `Please provide an avatar file with one of the following MIME types: ${avatarRules.mimetype.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidAvatarFileSizeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  error: `Please provide an avatar file that consists of ${avatarRules.size.MIN_BYTES.toLocaleString()} to ${avatarRules.size.MAX_BYTES.toLocaleString()} bytes.`,
});
