import {
  CreateProfileEntity,
} from '../profile-entity';
import {
  validateProfileQuote,
  validateProfilePosition,
  validateProfileInterest,
} from './profile-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import {
  InvalidProfileQuoteLengthError,
  InvalidProfilPositionLengthError,
  InvalidProfileInterestLengthError,
} from '../profile-errors';
import validateUsernameLength from '../../user/validations/user-validations';

const validateProfileCreation = (payload: CreateProfileEntity) => {
  const isQuoteLengthValid = validateProfileQuote(payload.quote);
  if (!isQuoteLengthValid) throw InvalidProfileQuoteLengthError;

  const isInteresLengthtValid = validateProfileInterest(payload.interest);
  if (!isInteresLengthtValid) throw InvalidProfileInterestLengthError;

  const isPositionLengthValid = validateProfilePosition(payload.position);
  if (!isPositionLengthValid) throw InvalidProfilPositionLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateProfileCreation;
