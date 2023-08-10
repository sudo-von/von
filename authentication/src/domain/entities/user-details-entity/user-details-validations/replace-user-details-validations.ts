import {
  InvalidQuoteLengthError,
  InvalidInterestLengthError,
  InvalidPositionLengthError,
} from '../user-details-errors';
import {
  ReplaceUserDetails,
} from '../user-details-entities';
import {
  validateQuoteLength,
  validateInterestLength,
  validatePositionLength,
} from './user-details-validations';

const validateUserDetailsReplacement = (payload: ReplaceUserDetails) => {
  const isInterestLengthValid = validateInterestLength(payload.interest);
  if (!isInterestLengthValid) throw InvalidInterestLengthError;

  const isPositionLengthValid = validatePositionLength(payload.position);
  if (!isPositionLengthValid) throw InvalidPositionLengthError;

  const isQuoteLengthValid = validateQuoteLength(payload.quote);
  if (!isQuoteLengthValid) throw InvalidQuoteLengthError;
};

export default validateUserDetailsReplacement;
