import {
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkUrlLengthError,
  InvalidSocialNetworkNameLengthError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../social-network-errors';
import {
  CreateSocialNetworkFile,
} from '../social-network-entities';
import {
  validateFileSize,
  validateUrlLength,
  validateNameLength,
  validateFileMimetype,
} from './social-network-validations';

const validateSocialNetworkFileCreation = (payload: CreateSocialNetworkFile) => {
  const isFileMimetypeValid = validateFileMimetype(payload.mimetype);
  if (!isFileMimetypeValid) throw InvalidSocialNetworkFileMimeTypeError;

  const isFileSizeValid = validateFileSize(payload.size);
  if (!isFileSizeValid) throw InvalidSocialNetworkFileSizeError;

  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidSocialNetworkNameLengthError;

  const isUrlLengthValid = validateUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidSocialNetworkUrlLengthError;
};

export default validateSocialNetworkFileCreation;
