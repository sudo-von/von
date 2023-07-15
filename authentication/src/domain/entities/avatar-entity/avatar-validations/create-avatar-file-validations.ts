import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileNameLengthError,
} from '../avatar-errors';
import {
  CreateAvatarFile,
} from '../avatar-entities';
import {
  validateAvatarFileSize,
  validateAvatarFileMimetype,
  validateAvatarFileNameLength,
} from './avatar-validations';

const validateAvatarFileCreation = (payload: CreateAvatarFile) => {
  const isAvatarFileNameLengthValid = validateAvatarFileNameLength(payload.name);
  if (!isAvatarFileNameLengthValid) throw InvalidAvatarFileNameLengthError;

  const isAvatarFileSizeValid = validateAvatarFileSize(payload.size);
  if (!isAvatarFileSizeValid) throw InvalidAvatarFileSizeError;

  const isAvatarFileMimetypeValid = validateAvatarFileMimetype(payload.mimetype);
  if (!isAvatarFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;
};

export default validateAvatarFileCreation;
