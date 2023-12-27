import {
  InvalidSocialNetworkFileMimeTypeError,
  InvalidSocialNetworkFileExtensionError,
} from './social-network-errors';
import {
  validateFileMimetype,
} from './social-network-validations/social-network-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const isFileMimetypeValid = validateFileMimetype(mimetype);
  if (!isFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

  const extension = mimetype.split('/').pop();
  if (!extension) throw InvalidSocialNetworkFileExtensionError;

  const formatedExtension = extension.replace('+xml', '');

  const filename = `${hash}.${formatedExtension}`;
  return filename;
};

export default generateFilename;
