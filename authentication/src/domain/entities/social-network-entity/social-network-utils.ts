import {
  InvalidSocialNetworkFileMimeTypeError,
} from './social-network-errors';
import {
  validateFileMimetype,
} from './social-network-validations/social-network-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const isFileMimetypeValid = validateFileMimetype(mimetype);
  if (!isFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

  const filename = `${hash}.svg`;
  return filename;
};

export default generateFilename;
