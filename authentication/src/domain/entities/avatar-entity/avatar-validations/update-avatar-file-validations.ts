import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileNameLengthError,
} from '../avatar-errors';
import {
  UpdateAvatarFile,
} from '../avatar-entities';
import {
  validateAvatarFileSize,
  validateAvatarFileMimetype,
  validateAvatarFileNameLength,
} from './avatar-validations';

const validateAvatarFileUpdate = (payload: UpdateAvatarFile) => {
  const isAvatarFileNameLengthValid = validateAvatarFileNameLength(payload.name);
  if (!isAvatarFileNameLengthValid) throw InvalidAvatarFileNameLengthError;

  const isAvatarFileSizeValid = validateAvatarFileSize(payload.size);
  if (!isAvatarFileSizeValid) throw InvalidAvatarFileSizeError;

  const isAvatarFileMimetypeValid = validateAvatarFileMimetype(payload.mimetype);
  if (!isAvatarFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;
};

export default validateAvatarFileUpdate;
