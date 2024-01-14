import {
  InvalidSocialNetworkUrlLengthError,
  InvalidSocialNetworkNameLengthError,
} from '../social-network-errors';
import {
  UpdateSocialNetwork,
} from '../social-network-entities';
import {
  validateUrlLength,
  validateNameLength,
} from './social-network-validations';

const validateSocialNetworkUpdate = (payload: UpdateSocialNetwork) => {
  const formattedName = payload.name.trim();
  const formattedUrl = payload.url.trim();

  const isNameLengthValid = validateNameLength(formattedName);
  if (!isNameLengthValid) throw InvalidSocialNetworkNameLengthError;

  const isUrlLengthValid = validateUrlLength(formattedUrl);
  if (!isUrlLengthValid) throw InvalidSocialNetworkUrlLengthError;
};

export default validateSocialNetworkUpdate;
