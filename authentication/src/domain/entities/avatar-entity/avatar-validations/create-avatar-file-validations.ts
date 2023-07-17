import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../avatar-errors';
import {
  CreateAvatarFile,
} from '../avatar-entities';
import {
  validateAvatarFileSize,
  validateAvatarFileMimetype,
} from './avatar-validations';

const validateAvatarFileCreation = (payload: CreateAvatarFile) => {
  const isAvatarFileSizeValid = validateAvatarFileSize(payload.size);
  if (!isAvatarFileSizeValid) throw InvalidAvatarFileSizeError;

  const isAvatarFileMimetypeValid = validateAvatarFileMimetype(payload.mimetype);
  if (!isAvatarFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;
};

export default validateAvatarFileCreation;
