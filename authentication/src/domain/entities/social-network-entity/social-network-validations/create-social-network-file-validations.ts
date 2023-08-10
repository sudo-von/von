import {
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../social-network-errors';
import {
  CreateSocialNetworkFile,
} from '../social-network-entities';
import {
  validateSocialNetworkFileSize,
  validateSocialNetworkFileMimetype,
} from './social-network-validations';

const validateSocialNetworkCreation = (payload: CreateSocialNetworkFile) => {
  const isSocialNetworkFileSizeValid = validateSocialNetworkFileSize(payload.size);
  if (!isSocialNetworkFileSizeValid) throw InvalidSocialNetworkFileSizeError;

  const isSocialNetworkFileMimetypeValid = validateSocialNetworkFileMimetype(payload.mimetype);
  if (!isSocialNetworkFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;
};

export default validateSocialNetworkCreation;
