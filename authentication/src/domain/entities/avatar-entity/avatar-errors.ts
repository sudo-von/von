import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import avatarRules from './avatar-rules';

export const AvatarAlreadyCreatedError = createDomainErrorFactory({
  code: 'AVATAR_ALREADY_CREATED',
  error: 'The avatar has already been created.',
});

export const AvatarCreationFailedError = createDomainErrorFactory({
  code: 'AVATAR_CREATION_FAILED',
  error: 'The avatar you attempted to create could not be created.',
});

export const AvatarNotCreatedYetError = createDomainErrorFactory({
  code: 'AVATAR_NOT_CREATED_YET',
  error: 'The avatar has not been created yet.',
});

export const AvatarUpdateFailedError = createDomainErrorFactory({
  code: 'AVATAR_UPDATE_FAILED',
  error: 'The avatar you attempted to update could not be updated.',
});

export const InvalidAvatarFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_MIME_TYPE',
  error: `Please provide an avatar file with one of the following MIME types: ${avatarRules.mimetype.content.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidAvatarFileNameLengthError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_NAME_LENGTH',
  error: `Please provide an avatar file name that consists of ${avatarRules.name.content.MIN_LENGTH} to ${avatarRules.name.content.MAX_LENGTH} characters.`,
});

export const InvalidAvatarFileSizeError = createDomainErrorFactory({
  code: 'INVALID_AVATAR_FILE_SIZE',
  error: `Please provide an avatar file that consists of ${avatarRules.size.content.MIN_BYTES.toLocaleString()} to ${avatarRules.size.content.MAX_BYTES.toLocaleString()} bytes.`,
});
