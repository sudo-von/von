import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../avatar-errors';
import {
  ReplaceAvatarFile,
} from '../avatar-entities';
import {
  validateFileSize,
  validateFileMimeType,
} from './avatar-validations';

const validateAvatarFileReplacement = (payload: ReplaceAvatarFile) => {
  const formattedMimeType = payload.mimeType.trim().toLowerCase();

  const isFileMimetypeValid = validateFileMimeType(formattedMimeType);
  if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const isFileSizeValid = validateFileSize(payload.size);
  if (!isFileSizeValid) throw InvalidAvatarFileSizeError;
};

export default validateAvatarFileReplacement;
