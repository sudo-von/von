import {
  CreateProfileEntity,
} from '../profile-entity';
import {
  validateQuote,
  validatePosition,
  validateInterest,
} from './profile-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import {
  InvalidProfileQuoteLengthError,
  InvalidProfilPositionLengthError,
  InvalidProfileInterestLengthError,
} from '../../../errors/profile-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateProfileCreation = (payload: CreateProfileEntity) => {
  const isQuoteLengthValid = validateQuote(payload.quote);
  if (!isQuoteLengthValid) throw InvalidProfileQuoteLengthError;

  const isInteresLengthtValid = validateInterest(payload.interest);
  if (!isInteresLengthtValid) throw InvalidProfileInterestLengthError;

  const isPositionLengthValid = validatePosition(payload.position);
  if (!isPositionLengthValid) throw InvalidProfilPositionLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateProfileCreation;
