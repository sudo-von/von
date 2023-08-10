import {
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkNameLengthError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../social-network-errors';
import {
  UpdateSocialNetworkFile,
} from '../social-network-entities';
import {
  validateSocialNetworkFileSize,
  validateSocialNetworkNameLength,
  validateSocialNetworkFileMimetype,
} from './social-network-validations';

const validateSocialNetworkUpdate = (payload: UpdateSocialNetworkFile) => {
  const isSocialNetworkFileSizeValid = validateSocialNetworkFileSize(payload.size);
  if (!isSocialNetworkFileSizeValid) throw InvalidSocialNetworkFileSizeError;

  const isSocialNetworkFileMimetypeValid = validateSocialNetworkFileMimetype(payload.mimetype);
  if (!isSocialNetworkFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

  const isSocialNetworkNameLengthValid = validateSocialNetworkNameLength(payload.name);
  if (!isSocialNetworkNameLengthValid) throw InvalidSocialNetworkNameLengthError;
};

export default validateSocialNetworkUpdate;
