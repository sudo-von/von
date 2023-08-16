import {
  InvalidAvatarFileMimeTypeError,
} from './avatar-errors';
import {
  validateFileMimetype,
} from './avatar-validations/avatar-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const isFileMimetypeValid = validateFileMimetype(mimetype);
  if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const filename = `${hash}.${mimetype.split('/').pop()}`;
  return filename;
};

export default generateFilename;
