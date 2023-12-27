import {
  InvalidSocialNetworkFileMimeTypeError,
  InvalidSocialNetworkFileExtensionError,
} from './social-network-errors';
import {
  validateFileMimetype,
} from './social-network-validations/social-network-validations';

const generateFilename = (hash: string, mimetype: string): string => {
  const formatedHash = hash.trim().toLowerCase();
  const formatedMimetype = mimetype.trim().toLowerCase();

  const isFileMimetypeValid = validateFileMimetype(formatedMimetype);
  if (!isFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

  const extension = formatedMimetype.split('/').pop();
  if (!extension) throw InvalidSocialNetworkFileExtensionError;

  const formatedExtension = extension.replace('+xml', '');

  const filename = `${formatedHash}.${formatedExtension}`;
  return filename;
};

export default generateFilename;
