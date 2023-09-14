import {
  InvalidAvatarFileMimeTypeError,
} from './avatar-errors';
import {
  validateFileMimetype,
} from './avatar-validations/avatar-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const isFileMimetypeValid = validateFileMimetype(mimetype);
  if (!isFileMimetypeValid) throw InvalidAvatarFileMimeTypeError;

  const extension = mimetype.split('/').pop();
  const filename = `${hash}.${extension}`;
  return filename;
};

export default generateFilename;
