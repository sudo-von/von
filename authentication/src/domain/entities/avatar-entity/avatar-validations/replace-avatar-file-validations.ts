import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../avatar-errors';
import {
  ReplaceAvatarFile,
} from '../avatar-entities';
import {
  validateAvatarFileSize,
  validateAvatarFileMimetype,
} from './avatar-validations';

const validateAvatarFileReplacement = (payload: ReplaceAvatarFile) => {
  const isAvatarFileMimetypeValid = validateAvatarFileMimetype(payload.mimetype);
  if (!isAvatarFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const isAvatarFileSizeValid = validateAvatarFileSize(payload.size);
  if (!isAvatarFileSizeValid) throw InvalidAvatarFileSizeError;
};

export default validateAvatarFileReplacement;
