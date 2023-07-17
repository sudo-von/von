import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../avatar-errors';
import {
  UpdateAvatarFile,
} from '../avatar-entities';
import {
  validateAvatarFileSize,
  validateAvatarFileMimetype,
} from './avatar-validations';

const validateAvatarFileUpdate = (payload: UpdateAvatarFile) => {
  const isAvatarFileSizeValid = validateAvatarFileSize(payload.size);
  if (!isAvatarFileSizeValid) throw InvalidAvatarFileSizeError;

  const isAvatarFileMimetypeValid = validateAvatarFileMimetype(payload.mimetype);
  if (!isAvatarFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;
};

export default validateAvatarFileUpdate;
