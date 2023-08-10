import {
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../social-network-errors';
import {
  UpdateSocialNetworkFile,
} from '../social-network-entities';
import {
  validateSocialNetworkFileSize,
  validateSocialNetworkFileMimetype,
} from './social-network-validations';

const validateSocialNetworkUpdate = (payload: UpdateSocialNetworkFile) => {
  const isSocialNetworkFileSizeValid = validateSocialNetworkFileSize(payload.size);
  if (!isSocialNetworkFileSizeValid) throw InvalidSocialNetworkFileSizeError;

  const isSocialNetworkFileMimetypeValid = validateSocialNetworkFileMimetype(payload.mimetype);
  if (!isSocialNetworkFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;
};

export default validateSocialNetworkUpdate;
