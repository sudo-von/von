import {
  InvalidAvatarFileMimeTypeError,
  InvalidAvatarFileExtensionError,
} from './avatar-errors';
import {
  validateFileMimetype,
} from './avatar-validations/avatar-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const formatedHash = hash.trim();
  const formatedMimetype = mimetype.trim();

  const isFileMimetypeValid = validateFileMimetype(formatedMimetype);
  if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const extension = formatedMimetype.split('/').pop();
  if (!extension) throw InvalidAvatarFileExtensionError;

  const filename = `${formatedHash}.${extension}`;
  return filename;
};

export default generateFilename;
