import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import profilePictureRules from './profile-picture-rules';

export const InvalidProfilePictureMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_MIME_TYPE',
  message: `Please provide a profile picture file with one of the following MIME types: ${profilePictureRules.mimetype.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidProfilePictureNameLengthError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_NAME_LENGTH',
  message: `Please provide a profile picture name that consists of ${profilePictureRules.name.MIN_LENGTH} to ${profilePictureRules.name.MAX_LENGTH} characters.`,
});

export const InvalidProfilePictureSizeError = createDomainErrorFactory({
  code: 'INVALID_PROFILE_PICTURE_SIZE',
  message: `Please provide a profile picture file that is smaller or equal to ${profilePictureRules.size.MAX_SIZE_BYTES.toLocaleString()} bytes.`,
});
