import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import avatarRules from './avatar-rules';

export const AvatarCreateFailedError = createDomainErrorFactory({
  code: 'AVATAR_CREATE_FAILED',
  message: 'The avatar you attempted to create could not be created.',
});

export const AvatarReplaceFailedError = createDomainErrorFactory({
  code: 'AVATAR_REPLACE_FAILED',
  message: 'The avatar you attempted to replace could not be replaced.',
});

export const InvalidAvatarFileExtensionTypeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_EXTENSION',
  message: 'The MIME type provided for the avatar file is valid, but the extension is empty.',
});

export const InvalidAvatarFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  message: `Please provide an avatar file with one of the following MIME types: ${avatarRules.mimetype.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidAvatarFileSizeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  message: `Please provide an avatar file that consists of ${avatarRules.size.MIN_BYTES.toLocaleString()} to ${avatarRules.size.MAX_BYTES.toLocaleString()} bytes.`,
});
