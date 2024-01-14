import {
  InvalidSocialNetworkUrlLengthError,
  InvalidSocialNetworkNameLengthError,
} from '../social-network-errors';
import {
  CreateSocialNetwork,
} from '../social-network-entities';
import {
  validateUrlLength,
  validateNameLength,
} from './social-network-validations';

const validateSocialNetworkCreation = (payload: CreateSocialNetwork) => {
  const formattedName = payload.name.trim();
  const formattedUrl = payload.url.trim();

  const isNameLengthValid = validateNameLength(formattedName);
  if (!isNameLengthValid) throw InvalidSocialNetworkNameLengthError;

  const isUrlLengthValid = validateUrlLength(formattedUrl);
  if (!isUrlLengthValid) throw InvalidSocialNetworkUrlLengthError;
};

export default validateSocialNetworkCreation;
