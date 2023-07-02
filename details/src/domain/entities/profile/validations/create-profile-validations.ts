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
  InvalidProfilePositionLengthError,
  InvalidProfileInterestLengthError,
} from '../profile-errors';
import validateUsernameLength from '../../user/validations/user-validations';

const validateProfileCreation = (payload: CreateProfileEntity) => {
  const isPositionLengthValid = validateProfilePosition(payload.position);
  if (!isPositionLengthValid) throw InvalidProfilePositionLengthError;

  const isInteresLengthtValid = validateProfileInterest(payload.interest);
  if (!isInteresLengthtValid) throw InvalidProfileInterestLengthError;

  const isQuoteLengthValid = validateProfileQuote(payload.quote);
  if (!isQuoteLengthValid) throw InvalidProfileQuoteLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateProfileCreation;
