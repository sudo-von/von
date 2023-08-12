import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../avatar-errors';
import {
  ReplaceAvatarFile,
} from '../avatar-entities';
import {
  validateFileSize,
  validateFileMimetype,
} from './avatar-validations';

const validateAvatarFileReplacement = (payload: ReplaceAvatarFile) => {
  const isFileMimetypeValid = validateFileMimetype(payload.mimetype);
  if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const isFileSizeValid = validateFileSize(payload.size);
  if (!isFileSizeValid) throw InvalidAvatarFileSizeError;
};

export default validateAvatarFileReplacement;
