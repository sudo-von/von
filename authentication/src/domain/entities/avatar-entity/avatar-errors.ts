import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import avatarRules from './avatar-rules';

export const InvalidAvatarFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  message: `Please provide an avatar file with one of the following MIME types: ${avatarRules.mimetype.content.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidAvatarFileNameLengthError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_NAME_LENGTH',
  message: `Please provide an avatar file name that consists of ${avatarRules.name.content.MIN_LENGTH} to ${avatarRules.name.content.MAX_LENGTH} characters.`,
});

export const InvalidAvatarFileSizeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  message: `Please provide an avatar file that consists of ${avatarRules.size.content.MIN_BYTES.toLocaleString()} to ${avatarRules.size.content.MAX_BYTES.toLocaleString()} bytes.`,
});
